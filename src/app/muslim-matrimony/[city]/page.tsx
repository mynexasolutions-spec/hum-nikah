import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/layout/Breadcrumbs";
import { FACTS } from "@/lib/siteFacts";
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  Headphones,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { SITE_URL, SITE_NAME } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { OFFICE_LOCATIONS } from "@/data/locationsData";
import { CITY_CONTENT, getCityContent } from "@/data/cityContent";
import { CITY_META } from "@/data/seo-meta";
import { getGuidesForCity } from "@/data/guides";
import { CITY_COMMUNITY_LINKS, getCommunityPage } from "@/data/communities";
import { liveZones, FREE_SENTENCE } from "@/data/bengaluru-zones";
import { NearbyPlaces } from "@/components/places/NearbyPlaces";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return OFFICE_LOCATIONS.map((office) => ({ city: office.city.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const content = getCityContent(slug);

  if (!content) {
    return { title: "Muslim Matrimony – City Not Found" };
  }

  const meta = CITY_META[content.slug];

  return buildMetadata({
    title: meta.title,
    absoluteTitle: meta.title,
    description: meta.description,
    path: `/muslim-matrimony/${content.slug}`,
  });
}

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Manually Screened Profiles",
    body: "Every biodata is manually screened using government ID and phone verification, with respectful home visits by our field representatives before activation.",
  },
  {
    icon: Lock,
    title: "Privacy & Modesty First",
    body: "Photos, contact details and documents are never publicly searchable. Your information is shared only with matches you and your family approve.",
  },
  {
    icon: Headphones,
    title: "Dedicated Relationship Managers",
    body: "A senior matchmaker personally shortlists profiles, coordinates introductions, and guides your family through every stage of the search.",
  },
  {
    icon: HeartHandshake,
    title: "Rooted in Shariah",
    body: "We treat Nikah as a sacred covenant, encourage Wali involvement, and keep every introduction respectful and purposeful.",
  },
];

const steps = [
  {
    n: "1",
    title: "Submit Your Biodata",
    body: "Share your details and partner preferences through our secure form. A relationship manager reviews it and reaches out to understand your expectations.",
  },
  {
    n: "2",
    title: "Get Verified",
    body: "We verify identity, education or profession, marital status and residence so every member searches with confidence.",
  },
  {
    n: "3",
    title: "Receive Curated Matches",
    body: "Your matchmaker shares hand-picked, aligned profiles — never an open database — and discusses each one with you and your family.",
  },
  {
    n: "4",
    title: "Connect with Barakah",
    body: "When both sides express interest, we facilitate a respectful introduction between the families, insha'Allah leading to Nikah.",
  },
];

