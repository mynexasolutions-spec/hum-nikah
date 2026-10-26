// Transpiles src/data/blogsData.ts in memory and dumps BLOG_POSTS to .seed-blogs.json
// so seed-blogs-to-db.py can push them to Supabase. Run from the project root.
const path = require("path");
const fs = require("fs");
const ts = require("typescript");

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "src", "data");
const libDir = path.join(root, "src", "lib");
const cache = {};

function load(name) {
  if (cache[name]) return cache[name].exports;
  const file = [dataDir, libDir]
    .map((d) => path.join(d, name + ".ts"))
    .find((f) => fs.existsSync(f));
  const src = fs.readFileSync(file, "utf8");
  const out = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const mod = { exports: {} };
  cache[name] = mod;
  new Function("exports", "require", "module", out)(
    mod.exports,
    (p) => load(p.replace(/^(\.\.\/lib\/|\.\/)/, "")),
    mod,
  );
  return mod.exports;
}

const { BLOG_POSTS } = load("blogsData");
fs.writeFileSync(path.join(root, ".seed-blogs.json"), JSON.stringify(BLOG_POSTS, null, 2));
console.log(`wrote ${BLOG_POSTS.length} posts`);
