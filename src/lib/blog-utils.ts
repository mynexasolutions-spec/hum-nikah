/**
 * Small blog helpers with no data in them, so importing this never pulls any
 * article text into a page bundle. (Articles live in the Supabase `blogs` table.)
 */

export const BLOG_CATEGORIES = [
  "All",
  "Nikah Sunnah",
  "Choosing Partner",
  "Mahr & Rights",
  "Family & Rights",
  "Pre-Marriage",
  "Post-Nikah",
] as const;

const WORDS_PER_MINUTE = 200;

/** Reading time from the real word count of the HTML body. */
export function estimateReadTime(html: string): string {
  const words = html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}
