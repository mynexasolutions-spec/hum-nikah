// Fails if a public page was built but is missing from the sitemap, or if the
// sitemap lists a page that does not exist. Run after `npm run build`:
//   npm run check:sitemap
//
// Pages that are deliberately NOT in the sitemap go in EXCLUDED below, with the
// reason, so omissions are always intentional.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, ".next", "server", "app");

const EXCLUDED = {
  "/thank-you": "noindex confirmation page",
  "/privacy": "noindex legal page",
  "/terms": "noindex legal page",
};

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

if (!fs.existsSync(APP)) {
  console.error("No build output found. Run `npm run build` first.");
  process.exit(1);
}

const pages = new Set(
  walk(APP)
    .map((f) => path.relative(APP, f).replace(/\\/g, "/").replace(/\.html$/, ""))
    .map((r) => (r === "index" ? "/" : "/" + r))
    .filter((r) => !/^\/(admin|api|_not-found|_global-error)/.test(r)),
);

const body = fs.readFileSync(path.join(APP, "sitemap.xml.body"), "utf8");
const inSitemap = new Set(
  [...body.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map((m) => m[1] || "/"),
);

const missing = [...pages].filter((p) => !inSitemap.has(p) && !(p in EXCLUDED)).sort();
const phantom = [...inSitemap].filter((p) => !pages.has(p)).sort();

console.log(`built pages: ${pages.size}   in sitemap: ${inSitemap.size}   excluded on purpose: ${Object.keys(EXCLUDED).length}`);

if (missing.length) {
  console.error("\nMissing from sitemap:\n  " + missing.join("\n  "));
}
if (phantom.length) {
  console.error("\nIn sitemap but not built:\n  " + phantom.join("\n  "));
}
if (missing.length || phantom.length) process.exit(1);

console.log("OK: every public page is in the sitemap.");
