import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/layout/Breadcrumbs";
import { FACTS } from "@/lib/siteFacts";
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { liveZones, getLiveZone } from "@/data/bengaluru-zones";

interface PageProps {
  params: Promise<{ zone: string }>;
}

// Phase 2 zones are not published: anything outside `liveZones` is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return liveZones.map((z) => ({ zone: z.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { zone: slug } = await params;
  const zone = getLiveZone(slug);
  if (!zone) return { title: "Page Not Found" };

  return buildMetadata({
    title: zone.title,
    absoluteTitle: zone.title,
    description: zone.metaDescription,
    path: `/muslim-matrimony/bengaluru/${zone.slug}`,
  });
}

const STEPS = [
  "Submit your biodata (free) or message us on WhatsApp.",
  "We speak with your family about what you are looking for.",
  "Every profile is manually screened and we check identity and address documents.",
  "Introductions are made through families, with the Wali involved where the bride's family wishes.",
];

const WHO_WE_HELP = [
  { href: "/muslim-matrimony/divorcee-widow-remarriage", label: "Remarriage" },
  { href: "/muslim-matrimony/professionals", label: "Working professionals" },
  { href: "/muslim-matrimony/nri-gulf", label: "NRI and Gulf families" },
];

export default async function ZonePage({ params }: PageProps) {
  const { zone: slug } = await params;
  const zone = getLiveZone(slug);
  if (!zone) notFound();

  const pageUrl = `${SITE_URL}/muslim-matrimony/bengaluru/${zone.slug}`;
  const neighbours = zone.neighbours
    .map((n) => getLiveZone(n))
    .filter((z): z is NonNullable<typeof z> => Boolean(z));

  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Muslim Matrimony", href: "/muslim-matrimony-india" },
    { name: "Karnataka", href: "/muslim-matrimony/karnataka" },
    { name: "Bengaluru", href: "/muslim-matrimony/bengaluru" },
    { name: zone.name, href: `/muslim-matrimony/bengaluru/${zone.slug}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: zone.h1,
        // Reference the existing Cox Town business; never a new entity per zone.
        about: { "@id": `${SITE_URL}/#bengaluru-office` },
      },
      breadcrumbSchema(crumbs),
      {
        "@type": "FAQPage",
        mainEntity: zone.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#1D184C] text-white py-12 sm:py-16 border-b border-brand-gold/20">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-playfair font-bold text-white leading-[1.15] text-[26px] sm:text-4xl lg:text-5xl">
              {zone.h1}
            </h1>
            <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {zone.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-6">
            Areas we serve in {zone.name}
          </h2>
          <div className="space-y-6">
            {zone.areas.map((area) => (
              <div key={area.name}>
                <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2">
                  Muslim Matrimony in {area.name}
                </h3>
                <p className="text-[15px] text-black leading-relaxed">{area.blurb}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[15px] text-black leading-relaxed">{zone.moreAreas}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-6">
            How it works
          </h2>
          <ol className="space-y-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-[15px] text-black leading-relaxed">
                <span className="w-7 h-7 shrink-0 rounded-full bg-brand-emerald text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-12 sm:py-14 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-5">
            Who we help
          </h2>
          <ul className="space-y-2">
            {WHO_WE_HELP.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-brand-gold font-semibold hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Office */}
      <section className="py-12 sm:py-14 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-4">
            Visit our Cox Town office
          </h2>
          <ul className="space-y-3 text-[15px] text-black">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
              <span>{FACTS.address.full}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <a href={FACTS.call.tel} className="hover:text-brand-gold font-medium">
                {FACTS.call.display}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-[15px] text-black leading-relaxed">
            Please call or message before you visit, so we can set aside time for your family.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal text-center mb-8">
            {zone.name}: FAQs
          </h2>
          <div className="space-y-3">
            {zone.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-brand-cream/60 border border-brand-border/60 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-semibold text-brand-charcoal text-[15px]">
                  <span>{faq.q}</span>
                  <span className="text-brand-gold text-lg leading-none shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 border-t border-brand-border/40">
                  <p className="mt-3 text-[15px] text-black leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-10 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal mb-3">
            Related pages
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>
              <Link href="/muslim-matrimony/bengaluru" className="text-brand-gold font-semibold hover:underline">
                Muslim marriage bureau in Bangalore
              </Link>
            </li>
            {neighbours.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/muslim-matrimony/bengaluru/${n.slug}`}
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Muslim matrimony in {n.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/how-we-verify" className="text-brand-gold font-semibold hover:underline">
                How we verify profiles
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-verify-a-muslim-rishta" className="text-brand-gold font-semibold hover:underline">
                How to verify a Muslim rishta safely
              </Link>
            </li>
            <li>
              <Link
                href="/blog/muslim-biodata-format-for-marriage"
                className="text-brand-gold font-semibold hover:underline"
              >
                Free Muslim biodata format for marriage
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/submit-biodata"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D184C] text-white font-bold rounded-xl hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
            >
              Submit your biodata (free) <ArrowRight size={16} />
            </Link>
            <a
              href={`/whatsapp?src=zone-${zone.slug}`}
              rel="nofollow noopener"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-brand-border bg-white font-semibold rounded-xl hover:border-brand-gold transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href={FACTS.call.tel}
              className="inline-flex items-center justify-center px-6 py-3.5 border border-brand-border bg-white font-semibold rounded-xl hover:border-brand-gold transition-colors"
            >
              Call {FACTS.call.display}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