export default async function CityMatrimonyPage({ params }: PageProps) {
  const { city: slug } = await params;
  const content = getCityContent(slug);

  if (!content) {
    notFound();
  }

  const office = OFFICE_LOCATIONS.find(
    (location) => location.city.toLowerCase() === content.slug
  );

  const meta = CITY_META[content.slug];
  const communityLinks = (CITY_COMMUNITY_LINKS[content.slug] ?? [])
    .filter((slug) => slug !== "divorcee-widow-remarriage")
    .map((slug) => getCommunityPage(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const guides = getGuidesForCity(content.slug);
  const hasOffice = office?.hasOffice ?? false;
  const pageUrl = `${SITE_URL}/muslim-matrimony/${content.slug}`;

  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Muslim Matrimony", href: "/muslim-matrimony-india" },
    ...(content.slug === "bengaluru"
      ? [{ name: "Karnataka", href: "/muslim-matrimony/karnataka" }]
      : []),
    {
      name: content.slug === "bengaluru" ? "Bengaluru" : content.city,
      href: `/muslim-matrimony/${content.slug}`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...(hasOffice
          ? {
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id":
                content.slug === "bengaluru"
                  ? `${SITE_URL}/#bengaluru-office`
                  : `${SITE_URL}/#office-${content.slug}`,
              name: content.slug === "bengaluru" ? "HumNikah" : `HumNikah ${content.city}`,
              url: pageUrl,
              parentOrganization: { "@id": `${SITE_URL}/#organization` },
              telephone:
                content.slug === "bengaluru"
                  ? FACTS.call.e164
                  : office?.phone2
                    ? `+${office.phone2.replace(/[^0-9]/g, "")}`
                    : office?.phone
                      ? `+${office.phone.replace(/[^0-9]/g, "")}`
                      : undefined,
              email: office?.email ?? "connect@humnikah.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  content.slug === "bengaluru"
                    ? FACTS.address.street
                    : office?.address,
                addressLocality: content.city,
                addressRegion: content.state,
                postalCode: content.slug === "bengaluru" ? "560005" : undefined,
                addressCountry: "IN",
              },
            }
          : {
              "@type": "Service",
              name: `Muslim matrimony in ${content.city}`,
              url: pageUrl,
              provider: { "@id": `${SITE_URL}/#organization` },
            }),
        areaServed: [
          { "@type": "City", name: content.city },
          ...(content.slug === "bengaluru"
            ? []
            : content.areas.flatMap((group) =>
                group.places.map((place) => ({ "@type": "Place", name: place }))
              )),
        ],
      },
      breadcrumbSchema(crumbs),
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
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
      <section className="relative bg-[#1D184C] text-white py-12 sm:py-16 overflow-hidden border-b border-brand-gold/20">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#651514]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={crumbs} />

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles size={14} className="animate-pulse text-brand-gold" />
              <span>{content.state}</span>
            </div>

            <h1 className="font-playfair font-bold text-white leading-[1.15] text-[28px] sm:text-4xl lg:text-5xl">
              {meta.h1}
            </h1>
            <p className="mt-3 text-[#F3B979] italic text-lg sm:text-2xl lg:text-[26px] leading-snug font-playfair">
              {content.tagline}
            </p>

            <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
              {meta.heroIntro}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/submit-biodata"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-gold text-brand-charcoal font-bold rounded-xl hover:bg-white transition-colors shadow-lg"
              >
                Submit Your Biodata
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                Talk to a Matchmaker
              </Link>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
              <Sparkles size={14} className="text-brand-gold shrink-0" />
              <span>
                Need a biodata format?{" "}
                <Link
                  href="/blog/muslim-biodata-format-for-marriage"
                  className="text-brand-gold hover:text-white underline decoration-brand-gold/50 underline-offset-2 transition-colors font-medium"
                >
                  Download Free Muslim Biodata Format (Word &amp; PDF) &rarr;
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-5">
              {meta.introHeading}
            </h2>
            <div className="space-y-4 text-[15px] sm:text-base text-black leading-relaxed">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-3">
                Communities we serve in {content.city}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {content.communities.map((community) => (
                  <li
                    key={community}
                    className="flex items-start gap-2.5 bg-brand-cream/60 border border-brand-border/60 rounded-xl px-4 py-2.5"
                  >
                    <CheckCircle2 size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-black">{community}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(content.areasServed || content.localNote) && (
              <div className="mt-8 space-y-4 text-[15px] text-black leading-relaxed">
                {content.areasServed && <p>{content.areasServed}</p>}
                {content.localNote && <p>{content.localNote}</p>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              The HumNikah Difference
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Why {content.city} Families Choose HumNikah
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyChoose.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-brand-border/80 shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light-cream text-brand-emerald flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-sm text-black leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Simple &amp; Guided
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              {meta.howItWorksHeading ?? `How Muslim Matchmaking Works in ${content.city}`}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-brand-cream/60 rounded-2xl p-6 border border-brand-border/60"
              >
                <div className="w-10 h-10 rounded-full bg-brand-emerald text-white font-bold flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-black leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas and towns served */}
      {content.slug === "bengaluru" ? (
        <>
          <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-8">
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-3">
                  Muslim Areas of Bangalore We Serve
                </h2>
                <p className="text-[15px] text-black leading-relaxed">
                  We serve Muslim families across Bangalore. Choose your part of the city to see
                  how we work with families nearby. Every area page has the same free biodata
                  submission and the same private, manually screened process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {liveZones.map((zone) => (
                  <Link
                    key={zone.slug}
                    href={`/muslim-matrimony/bengaluru/${zone.slug}`}
                    className="group bg-white rounded-2xl p-6 border border-brand-border/80 shadow-sm hover:border-brand-gold/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-playfair font-bold text-brand-charcoal group-hover:text-brand-gold transition-colors mb-2">
                        Muslim matrimony in {zone.name}
                      </h3>
                      <p className="text-sm text-black leading-relaxed mb-4">
                        {zone.areas.slice(0, 3).map((a) => a.name).join(", ")}
                        {zone.areas.length > 3 ? " and more" : ""}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald group-hover:text-brand-gold transition-colors">
                      See {zone.name} <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>

              {content.areas[0] && (
                <div className="mt-8 pt-6 border-t border-brand-border/60">
                  <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2">
                    {content.areas[0].heading}
                  </h3>
                  <p className="text-[15px] text-black leading-relaxed">{content.areas[0].body}</p>
                </div>
              )}
            </div>
          </section>

          <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-4">
                <Link href="/muslim-matrimony/karnataka" className="hover:text-brand-gold transition-colors">
                  Karnataka Towns We Serve
                </Link>
              </h2>
              <p className="text-[15px] text-black leading-relaxed">
                {content.areas.find((g) => g.heading.toLowerCase().includes("karnataka"))?.body ??
                  "Beyond the city, we support families in Mangaluru, Mysuru, Hubli-Dharwad, Bhatkal, Gulbarga and Bijapur, so a family outside Bangalore can use the same verified, Wali-involved process without relocating."}{" "}
                <Link href="/muslim-matrimony/karnataka" className="text-brand-gold font-semibold hover:underline">
                  Muslim matrimony in Karnataka
                </Link>
                .
              </p>
            </div>
          </section>

          <NearbyPlaces currentCitySlug="bengaluru" />
        </>
      ) : (
        <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-6">
              Areas and Towns We Serve near {content.city}
            </h2>
            <div className="space-y-6">
              {content.areas.map((group) => (
                <div key={group.heading}>
                  <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2">
                    {group.heading}
                  </h3>
                  <p className="text-[15px] text-black leading-relaxed">{group.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Intent block */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-6">
            Remarriage, Professionals and Overseas Families in {content.city}
          </h2>
          <div className="space-y-5 text-[15px] text-black leading-relaxed">
            <div>
              <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-1">
                Second marriage in {content.city}
              </h3>
              <p>
                Divorced and widowed members are welcome to register. Marital
                status is verified like every other detail, and introductions
                follow the same private, Wali-involved process. Read more about{" "}
                <Link
                  href="/muslim-matrimony/divorcee-widow-remarriage"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Muslim divorcee and widow remarriage
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-1">
                Working professionals
              </h3>
              <p>
                Doctors, engineers, IT professionals, CAs, teachers and business
                owners can leave the shortlisting to a relationship manager and
                spend their time on genuine conversations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-1">
                NRI and Gulf-based families
              </h3>
              <p>
                We coordinate introductions for Gulf-based and overseas families
                with {content.city} families, around time zones and travel plans.
              </p>
            </div>
            {communityLinks.length > 0 && (
              <p>
                Community pages:{" "}
                {communityLinks.map((p, i) => (
                  <span key={p.slug}>
                    {i > 0 && ", "}
                    <Link
                      href={`/muslim-matrimony/${p.slug}`}
                      className="text-brand-gold font-semibold hover:underline"
                    >
                      {p.navLabel}
                    </Link>
                  </span>
                ))}
                .
              </p>
            )}
            <p className="text-sm text-brand-secondary">
              School-of-thought preferences such as Sunni Hanafi, Shafi&apos;i and
              Ahle Hadees are recorded in your biodata and respected when we
              shortlist.
            </p>
          </div>
        </div>
      </section>

      {/* Office + map */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border/80 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal mb-4">
                {content.slug === "bengaluru"
                  ? "HumNikah Bengaluru Office — Cox Town"
                  : hasOffice
                  ? `HumNikah ${content.city} Office`
                  : `Serving ${content.city} Families`}
              </h2>
              {!hasOffice && (
                <p className="text-sm text-black leading-relaxed mb-4">
                  HumNikah does not have an office in {content.city}. We serve{" "}
                  {content.city} families by phone and WhatsApp. In-person meetings are
                  at our{" "}
                  <Link
                    href="/muslim-matrimony/bengaluru"
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    office in Cox Town, Bengaluru
                  </Link>{" "}
                  ({FACTS.address.full}). {FACTS.sentences.visitFirst}
                </p>
              )}
              <ul className="space-y-3.5 text-sm text-black">
                {content.slug === "bengaluru" ? (
                  <>
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                      <span>{FACTS.address.full}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={18} className="text-brand-gold shrink-0" />
                      <a
                        href={FACTS.call.tel}
                        className="hover:text-brand-gold transition-colors font-medium"
                      >
                        {FACTS.call.display}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Sparkles size={18} className="text-brand-gold shrink-0" />
                      <a
                        href="/whatsapp?src=bengaluru-office"
                        rel="nofollow noopener"
                        className="hover:text-brand-gold transition-colors font-medium"
                      >
                        WhatsApp: +91 90190 82205
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={18} className="text-brand-gold shrink-0" />
                      <a
                        href="mailto:connect@humnikah.com"
                        className="hover:text-brand-gold transition-colors"
                      >
                        connect@humnikah.com
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    {hasOffice && (
                      <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                        <span>{office?.address}</span>
                      </li>
                    )}
                    {office?.phone && (
                      <li className="flex items-center gap-3">
                        <Phone size={18} className="text-brand-gold shrink-0" />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="hover:text-brand-gold transition-colors"
                        >
                          {office.phone}
                        </a>
                      </li>
                    )}
                    <li className="flex items-center gap-3">
                      <Mail size={18} className="text-brand-gold shrink-0" />
                      <a
                        href={`mailto:${office?.email ?? "connect@humnikah.com"}`}
                        className="hover:text-brand-gold transition-colors"
                      >
                        {office?.email ?? "connect@humnikah.com"}
                      </a>
                    </li>
                  </>
                )}
              </ul>

              {hasOffice && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    content.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-emerald hover:text-brand-gold transition-colors"
                >
                  View on Google Maps <ArrowRight size={15} />
                </a>
              )}
            </div>

            {hasOffice && (
              <div className="rounded-2xl overflow-hidden border border-brand-border/80 shadow-sm h-[300px] lg:h-auto bg-brand-beige">
                <iframe
                  title={
                    content.slug === "bengaluru"
                      ? "HumNikah Cox Town Bengaluru office location"
                      : `HumNikah ${content.city} office location`
                  }
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    content.mapQuery
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {content.extraSection && (
        <section className="py-12 sm:py-14 bg-white border-b border-brand-border/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-4">
              {content.extraSection.heading}
            </h2>
            <p className="text-[15px] text-black leading-relaxed mb-3">
              {content.extraSection.body}
            </p>
            <Link
              href={content.extraSection.link.href}
              className="text-brand-gold font-semibold hover:underline"
            >
              {content.extraSection.link.label}
            </Link>
          </div>
        </section>
      )}

      {guides.length > 0 && (
        <section className="py-10 bg-brand-cream border-b border-brand-border/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal mb-3">
              Related guides
            </h2>
            <ul className="space-y-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/blog/${g.slug}`}
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Good to Know
            </span>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mt-2">
              {meta.faqHeading ?? `Muslim Matrimony in ${content.city} — FAQs`}
            </h2>
          </div>

          <div className="space-y-3">
            {content.faqs.map((faq) => (
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
                <div className="px-4 sm:px-5 pb-5 pt-0 border-t border-brand-border/40">
                  <p className="mt-3 text-[15px] text-black leading-relaxed">
                    {faq.a}
                  </p>
                  {faq.link && (
                    <a
                      href={faq.link.href}
                      rel="nofollow noopener"
                      className="mt-2 inline-block text-[15px] text-brand-gold font-semibold hover:underline"
                    >
                      {faq.link.label}
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>

          <p className="mt-6 text-sm text-brand-secondary text-center">
            More questions?{" "}
            <Link href="/faq" className="text-brand-gold font-semibold hover:underline">
              Read our full FAQ
            </Link>
            ,{" "}
            <Link href="/fees" className="text-brand-gold font-semibold hover:underline">
              see our fees
            </Link>
            ,{" "}
            <Link href="/how-we-verify" className="text-brand-gold font-semibold hover:underline">
              learn how we verify profiles
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-brand-gold font-semibold hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-brand-cream">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1D184C] to-[#651514] text-white rounded-2xl p-6 sm:p-10 shadow-md border border-brand-gold/30 text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold mb-2">
              Begin Your Nikah Journey in {content.city}
            </h2>
            <p className="text-slate-200 text-sm font-light leading-relaxed mb-6">
              Submit your biodata for free and a senior matchmaker will reach out to
              understand what you and your family are looking for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/submit-biodata"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-charcoal font-bold rounded-lg px-6 py-3 hover:bg-white transition-colors"
              >
                Submit Biodata <ArrowRight size={16} />
              </Link>
              <Link
                href="/muslim-matrimony-india"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg px-6 py-3 hover:bg-white/20 transition-colors"
              >
                Muslim Matrimony in India
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-brand-secondary">
            {SITE_NAME} serves Muslim families across India.{" "}
            {CITY_CONTENT.filter((city) => city.slug !== content.slug)
                            .map((city) => (
                <span key={city.slug}>
                  <Link
                    href={`/muslim-matrimony/${city.slug}`}
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    Muslim Matrimony in {city.city}
                  </Link>{" "}
                </span>
              ))}
          </p>
        </div>
      </section>
    </main>
  );
}
