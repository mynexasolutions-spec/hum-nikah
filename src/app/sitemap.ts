import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getBlogIndex } from "@/lib/blogs";
import { COMMUNITY_PAGES } from "@/data/communities";
import { liveZones } from "@/data/bengaluru-zones";
import { OFFICE_LOCATIONS } from "@/data/locationsData";

// Blog posts come from the database; admin edits call revalidatePath("/sitemap.xml").
export const revalidate = 3600;

/**
 * `lastModified` for hand-built pages.
 *
 * Google only trusts lastmod when it is accurate, so these are real dates set
 * when a page's content actually changes — never the build time, which would
 * tell Google every page changed on every deploy. Update the date for a page
 * when you meaningfully edit its content. Blog posts derive theirs from the
 * database `updated_at` column instead.
 */
const CONTENT_UPDATED = {
  // The October 2026 SEO overhaul touched all of these.
  overhaul: new Date("2026-10-13"),
} as const;

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
};

const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: CONTENT_UPDATED.overhaul },
  { path: "/muslim-matrimony-india", priority: 0.9, changeFrequency: "monthly", lastModified: CONTENT_UPDATED.overhaul },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/submit-biodata", priority: 0.8, changeFrequency: "monthly", lastModified: CONTENT_UPDATED.overhaul },
  { path: "/biodata-maker", priority: 0.9, changeFrequency: "weekly", lastModified: new Date("2026-10-22") },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly", lastModified: CONTENT_UPDATED.overhaul },
  // Photos are managed in the admin dashboard, so no fixed lastmod.
  { path: "/gallery", priority: 0.5, changeFrequency: "weekly" },
  { path: "/fees", priority: 0.5, changeFrequency: "monthly", lastModified: CONTENT_UPDATED.overhaul },
  { path: "/how-we-verify", priority: 0.6, changeFrequency: "monthly", lastModified: new Date("2026-10-26") },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly", lastModified: CONTENT_UPDATED.overhaul },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // City pages were rewritten in the overhaul (new titles, areas, FAQs, schema).
  const cityEntries: MetadataRoute.Sitemap = OFFICE_LOCATIONS.map((office) => ({
    url: `${SITE_URL}/muslim-matrimony/${office.city.toLowerCase()}`,
    lastModified: CONTENT_UPDATED.overhaul,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Community and situation landing pages, all created in the overhaul.
  const communityEntries: MetadataRoute.Sitemap = COMMUNITY_PAGES.map((page) => ({
    url: `${SITE_URL}/muslim-matrimony/${page.slug}`,
    lastModified: CONTENT_UPDATED.overhaul,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Phase 2 zones are excluded until released (see data/bengaluru-zones.ts).
  const zoneEntries: MetadataRoute.Sitemap = liveZones.map((zone) => ({
    url: `${SITE_URL}/muslim-matrimony/bengaluru/${zone.slug}`,
    lastModified: CONTENT_UPDATED.overhaul,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const karnatakaEntry: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/muslim-matrimony/karnataka`,
      lastModified: CONTENT_UPDATED.overhaul,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = (await getBlogIndex()).map(
    ({ slug, lastModified }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [
    ...staticEntries,
    ...cityEntries,
    ...zoneEntries,
    ...karnatakaEntry,
    ...communityEntries,
    ...blogEntries,
  ];
}
