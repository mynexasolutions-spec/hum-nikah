import { cache } from "react";
import { supabase } from "./supabase";

/**
 * Single source of truth for blog content: the Supabase `blogs` table.
 *
 * There is deliberately NO bundled/hard-coded fallback. What is in the database
 * is exactly what the site publishes, so deleting or editing a post in the admin
 * dashboard always takes effect, and a post can never appear twice. If the
 * database is unreachable these functions return empty results and log the
 * error; they do not substitute other content.
 *
 * Posts are authored in /admin/blogs or loaded with scripts/seed-blogs-to-db.py.
 */

export type BlogAuthor = { name?: string; role?: string; avatar?: string };

export type BlogRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: BlogAuthor | null;
  image: string;
  featured?: boolean | null;
  tags?: string[] | null;
  created_at?: string | null;
  updated_at?: string | null;
  // Optional SEO columns; absent on posts written in the dashboard.
  seoTitle?: string | null;
  seoDescription?: string | null;
  imageAlt?: string | null;
  primaryKeyword?: string | null;
  faqs?: { q: string; a: string }[] | null;
};

const SELECT = "*";

/** All published posts, newest first. */
export const getBlogs = cache(async (): Promise<BlogRecord[]> => {
  const { data, error } = await supabase
    .from("blogs")
    .select(SELECT)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getBlogs failed:", error.message);
    return [];
  }
  return (data ?? []) as BlogRecord[];
});

export const getBlogBySlug = cache(async (slug: string): Promise<BlogRecord | null> => {
  const { data, error } = await supabase
    .from("blogs")
    .select(SELECT)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`getBlogBySlug(${slug}) failed:`, error.message);
    return null;
  }
  return (data as BlogRecord) ?? null;
});

/** Up to `limit` other posts, for the "Related articles" block. */
export const getRelatedBlogs = cache(
  async (slug: string, limit = 3): Promise<BlogRecord[]> => {
    const { data, error } = await supabase
      .from("blogs")
      .select(SELECT)
      .neq("slug", slug)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("getRelatedBlogs failed:", error.message);
      return [];
    }
    return (data ?? []) as BlogRecord[];
  },
);

/** Slugs + timestamps for the sitemap and generateStaticParams. */
export const getBlogIndex = cache(
  async (): Promise<{ slug: string; lastModified?: Date }[]> => {
    const { data, error } = await supabase
      .from("blogs")
      .select("slug, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error || !data) {
      if (error) console.error("getBlogIndex failed:", error.message);
      return [];
    }

    return data
      .filter((row: { slug?: string | null }) => Boolean(row.slug))
      .map((row: { slug: string; created_at?: string; updated_at?: string }) => {
        const stamp = row.updated_at || row.created_at;
        const date = stamp ? new Date(stamp) : undefined;
        return {
          slug: row.slug,
          lastModified: date && !Number.isNaN(date.getTime()) ? date : undefined,
        };
      });
  },
);

/** Specific posts by slug, in the order requested (for curated guide lists). */
export async function getBlogsBySlugs(slugs: string[]): Promise<BlogRecord[]> {
  if (slugs.length === 0) return [];
  const all = await getBlogs();
  return slugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is BlogRecord => Boolean(p));
}
