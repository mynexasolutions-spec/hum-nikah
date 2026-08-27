import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  Headphones,
  HeartHandshake,
  Building2,
  Users,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/muslim-matrimony-india`;

export const metadata: Metadata = {
  title: "Muslim Matrimony in India | Verified Nikah Matches – HumNikah",
  description:
    "HumNikah is a trusted Muslim matrimony service in India offering 100% verified, Shariah-compliant Nikah matchmaking across Karnataka, Kerala, Tamil Nadu, Telangana, Andhra Pradesh and Maharashtra, and for NRIs in the Gulf, UK, USA and Canada.",
  keywords: [
    "Muslim matrimony",
    "Muslim matrimony India",
    "Muslim matrimonial site",
    "Nikah matrimony",
    "Muslim marriage bureau",
    "Muslim marriage bureau Bangalore",
    "Shia matrimony",
    "Sunni matrimony",
    "Muslim brides in India",
    "Muslim grooms in India",
    "halal matchmaking",
    "Shariah compliant matrimony",
    "Muslim shaadi",
    "NRI Muslim matrimony",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Muslim Matrimony in India | Verified Nikah Matches – HumNikah",
    description:
      "Trusted, 100% verified and Shariah-compliant Muslim matchmaking across India and for the global Muslim diaspora.",
    url: PAGE_URL,
    siteName: "HumNikah",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muslim Matrimony in India – HumNikah",
    description:
      "Trusted, verified and Shariah-compliant Muslim matchmaking across India and worldwide.",
  },
};

const regions = [
  {
    name: "Bangalore & Karnataka",
    body: "Our head office in Cox Town, Bangalore serves Muslim families across Frazer Town, Shivaji Nagar, RT Nagar, Commercial Street, Tannery Road, Whitefield, Electronic City, Marathahalli, HSR Layout, Koramangala and beyond, as well as Mangaluru, Mysuru, Hubli-Dharwad, Bhatkal, Gulbarga and Bijapur.",
  },
  {
    name: "Kerala",
    body: "Dedicated matchmaking for the Mappila Muslim community and families across Malappuram, Kozhikode (Calicut), Kannur, Thrissur, Kochi, Kollam and Thiruvananthapuram, including Malayali NRIs settled in the Gulf.",
  },
  {
    name: "Tamil Nadu",
    body: "Serving Tamil Muslim, Labbai, Rowther and Marakkayar families in Chennai, Coimbatore, Madurai, Tiruchirappalli, Vaniyambadi, Ambur and Nagore, with careful attention to community and language preferences.",
  },
  {
    name: "Telangana & Hyderabad",
    body: "Trusted Nikah matchmaking for Urdu-speaking Muslim families across Hyderabad — Old City, Malakpet, Tolichowki, Mehdipatnam and Secunderabad — and for Deccani families in Warangal and Nizamabad.",
  },
  {
    name: "Andhra Pradesh",
    body: "Matchmaking support for Muslim families in Vijayawada, Visakhapatnam, Guntur, Kurnool, Nellore and Kadapa, connecting them with verified profiles within the state and across India.",
  },
  {
    name: "Maharashtra & Mumbai",
    body: "Serving Konkani Muslim, Memon, Bohra and Urdu-speaking families in Mumbai, Pune, Nagpur, Aurangabad, Malegaon and Bhiwandi, including professionals working in the Gulf and overseas.",
  },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "100% Verified Profiles",
    body: "Every biodata is manually screened with government ID and phone verification, and our field representatives conduct respectful home visits before a profile is activated.",
  },
  {
    icon: Lock,
    title: "Privacy & Modesty First",
    body: "Photos, contact details and documents are never publicly searchable. Your information is shared only with matches you and your family approve.",
  },
  {
    icon: Headphones,
    title: "Dedicated Relationship Managers",
    body: "A senior matchmaker personally shortlists profiles, coordinates introductions and guides your family through every stage of the search.",
  },
  {
    icon: HeartHandshake,
    title: "Rooted in Shariah",
    body: "We treat Nikah as a sacred covenant, encourage Wali involvement, and keep every introduction halal, respectful and purposeful.",
  },
  {
    icon: Building2,
    title: "Walk-In Offices",
    body: "Meet our team in person for family consultations and verification support, starting from our Cox Town, Bangalore office.",
  },
  {
    icon: Users,
    title: "Family & Wali Involvement",
    body: "Parents and guardians can speak with our team, join discussions and share preferences — family is central to how HumNikah works.",
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
    body: "We verify your identity, education or profession, marital status and residence so every member searches with confidence.",
  },
  {
    n: "3",
    title: "Receive Curated Matches",
    body: "Your matchmaker shares hand-picked, aligned profiles — never an open database to scroll — and discusses each one with you and your family.",
  },
  {
    n: "4",
    title: "Connect with Barakah",
    body: "When both sides express interest, we facilitate a respectful introduction between the families, insha'Allah leading to Nikah.",
  },
];

const faqs = [
  {
    q: "Is HumNikah a Muslim matrimony site or a marriage bureau?",
    a: "Both. HumNikah combines the reach of an online Muslim matrimonial platform with the personal, verified service of a traditional marriage bureau — including walk-in offices and dedicated relationship managers.",
  },
  {
    q: "Which cities in India does HumNikah cover?",
    a: "We serve Muslim families across Karnataka (Bangalore, Mangaluru, Mysuru), Kerala, Tamil Nadu, Telangana (Hyderabad), Andhra Pradesh and Maharashtra (Mumbai, Pune), and coordinate matches nationwide and with NRIs abroad.",
  },
  {
    q: "Do you match within specific communities and schools of thought?",
    a: "Yes. You can specify Sunni (Hanafi, Shafi'i), Shia, biradari or community (Syed, Sheikh, Pathan, Ansari, Qureshi, Memon and others), language and regional preferences, and we respect them in the matches we share.",
  },
  {
    q: "Are the profiles on HumNikah verified?",
    a: "Every profile undergoes manual verification of government ID, phone number, marital status and residence before activation. We do not run formal criminal-record checks, so families should still do their own due diligence before Nikah.",
  },
  {
    q: "Does HumNikah help NRIs and Gulf-based Muslims?",
    a: "Yes. A large number of our members are Indian Muslims living in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, the UK, USA and Canada. We regularly manage cross-border introductions.",
  },
  {
    q: "How do I get started?",
    a: "Submit your biodata through the HumNikah website and our team will contact you for an initial conversation. If there is mutual alignment, you will be guided through profile creation and verification.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "HumNikah",
      url: SITE_URL,
      description:
        "HumNikah is a trusted Muslim matrimony and Nikah matchmaking service in India, offering verified, Shariah-compliant matchmaking with dedicated relationship managers and walk-in offices.",
      areaServed: [
        "India",
        "United Arab Emirates",
        "Saudi Arabia",
        "Qatar",
        "Kuwait",
        "Bahrain",
        "Oman",
        "United Kingdom",
        "United States",
        "Canada",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560005",
        addressCountry: "IN",
      },
      telephone: "+91-90190-82205",
      email: "connect@humnikah.com",
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Muslim Matrimony in India | Verified Nikah Matches – HumNikah",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Muslim Matrimony in India",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function SectionCta({
  title,
  subtitle,
  tone = "light",
}: {
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`mt-10 sm:mt-12 rounded-2xl border px-5 py-6 sm:px-8 sm:py-7 text-center ${
        dark
          ? "bg-white/5 border-white/15"
          : "bg-white border-brand-border/80 shadow-sm"
      }`}
    >
      <h3
        className={`text-lg sm:text-xl font-playfair font-bold ${
          dark ? "text-white" : "text-brand-charcoal"
        }`}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className={`mt-1.5 text-sm font-light leading-relaxed ${
            dark ? "text-slate-300" : "text-brand-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/submit-biodata"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-charcoal font-bold rounded-xl hover:bg-brand-emerald hover:text-white transition-colors"
        >
          Submit Your Biodata <ArrowRight size={16} />
        </Link>
        <Link
          href="/contact"
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl border transition-colors ${
            dark
              ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
              : "bg-brand-cream border-brand-border text-brand-charcoal hover:bg-brand-light-cream"
          }`}
        >
          Talk to a Matchmaker
        </Link>
      </div>
    </div>
  );
}

export default function MuslimMatrimonyIndiaPage() {
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
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-300 mb-4"
          >
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-brand-gold">Muslim Matrimony in India</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles size={14} className="animate-pulse text-brand-gold" />
              <span>100% Halal &amp; Verified</span>
            </div>

            <h1 className="font-playfair font-bold text-white leading-[1.15]">
              <span className="block text-[28px] sm:text-4xl lg:text-5xl">
                Muslim Matrimony in India
              </span>
              <span className="block text-[#F3B979] italic text-lg sm:text-2xl lg:text-[28px] mt-3 leading-snug">
                Verified Nikah Matches for Every Community
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
              HumNikah is a trusted Muslim matrimonial service helping individuals
              and families across India find a life partner with trust, respect and
              complete privacy — the way a Nikah is meant to begin.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {[
                "Manually verified profiles",
                "Shariah-compliant process",
                "Dedicated matchmakers",
                "Walk-in offices",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-white bg-white/10 border border-white/15 rounded-full px-3 py-1.5"
                >
                  <CheckCircle2 size={13} className="text-brand-gold" /> {t}
                </span>
              ))}
            </div>

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
          </div>
        </div>
      </section>

      {/* Intro / About the service */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto legal-prose">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mb-5">
            A Trusted Muslim Matrimony Service in India
          </h2>
          <div className="space-y-4 text-[15px] sm:text-base text-black leading-relaxed">
            <p>
              Finding the right partner for Nikah is one of the most important
              decisions a Muslim family makes. HumNikah exists to make that search
              sincere, safe and dignified. We are a curated Muslim matrimonial
              platform and marriage bureau combined — pairing the reach of an online
              service with the personal care of an experienced matchmaker who knows
              your family and your expectations.
            </p>
            <p>
              Unlike open matrimonial websites, HumNikah does not publish your
              profile for strangers to browse. Instead, a dedicated relationship
              manager hand-picks aligned profiles based on your deen, family
              background, education, profession, location and community preferences,
              and shares them privately with you and your Wali. Every profile is
              manually verified, and our field representatives carry out respectful
              home visits so that families can proceed with confidence.
            </p>
            <p>
              From Bangalore and Hyderabad to Kerala, Tamil Nadu, Andhra Pradesh and
              Maharashtra — and for Indian Muslims living across the Gulf, the UK,
              the USA and Canada — HumNikah helps thousands of families begin their
              journey to a blessed marriage.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              The HumNikah Difference
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Why Families Choose HumNikah for Their Nikah
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

          <SectionCta
            title="Ready to find your match the halal way?"
            subtitle="Create your verified profile in minutes — it's free to start."
          />
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Simple &amp; Guided
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              How Muslim Matchmaking Works at HumNikah
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="bg-brand-cream/60 rounded-2xl p-6 border border-brand-border/60"
              >
                <div className="w-10 h-10 rounded-full bg-brand-emerald text-white font-bold flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-black leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Halal process */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#1D184C] to-[#141038] text-white border-b border-brand-gold/20">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Guided by Islamic Values
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-white mt-2">
              100% Halal, Shariah-Compliant Matchmaking
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed text-center mb-8">
            HumNikah treats marriage as half of your deen. Our entire process is
            designed to keep every interaction modest, purposeful and pleasing to
            Allah.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Wali and family involvement encouraged at every stage",
              "No public browsing or unsupervised chatting",
              "Photos shared only with mutual consent",
              "Respectful, gender-appropriate communication",
              "Introductions made between families, not just individuals",
              "Support for first marriage, remarriage, divorcees and widows",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <CheckCircle2
                  size={16}
                  className="text-brand-gold shrink-0 mt-0.5"
                />
                <span className="text-sm text-slate-200 font-light">{t}</span>
              </li>
            ))}
          </ul>

          <SectionCta
            tone="dark"
            title="Begin with barakah"
            subtitle="Join HumNikah and let our team handle the search with care and discretion."
          />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Pan-India Network
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Muslim Matrimony Across India
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary mt-3">
              Deep community roots in the South and West, with families connected
              nationwide and overseas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {regions.map((r) => (
              <div
                key={r.name}
                className="bg-brand-cream/60 rounded-2xl p-6 border border-brand-border/60 hover:border-brand-gold/40 transition-colors"
              >
                <h3 className="flex items-center gap-2 text-base font-playfair font-bold text-brand-charcoal mb-2">
                  <MapPin size={16} className="text-brand-gold shrink-0" />
                  {r.name}
                </h3>
                <p className="text-sm text-black leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities & languages */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Every Muslim Family
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Communities &amp; Languages We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-brand-border/80">
              <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-3">
                Schools of Thought
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Sunni – Hanafi",
                  "Sunni – Shafi'i",
                  "Shia",
                  "Dawoodi Bohra",
                  "Ahle Hadees",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium text-brand-charcoal bg-brand-light-cream border border-brand-border rounded-full px-3 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border/80">
              <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-3">
                Communities &amp; Biradari
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Syed",
                  "Sheikh",
                  "Pathan",
                  "Ansari",
                  "Qureshi",
                  "Memon",
                  "Mappila",
                  "Labbai",
                  "Rowther",
                  "Marakkayar",
                  "Konkani",
                  "Deccani",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium text-brand-charcoal bg-brand-light-cream border border-brand-border rounded-full px-3 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border/80">
              <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-3">
                Mother Tongues
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Urdu",
                  "Hindi",
                  "Malayalam",
                  "Tamil",
                  "Telugu",
                  "Kannada",
                  "Marathi",
                  "Konkani",
                  "Dakhni",
                  "English",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium text-brand-charcoal bg-brand-light-cream border border-brand-border rounded-full px-3 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NRI & Gulf */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto legal-prose">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mb-5">
            NRI &amp; Gulf Muslim Matrimony
          </h2>
          <div className="space-y-4 text-[15px] sm:text-base text-black leading-relaxed">
            <p>
              A significant number of HumNikah members are Indian Muslims living
              abroad. We regularly coordinate matches for professionals and families
              in the <strong>UAE</strong> (Dubai, Abu Dhabi, Sharjah),{" "}
              <strong>Saudi Arabia</strong> (Riyadh, Jeddah, Dammam),{" "}
              <strong>Qatar</strong>, <strong>Kuwait</strong>,{" "}
              <strong>Bahrain</strong> and <strong>Oman</strong>, as well as the{" "}
              <strong>United Kingdom</strong>, <strong>United States</strong>,{" "}
              <strong>Canada</strong>, Australia, Malaysia and Singapore.
            </p>
            <p>
              Our team is experienced in managing cross-border introductions —
              handling time-zone differences, family meetings over video, travel
              planning for the Nikah, and the practical questions that come with a
              partner in another country.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Who We Help
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Serious Muslims Seeking a Blessed Marriage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                t: "First Marriage",
                d: "Young men and women and their families beginning the search for a first Nikah.",
              },
              {
                t: "Remarriage",
                d: "Divorcees and widows seeking a respectful, understanding second marriage.",
              },
              {
                t: "Working Professionals",
                d: "Doctors, engineers, IT professionals, CAs, teachers and business owners with limited time to search.",
              },
              {
                t: "NRI Families",
                d: "Parents in India searching for a partner for a child settled abroad, and vice versa.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="bg-white rounded-2xl p-5 border border-brand-border/80"
              >
                <h3 className="text-sm font-bold font-playfair text-brand-emerald mb-1.5">
                  {x.t}
                </h3>
                <p className="text-xs sm:text-sm text-black leading-relaxed">
                  {x.d}
                </p>
              </div>
            ))}
          </div>

          <SectionCta
            title="Your family's search, in trusted hands"
            subtitle="Speak to a senior matchmaker about what you and your family are looking for."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Good to Know
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Muslim Matrimony in India — FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-brand-cream/60 border border-brand-border/60 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-semibold text-brand-charcoal text-[15px]">
                  <span>{f.q}</span>
                  <span className="text-brand-gold text-lg leading-none shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-0 border-t border-brand-border/40">
                  <p className="mt-3 text-[15px] text-black leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-6 text-sm text-brand-secondary text-center">
            More questions?{" "}
            <Link
              href="/faq"
              className="text-brand-gold font-semibold hover:underline"
            >
              Read our full FAQ
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-brand-gold font-semibold hover:underline"
            >
              contact our team
            </Link>
            .
          </p>
          </div>
        </div>
      </section>

      {/* CTA + NAP */}
      <section className="py-12 sm:py-16 bg-brand-cream">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CTA */}
            <div className="bg-gradient-to-br from-[#1D184C] to-[#651514] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-brand-gold/30 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-playfair font-bold mb-2">
                Begin Your Nikah Journey Today
              </h2>
              <p className="text-slate-200 text-sm font-light leading-relaxed mb-5">
                Submit your biodata for free and a senior matchmaker will reach out
                to understand what you and your family are looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/submit-biodata"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-charcoal font-bold rounded-lg px-5 py-3 hover:bg-white transition-colors"
                >
                  Submit Biodata <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg px-5 py-3 hover:bg-white/20 transition-colors"
                >
                  About HumNikah
                </Link>
              </div>
            </div>

            {/* NAP */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border/80 shadow-sm">
              <h2 className="text-lg font-playfair font-bold text-brand-charcoal mb-4">
                Visit or Call Our Bangalore Office
              </h2>
              <ul className="space-y-3.5 text-sm text-black">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town,
                    Bangalore 560005, Karnataka, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-gold shrink-0" />
                  <span className="flex flex-wrap gap-x-2">
                    <a
                      href="tel:+919019082205"
                      className="hover:text-brand-gold transition-colors"
                    >
                      +91 90190 82205
                    </a>
                    <span className="text-brand-border">/</span>
                    <a
                      href="tel:+919844321312"
                      className="hover:text-brand-gold transition-colors"
                    >
                      +91 98443 21312
                    </a>
                  </span>
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
              </ul>

              <div className="mt-5 rounded-xl overflow-hidden border border-brand-border/80 h-[220px] bg-brand-beige">
                <iframe
                  title="HumNikah Bangalore Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6162142469752!2d77.61515297454692!3d12.99638121433557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17001f2e39cb%3A0x9f5280169fb12338!2sSplendid%20Plaza%20Cox%20Town!5e0!3m2!1sen!2sin!4v1786809446893!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            {[
              { href: "/about", label: "About Us" },
              { href: "/submit-biodata", label: "Submit Biodata" },
              { href: "/gallery", label: "Success Gallery" },
              { href: "/blog", label: "Nikah Blog" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
              { href: "/terms", label: "Terms" },
              { href: "/privacy", label: "Privacy" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-brand-secondary hover:text-brand-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
