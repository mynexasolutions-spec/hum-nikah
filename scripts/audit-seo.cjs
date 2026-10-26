// Technical SEO audit of every built public page. Run after `npm run build`:
//   npm run audit:seo
// Checks: one H1, canonical + og tags that match the page, no empty meta, zoom
// allowed, crawlable links, image alt text, and JSON-LD types present.
const fs = require("fs");
const path = require("path");

const APP = path.join(__dirname, "..", ".next", "server", "app");
const SITE = "https://www.humnikah.com";

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, out);
    else if (e.name.endsWith(".html")) out.push(f);
  }
  return out;
}

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const pages = walk(APP)
  .map((f) => ({
    file: f,
    route: ("/" + path.relative(APP, f).replace(/\\/g, "/").replace(/\.html$/, "")).replace(/^\/index$/, "/"),
  }))
  .filter((p) => !/^\/(admin|api|_not-found|_global-error)/.test(p.route));

const issues = [];
const add = (route, msg) => issues.push(`${route}: ${msg}`);

for (const { file, route } of pages) {
  const html = fs.readFileSync(file, "utf8");
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  const expected = SITE + (route === "/" ? "" : route);

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) add(route, `${h1s} H1 tags`);

  if (!noindex) {
    const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    if (!canon || ![expected, expected + "/"].includes(canon)) add(route, `canonical ${canon || "missing"}`);

    const ogUrl = (html.match(/<meta property="og:url" content="([^"]*)"/) || [])[1];
    if (ogUrl && ![expected, expected + "/"].includes(ogUrl)) add(route, `og:url ${ogUrl}`);
    if (!ogUrl) add(route, "og:url missing");

    const title = decode((html.match(/<title>(.*?)<\/title>/) || [])[1] || "");
    const ogTitle = decode((html.match(/<meta property="og:title" content="([^"]*)"/) || [])[1] || "");
    if (!ogTitle) add(route, "og:title missing");
    else if (ogTitle.replace(/\s+/g, " ") !== title.replace(/\s+/g, " ")) add(route, `og:title differs from <title> ("${ogTitle}")`);

    const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
    const ogDesc = decode((html.match(/<meta property="og:description" content="([^"]*)"/) || [])[1] || "");
    if (!desc) add(route, "meta description missing");
    if (desc && ogDesc && desc !== ogDesc) add(route, "og:description differs from meta description");
    if (/&amp;|&#/.test((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "")) {
      // entities inside the attribute are normal HTML; only flag double-encoding
      if (/&amp;amp;/.test(html)) add(route, "double-encoded &amp; in meta");
    }
  }

  // Next.js emits <meta name="next-size-adjust" content=""> itself; it is harmless
  // (Google ignores it) and cannot be removed without patching the framework.
  const emptyMeta = (html.match(/<meta name="([^"]*)" content=""/g) || []).filter(
    (m) => !m.includes('name="next-size-adjust"'),
  );
  if (emptyMeta.length) add(route, `empty meta tag: ${emptyMeta[0]}`);
  const viewport = (html.match(/<meta name="viewport" content="([^"]*)"/) || [])[1] || "";
  if (/user-scalable=no|maximum-scale=1(\.0)?(,|$)/.test(viewport)) add(route, `zoom disabled (${viewport})`);

  const bad = (html.match(/<a [^>]*href="(#|javascript:[^"]*|)"/g) || []).length;
  if (bad) add(route, `${bad} non-crawlable link(s)`);

  const imgs = html.match(/<img [^>]*>/g) || [];
  const noAlt = imgs.filter((i) => !/\balt="/.test(i)).length;
  if (noAlt) add(route, `${noAlt} image(s) with no alt attribute`);

  if (!noindex) {
    const types = new Set();
    for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
      try {
        const walkNode = (n) => {
          if (!n || typeof n !== "object") return;
          if (Array.isArray(n)) return n.forEach(walkNode);
          const t = n["@type"];
          (Array.isArray(t) ? t : t ? [t] : []).forEach((x) => types.add(x));
          Object.values(n).forEach(walkNode);
        };
        walkNode(JSON.parse(m[1]));
      } catch {
        add(route, "invalid JSON-LD");
      }
    }
    if (!types.has("Organization")) add(route, "no Organization schema");
  }
}

console.log(`pages audited: ${pages.length}`);
if (issues.length) {
  console.log(`\n${issues.length} issue(s):`);
  issues.forEach((i) => console.log("  " + i));
  process.exit(1);
}
console.log("OK: no technical SEO issues found.");
