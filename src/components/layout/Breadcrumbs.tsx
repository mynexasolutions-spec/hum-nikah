import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export type Crumb = { name: string; href: string };

/**
 * Visible breadcrumb trail and its BreadcrumbList schema, built from ONE list so
 * the markup and the structured data can never disagree.
 */
export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };
}

/** Breadcrumbs for the dark hero banner used on landing pages. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-300 mb-4 flex-wrap"
    >
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={c.href}>
            {i > 0 && <ChevronRight size={12} className="text-slate-500" />}
            {last ? (
              <span className="text-brand-gold" aria-current="page">
                {c.name}
              </span>
            ) : (
              <Link href={c.href} className="hover:text-brand-gold transition-colors">
                {c.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
