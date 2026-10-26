"""
Converts content/blog/humnikah-blog-*.md into src/data/blogPostsSeo.ts.

Run from the project root:  python scripts/build-blog-posts.py
Requires: pip install markdown
"""
import json
import re
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "content" / "blog"
OUT = ROOT / "src" / "data" / "blogPostsSeo.ts"

# (file, post id, category)
POSTS = [
    ("humnikah-blog-bangalore.md", "seo-1", "Choosing Partner"),
    ("humnikah-blog-hyderabad.md", "seo-2", "Choosing Partner"),
    ("humnikah-blog-konkani.md", "seo-3", "Choosing Partner"),
    ("humnikah-blog-verify-rishta.md", "seo-4", "Pre-Marriage"),
    ("humnikah-blog-biodata-format.md", "seo-5", "Pre-Marriage"),
    ("humnikah-blog-fees-bangalore.md", "seo-6", "Choosing Partner"),
    ("humnikah-blog-questions-before-marriage.md", "seo-7", "Pre-Marriage"),
    ("humnikah-blog-find-bride-groom-bangalore.md", "seo-8", "Choosing Partner"),
    ("humnikah-blog-it-professionals.md", "seo-9", "Choosing Partner"),
    ("humnikah-blog-first-meeting.md", "seo-10", "Pre-Marriage"),
    ("humnikah-blog-find-muslim-rishta.md", "seo-11", "Choosing Partner"),
    ("humnikah-blog-make-biodata.md", "seo-12", "Pre-Marriage"),
]
# Hero images uploaded to Cloudinary (scripts/upload-blog-images.cjs).
CLOUDINARY = json.loads((SRC / "cloudinary-images.json").read_text(encoding="utf-8")) if (SRC / "cloudinary-images.json").exists() else {}
PUBLISHED = "October 13, 2026"


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def parse_frontmatter(raw: str):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    meta_block, body = m.group(1), m.group(2)
    meta, key = {}, None
    for line in meta_block.splitlines():
        if re.match(r"^\s+- ", line) and key:
            meta[key].append(line.split("- ", 1)[1].strip().strip('"'))
        else:
            k, _, v = line.partition(":")
            key = k.strip()
            v = v.strip()
            meta[key] = [] if v == "" else v.strip('"')
    return meta, body


def strip_comments(text: str) -> str:
    return re.sub(r"<!--.*?-->\n?", "", text, flags=re.S)


def build(file: str, post_id: str, category: str) -> dict:
    meta, body = parse_frontmatter((SRC / file).read_text(encoding="utf-8"))
    body = strip_comments(body)

    # Drop the H1 (the page renders it from `h1`).
    body = re.sub(r"^# .*\n", "", body, count=1, flags=re.M)

    # Split out FAQs.
    body, _, faq_block = body.partition("\n## FAQs\n")
    faqs = []
    for q, a in re.findall(r"### (.+?)\n+(.+?)(?=\n+### |\Z)", faq_block.strip() + "\n", flags=re.S):
        faqs.append({"q": q.strip(), "a": a.strip()})

    # "In this guide" list -> TOC items.
    toc_match = re.search(r"## In this guide\n\n((?:- .*\n)+)", body)
    toc_items = [l[2:].strip() for l in toc_match.group(1).splitlines()] if toc_match else []
    if toc_match:
        body = body.replace(toc_match.group(0), "@@TOC@@\n\n")

    md = markdown.Markdown(extensions=["tables", "fenced_code"])
    html = md.convert(body)

    # Heading ids.
    heading_ids = {}

    def add_id(m):
        tag, text = m.group(1), m.group(2)
        plain = re.sub(r"<[^>]+>", "", text)
        hid = slugify(plain)
        heading_ids[plain.strip().lower()] = hid
        return f'<{tag} id="{hid}">{text}</{tag}>'

    html = re.sub(r"<(h[23])>(.*?)</\1>", add_id, html)

    # FAQs visible in the page (same text that feeds the schema).
    faq_html = '<h2 id="faqs">FAQs</h2>\n' + "\n".join(
        f"<h3>{f['q']}</h3>\n<p>{f['a']}</p>" for f in faqs
    )
    heading_ids["faqs"] = "faqs"

    # TOC.
    def toc_link(item: str) -> str:
        hid = heading_ids.get(item.lower().rstrip("?"), heading_ids.get(item.lower()))
        if not hid:
            for k, v in heading_ids.items():
                if k.startswith(item.lower()[:25]):
                    hid = v
                    break
        return f'<li><a href="#{hid}">{item}</a></li>' if hid else f"<li>{item}</li>"

    toc_html = (
        '<nav class="blog-toc" aria-label="In this guide"><p><strong>In this guide</strong></p><ul>'
        + "".join(toc_link(i) for i in toc_items)
        + "</ul></nav>"
    )
    html = html.replace("<p>@@TOC@@</p>", toc_html)
    html = html + "\n" + faq_html

    # WhatsApp redirect links: do not pass link equity, open safely.
    html = re.sub(r'<a href="(/whatsapp[^"]*)"', r'<a href="\1" rel="nofollow noopener"', html)

    # Biodata template downloads: track clicks, mark as downloads.
    def dl(m):
        href = m.group(1)
        name = href.rsplit("/", 1)[-1]
        gender = "boy" if "-boy." in name else "girl"
        fmt = name.rsplit(".", 1)[-1]
        return f'<a href="{href}" download data-gender="{gender}" data-format="{fmt}"'

    html = re.sub(r'<a href="(/downloads/[^"]+)"', dl, html)

    return {
        "id": post_id,
        "slug": meta["slug"],
        "title": meta["h1"],
        "seoTitle": meta["title"],
        "seoDescription": meta["description"],
        "excerpt": meta["description"],
        "category": category,
        "publishedAt": PUBLISHED,
        "featured": False,
        "image": CLOUDINARY.get(meta["slug"], meta["heroImage"]),
        "imageAlt": meta["heroAlt"],
        "tags": meta.get("secondaryKeywords", []),
        "primaryKeyword": meta["primaryKeyword"],
        "faqs": faqs,
        "content": html,
    }


posts = [build(*p) for p in POSTS]

out = (
    "// GENERATED by scripts/build-blog-posts.py from content/blog/*.md. Do not edit by hand.\n"
    'import type { BlogPost } from "./blogsData";\n\n'
    "const EDITORIAL_TEAM = {\n"
    '  name: "HumNikah Editorial Team",\n'
    '  role: "Nikah & family guidance",\n'
    '  avatar: "",\n'
    "};\n\n"
    "export const SEO_BLOG_POSTS: Omit<BlogPost, \"readTime\">[] = [\n"
)
for p in posts:
    entries = json.dumps(p, indent=2, ensure_ascii=False)
    entries = entries[:-1].rstrip() + ',\n  "author": EDITORIAL_TEAM\n}'
    entries = re.sub(r'"author": EDITORIAL_TEAM', "author: EDITORIAL_TEAM", entries)
    out += "  " + entries.replace("\n", "\n  ") + ",\n"
out += "];\n"
OUT.write_text(out, encoding="utf-8")
print("wrote", OUT, [p["slug"] for p in posts], [len(p["faqs"]) for p in posts])
