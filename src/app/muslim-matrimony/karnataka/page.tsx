import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/layout/Breadcrumbs";
import { FACTS } from "@/lib/siteFacts";
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { liveZones, FREE_SENTENCE } from "@/data/bengaluru-zones";
import { NearbyPlaces, KARNATAKA_TOWNS, townId } from "@/components/places/NearbyPlaces";

const TITLE = "Muslim Matrimony & Marriage Bureau in Karnataka | HumNikah";
const DESCRIPTION =
  "Muslim matrimony & marriage bureau in Karnataka: Bengaluru and towns across the state. Free biodata submission, manual screening. Call or WhatsApp.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: "/muslim-matrimony/karnataka",
});


const STEPS = [
  "Submit your biodata (free) or message us on WhatsApp.",
  "We speak with your family about what you are looking for.",
  "Every profile is manually screened and we check identity and address documents.",
  "Introductions are made through families, with the Wali involved where the bride's family wishes.",
];

const COMMUNITIES = [
  { href: "/muslim-matrimony/beary-bhatkali", label: "Beary and Bhatkali matrimony" },
  { href: "/muslim-matrimony/deccani", label: "Deccani Muslim matrimony" },
  { href: "/muslim-matrimony/konkani", label: "Konkani Muslim matrimony" },
  { href: "/muslim-matrimony/divorcee-widow-remarriage", label: "Muslim divorcee and widow remarriage" },
];

const WHO_WE_HELP = [
  { href: "/muslim-matrimony/divorcee-widow-remarriage", label: "Remarriage" },
  { href: "/muslim-matrimony/professionals", label: "Working professionals" },
  { href: "/muslim-matrimony/nri-gulf", label: "NRI and Gulf families" },
];

const FAQS = [
  {
    q: "Which is the best Muslim marriage bureau in Karnataka?",
    a: "Families across Karnataka choose HumNikah for verified profiles, complete privacy, and respectful family introductions. Every profile is manually screened and identity documents are checked before any introduction is made. Submitting your biodata to HumNikah is free.",
  },
  {
    q: "Do you have offices in other Karnataka towns?",
    a: "No. We serve families in other towns by phone and WhatsApp. Our office is in Cox Town, Bengaluru.",
  },
  {
    q: "Is it free to submit my biodata?",
    a: "Yes. Submitting your biodata to HumNikah is free.",
  },
  {
    q: "How do you screen profiles?",
    a: "Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks.",
  },
];

export default function KarnatakaPage() {
  const pageUrl = `${SITE_URL}/muslim-matrimony/karnataka`;

  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Muslim Matrimony", href: "/muslim-matrimony-india" },
    { name: "Karnataka", href: "/muslim-matrimony/karnataka" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(crumbs),
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
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

      <section className="bg-[#1D184C] text-white py-12 sm:py-16 border-b border-brand-gold/20">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-playfair font-bold text-white leading-[1.15] text-[28px] sm:text-4xl lg:text-5xl">
              Muslim Matrimony in Karnataka
            </h1>
            <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              HumNikah helps Muslim families across Karnataka find a suitable rishta. Our
              office is in Cox Town, Bengaluru, and we serve families in other towns by
              phone and WhatsApp. {FREE_SENTENCE}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-4">
            Best Muslim Marriage Bureau in Karnataka
          </h2>
          <p className="text-[15px] text-black leading-relaxed mb-6">
            If you are looking for the best Muslim marriage bureau in Karnataka, families choose HumNikah for our privacy-first matchmaking, manual document verification, and respectful family introductions. Whether you are in Bengaluru, Mangaluru, Mysuru, Hubli-Dharwad, Belgaum, Gulbarga, or Bhatkal, our team works directly with families and involves the bride&apos;s Wali where her family wishes. Submitting your biodata to HumNikah is free.
          </p>

          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-4">
            Muslim matrimony in Bengaluru
          </h2>
          <p className="text-[15px] text-black leading-relaxed">
            Bengaluru is where our office is, so it is where most families meet us in person.
            Read about our{" "}
            <Link href="/muslim-matrimony/bengaluru" className="text-brand-gold font-semibold hover:underline">
              Muslim marriage bureau in Bangalore
            </Link>
            , or choose your part of the city:
          </p>
          <ul className="mt-3 space-y-2">
            {liveZones.map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/muslim-matrimony/bengaluru/${z.slug}`}
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Muslim matrimony in {z.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-5">
            Towns across Karnataka
          </h2>
          <p className="text-[15px] text-black leading-relaxed mb-5">
            You do not need to live in Bengaluru to start. The whole process can happen by
            phone and WhatsApp, and you can visit our office by appointment if you wish.
          </p>
          <div className="space-y-4">
            {KARNATAKA_TOWNS.map((town) => (
              <div key={town} id={townId(town)} className="scroll-mt-24">
                <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-1">
                  Muslim matrimony in {town}
                </h3>
                <p className="text-[15px] text-black leading-relaxed">
                  Families from {town} can submit a biodata online and speak to our team by
                  phone or WhatsApp.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-4">
            Communities we serve
          </h2>
          <ul className="space-y-2">
            {COMMUNITIES.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-brand-gold font-semibold hover:underline">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NearbyPlaces />

      <section className="py-12 sm:py-14 bg-brand-cream border-b border-brand-border/50">
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

      <section className="py-12 sm:py-14 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-5">
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

      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal text-center mb-8">
            Karnataka: FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
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

      <section className="py-12 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/submit-biodata"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D184C] text-white font-bold rounded-xl hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
            >
              Submit your biodata (free) <ArrowRight size={16} />
            </Link>
            <a
              href="/whatsapp?src=karnataka"
              rel="nofollow noopener"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-brand-border bg-white font-semibold rounded-xl hover:border-brand-gold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-secondary">
            Learn{" "}
            <Link href="/how-we-verify" className="text-brand-gold font-semibold hover:underline">
              how we verify profiles
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
