import React from "react";
import Link from "next/link";
import { CITY_CONTENT } from "@/data/cityContent";
import { CITY_LOCAL } from "@/data/cityLocal";

/** URL-safe id for a town, shared by the Karnataka page's sections and these links. */
export const townId = (town: string) =>
  town
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * Karnataka towns, read from the Bengaluru page's own data so this block can
 * only ever list towns that page already lists.
 */
export const KARNATAKA_TOWNS: string[] =
  CITY_LOCAL.bengaluru.areas.find((g) => g.heading.toLowerCase().includes("karnataka"))?.places ?? [];

/**
 * "Nearby cities and towns": the other city pages plus the Karnataka towns,
 * each a real crawlable link. Helps visitors and gives crawlers a clear route
 * between the hub, Bengaluru and the other cities.
 */
export function NearbyPlaces({ currentCitySlug }: { currentCitySlug?: string }) {
  const cities = CITY_CONTENT.filter((c) => c.slug !== currentCitySlug);

  return (
    <section className="py-10 bg-white border-b border-brand-border/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal mb-5">
          Nearby cities and towns
        </h2>

        <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-2">
          Karnataka towns
        </h3>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          {KARNATAKA_TOWNS.map((town) => (
            <li key={town}>
              <Link
                href={`/muslim-matrimony/karnataka#${townId(town)}`}
                className="text-[15px] text-brand-gold font-semibold hover:underline"
              >
                Muslim matrimony in {town}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-2">
          Other cities
        </h3>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/muslim-matrimony/${c.slug}`}
                className="text-[15px] text-brand-gold font-semibold hover:underline"
              >
                Muslim matrimony in {c.city}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
