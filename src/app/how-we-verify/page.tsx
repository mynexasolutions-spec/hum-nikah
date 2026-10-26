import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { FACTS, whatsappHref } from "@/lib/siteFacts";
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/layout/Breadcrumbs";

const TITLE = "How HumNikah Verifies Profiles | Manual Screening";
const DESCRIPTION =
  "How HumNikah verifies profiles: every profile is manually screened and we check identity and address documents. What we check, and what we do not.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: "/how-we-verify",
});

const FAQS = [
  {
    q: "Do you run criminal background checks on profiles?",
    a: "No. We do not run formal criminal-record checks. We manually screen each profile and check identity and address documents, and we encourage families to make their own enquiries too.",
  },
  {
    q: "Which documents do you check?",
    a: "We check identity and address documents for every profile before it is shared.",
  },
  {
    q: "Is my biodata shown publicly?",
    a: "No. We do not post biodatas publicly. We share a biodata only with families we introduce, with your consent, and we do not add anyone to a WhatsApp group without permission.",
  },
  {
    q: "Is it free to submit my biodata?",
    a: "Yes. Submitting your biodata to HumNikah is free.",
  },
];

const crumbs: Crumb[] = [
  { name: "Home", href: "/" },
  { name: "How We Verify", href: "/how-we-verify" },
];

export default function HowWeVerifyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(crumbs),
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
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
              How HumNikah Verifies Profiles
            </h1>
            <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {FACTS.sentences.screening} {FACTS.sentences.noCriminalChecks} Here is exactly
              what that means, so your family knows what to expect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[15px] sm:text-base text-black leading-relaxed">
          <div>
            <h2 className="text-2xl font-playfair font-bold text-brand-charcoal mb-3">
              What we do
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Manual screening.</strong> A member of our team reads every biodata. We
                do not pass profiles on automatically.
              </li>
              <li>
                <strong>Identity and address documents.</strong> We check identity and address
                documents for every profile before it is shared with another family.
              </li>
              <li>
                <strong>Wali and family involved.</strong> Introductions are made through
                families, with the Wali involved where the bride&apos;s family wishes.
              </li>
              <li>
                <strong>Privacy.</strong> We do not post biodatas publicly. A biodata is shared
                only with families we introduce, with your consent.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-bold text-brand-charcoal mb-3">
              What we do not do
            </h2>
            <p>
              {FACTS.sentences.noCriminalChecks} We cannot promise a match, a timeline or
              anyone&apos;s character. Documents show facts such as a name, an address or a
              qualification. They do not show how a person treats their family, and no bureau
              can read that from a form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-bold text-brand-charcoal mb-3">
              What your family should do too
            </h2>
            <p>
              Verification by a bureau is one layer of care, not the only one. We encourage every
              family to make its own enquiries: speak to the other family and not only the
              candidate, ask relatives and people who know them, check education and work, and
              ask openly about marital status. Our{" "}
              <Link
                href="/blog/how-to-verify-a-muslim-rishta"
                className="text-brand-gold font-semibold hover:underline"
              >
                checklist to verify a Muslim rishta
              </Link>{" "}
              walks through each step.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-bold text-brand-charcoal mb-3">
              Your privacy
            </h2>
            <p>
              We do not run an open WhatsApp group, because groups show every member&apos;s phone
              number and can expose biodatas. We chat with families personally, and we will not
              add you to any group without your permission. To understand what to write in a
              biodata and what to leave out, read our guide on{" "}
              <Link
                href="/blog/how-to-make-a-muslim-biodata"
                className="text-brand-gold font-semibold hover:underline"
              >
                how to make a Muslim biodata
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal text-center mb-8">
            Verification: FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-brand-border/60 rounded-xl overflow-hidden"
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

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[15px] text-black mb-5">{FACTS.sentences.free}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/submit-biodata"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D184C] text-white font-bold rounded-xl hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
            >
              Submit your biodata (free) <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappHref("how-we-verify")}
              rel="nofollow noopener"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-brand-border bg-white font-semibold rounded-xl hover:border-brand-gold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-secondary">
            Read about our{" "}
            <Link href="/muslim-matrimony/bengaluru" className="text-brand-gold font-semibold hover:underline">
              Muslim marriage bureau in Bangalore
            </Link>{" "}
            or see our{" "}
            <Link href="/fees" className="text-brand-gold font-semibold hover:underline">
              fees
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
