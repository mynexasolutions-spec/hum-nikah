"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Phone, ScrollText, Sparkles } from "lucide-react";

const LAST_REVISED = "27 August 2026";

type QA = { q: string; a: React.ReactNode };
type Category = { id: string; title: string; blurb: string; items: QA[] };

const categories: Category[] = [
  {
    id: "the-bigger-picture",
    title: "The Bigger Picture",
    blurb: "What HumNikah is, who it is for, and how we think about marriage.",
    items: [
      {
        q: "Is HumNikah only for arranged marriages?",
        a: (
          <>
            Not at all. HumNikah supports every path to a halal marriage — whether
            your family leads the search, you take the initiative yourself, or it is
            a shared effort. What stays constant is a process that is respectful,
            transparent, and rooted in Islamic values, with Wali and family
            involvement encouraged at every stage.
          </>
        ),
      },
      {
        q: "What does HumNikah believe about marriage?",
        a: (
          <>
            We believe Nikah completes half of your deen. It is a sacred covenant,
            not a transaction — so we treat every introduction with the seriousness,
            modesty, and sincerity the decision deserves.
          </>
        ),
      },
      {
        q: "Who are your members?",
        a: (
          <>
            Our members are practising Muslims and their families across India and
            the diaspora — students, professionals, entrepreneurs, and homemakers.
            What they share is a serious intention for marriage, respect for
            privacy, and a preference for a guided, verified process over open
            browsing.
          </>
        ),
      },
      {
        q: "Do you only work with people in India?",
        a: (
          <>
            Our roots are in India, with offices and verification teams across
            Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana, and
            Maharashtra. We also serve Non-Resident Indians and families in the
            Gulf, UK, USA, Canada, and beyond, and regularly coordinate cross-border
            matches.
          </>
        ),
      },
      {
        q: "What does membership include?",
        a: (
          <>
            Depending on the plan you choose: a manually verified profile, a
            dedicated relationship manager, curated match suggestions, coordinated
            introductions, privacy controls for your photos and contact details, and
            support for your family or Wali throughout the search.
          </>
        ),
      },
      {
        q: "What is your success rate, and can you guarantee a match?",
        a: (
          <>
            No one can honestly guarantee marriage — rizq and Nikah are from Allah.
            We do not quote a single success figure or promise a timeline. What we
            commit to is sincere, structured effort: verified profiles, thoughtful
            shortlisting, and hands-on coordination until you and your family feel
            confident.
          </>
        ),
      },
      {
        q: "Do you work with specific communities or schools of thought?",
        a: (
          <>
            We serve Muslims across all communities, languages, and maslaks. You can
            specify community, sect, language, or regional preferences, and we will
            respect them in the matches we share with you.
          </>
        ),
      },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    blurb: "Signing up, eligibility, and how matches are found and shared.",
    items: [
      {
        q: "How do I sign up?",
        a: (
          <>
            Complete the{" "}
            <Link href="/submit-biodata">Submit Biodata</Link> form and a member of
            our team will reach out to understand you and your expectations. If there
            is mutual alignment, you will be guided through completing your profile
            and verification. Every search begins with an in-depth conversation so we
            know who you are and what you are looking for.
          </>
        ),
      },
      {
        q: "Is there an eligibility criterion?",
        a: (
          <>
            You must be a Muslim of legal marriageable age under Indian law, seeking
            a lawful Nikah, and able to provide truthful information. Profiles that
            cannot be verified, or that misrepresent key details, are not activated.
          </>
        ),
      },
      {
        q: "How do you ensure matches are aligned?",
        a: (
          <>
            We look beyond surface filters — deen and practice, family background,
            expectations of married life, location, education, and lifestyle — and
            your relationship manager discusses each shortlist with you and your
            family before an introduction is made.
          </>
        ),
      },
      {
        q: "What is the difference between profile sharing and an introduction?",
        a: (
          <>
            Profile sharing is when we send you a curated profile to consider. An
            introduction happens only when both sides express interest — at that
            point we facilitate respectful contact between the families or
            individuals.
          </>
        ),
      },
      {
        q: "Is there a minimum number of introductions each month?",
        a: (
          <>
            No. Matchmaking is quality-led, not quota-led. Some months bring several
            suitable profiles, others none, depending on your criteria and who is
            genuinely aligned. A quiet period is not a lapse in service.
          </>
        ),
      },
      {
        q: "What if I do not like the matches?",
        a: (
          <>
            Tell your relationship manager. Your feedback refines the search — we
            would rather recalibrate than keep sending profiles that do not fit.
            There is no obligation to proceed with anyone.
          </>
        ),
      },
      {
        q: "How long does the process usually take?",
        a: (
          <>
            It varies widely — from a few weeks to many months — depending on your
            preferences, flexibility, and family readiness. We keep the search active
            and stay in regular contact throughout.
          </>
        ),
      },
    ],
  },
  {
    id: "privacy-family",
    title: "Privacy, Family & Your Search",
    blurb: "Confidentiality, Wali involvement, and managing your membership.",
    items: [
      {
        q: "Is my information kept confidential?",
        a: (
          <>
            Yes. Your contact details, photos, and verification documents are never
            made publicly searchable. They are shared only with matches you and your
            family approve, and only to the extent needed. See our{" "}
            <Link href="/privacy">Privacy Policy</Link> for full details.
          </>
        ),
      },
      {
        q: "Will my profile be visible on your website or app?",
        a: (
          <>
            No. HumNikah is not an open-browsing platform. Your profile is shared
            privately and selectively with suitable matches by our team — never
            displayed publicly.
          </>
        ),
      },
      {
        q: "Can my family or Wali be involved in the search?",
        a: (
          <>
            Absolutely — we encourage it. Parents, guardians, and your Wali can
            speak with your relationship manager, join discussions, visit our
            offices, and share preferences. Family involvement is central to how we
            work.
          </>
        ),
      },
      {
        q: "Can I pause my membership?",
        a: (
          <>
            Yes. If you need time — for exams, travel, a family matter, or an ongoing
            conversation — ask your relationship manager to pause your search and
            resume it when you are ready.
          </>
        ),
      },
      {
        q: "Can I upgrade my membership?",
        a: (
          <>
            Yes. You can move to a higher plan at any time; the difference is
            adjusted and the added benefits apply from the upgrade date.
          </>
        ),
      },
      {
        q: "What happens if I find someone independently?",
        a: (
          <>
            That is wonderful — the goal is a successful Nikah, however it happens.
            Let us know so we can close your search. Fees already paid are not
            refunded, but if things are still uncertain you are welcome to pause your
            membership instead.
          </>
        ),
      },
    ],
  },
  {
    id: "trust-payments",
    title: "Trust, Safety & Payments",
    blurb: "Verification, our team, and how payments work.",
    items: [
      {
        q: "Do you conduct background checks?",
        a: (
          <>
            We verify government ID, education or employment proof, marital status,
            and residence through our field representatives, and we rely on family
            references and careful human judgement. We do not run formal
            criminal-record checks — public databases are inconsistent across regions
            and cannot be treated as a complete history — so families should still
            carry out their own due diligence before Nikah.
          </>
        ),
      },
      {
        q: "Tell me about your team — can I meet them before joining?",
        a: (
          <>
            HumNikah is run by experienced matchmakers, relationship managers, and
            trained verification representatives, with walk-in offices for in-person
            family meetings. You are welcome to call us or visit an office for a
            no-obligation conversation before you decide.
          </>
        ),
      },
      {
        q: "Can I see testimonials or success stories?",
        a: (
          <>
            Yes — you can view stories that families have agreed to share on our
            website and in our <Link href="/gallery">gallery</Link>. Many members
            prefer privacy, so not every success is published.
          </>
        ),
      },
      {
        q: "What payment methods do you accept?",
        a: (
          <>
            We accept UPI, bank transfers, and major credit and debit cards. For
            office visits, a cheque can also be accepted.
          </>
        ),
      },
      {
        q: "Can I split my membership payment?",
        a: (
          <>
            Some plans allow payment in instalments. Ask your relationship manager
            what is available for the plan you are considering.
          </>
        ),
      },
      {
        q: "Are membership fees refundable?",
        a: (
          <>
            Membership fees are paid in advance and are non-refundable, as they cover
            the dedicated time and curation that begin as soon as you join — this
            applies even if you meet someone outside HumNikah during your membership.
            Your plan fee is the only charge; there is no separate success fee. Full
            terms are in our <Link href="/terms">Terms &amp; Conditions</Link>.
          </>
        ),
      },
    ],
  },
];

function AccordionItem({
  qa,
  isOpen,
  onToggle,
}: {
  qa: QA;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-brand-cream/60 border border-brand-border/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-gold/40 shadow-xs">
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-5 text-left font-semibold text-brand-charcoal flex items-center justify-between gap-4 text-[15px] hover:text-brand-emerald transition-colors cursor-pointer"
      >
        <span>{qa.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-brand-gold"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="legal-prose px-4 pb-5 pt-0 border-t border-brand-border/40">
              <p className="mt-3 text-[15px] text-black leading-relaxed">{qa.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqPageClient() {
  const [openKey, setOpenKey] = useState<string>(
    `${categories[0].id}-0`
  );

  return (
    <main className="min-h-screen bg-brand-cream pb-20">
      {/* Hero */}
      <section className="relative bg-[#1D184C] text-white py-10 sm:py-14 overflow-hidden border-b border-brand-gold/20">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#651514]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={14} className="animate-pulse text-brand-gold" />
            <span>Help &amp; Support</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-[#F3B979] italic">Questions</span>
          </h1>

          <p className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Everything families ask us about membership, matches, privacy,
            verification, and payments — answered plainly.
          </p>

          <p className="mt-4 inline-block text-[11px] sm:text-xs font-semibold text-brand-gold bg-white/5 border border-brand-gold/30 rounded-full px-4 py-1.5">
            Last Updated: {LAST_REVISED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Table of Contents */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <details
              className="toc-details group bg-white rounded-2xl border border-brand-border/80 shadow-sm lg:sticky lg:top-24"
              open
            >
              <summary className="flex items-center justify-between gap-2 p-5 cursor-pointer list-none select-none">
                <span className="flex items-center gap-2">
                  <ScrollText size={18} className="text-brand-gold" />
                  <span className="text-sm font-playfair font-bold text-brand-charcoal">
                    On This Page
                  </span>
                </span>
                <span className="text-brand-gold text-lg leading-none group-open:rotate-45 transition-transform lg:hidden">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 lg:pt-5 lg:border-t lg:border-brand-border/60">
                <nav>
                  <ol className="space-y-2 sm:space-y-1.5">
                    {categories.map((c) => (
                      <li key={c.id}>
                        <a
                          href={`#${c.id}`}
                          className="block text-[13px] text-black hover:text-brand-gold transition-colors leading-snug py-1 sm:py-0.5"
                        >
                          {c.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </details>
          </aside>

          {/* Body */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="scroll-mt-24 bg-white rounded-2xl border border-brand-border/80 shadow-sm p-5 sm:p-8 lg:p-10"
              >
                <h2 className="text-lg sm:text-xl font-playfair font-bold text-brand-charcoal mb-1">
                  {cat.title}
                </h2>
                <p className="text-[13px] sm:text-sm text-brand-secondary mb-5">
                  {cat.blurb}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {cat.items.map((qa, i) => {
                    const key = `${cat.id}-${i}`;
                    return (
                      <AccordionItem
                        key={key}
                        qa={qa}
                        isOpen={openKey === key}
                        onToggle={() =>
                          setOpenKey(openKey === key ? "" : key)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Still have questions CTA */}
            <div className="bg-gradient-to-r from-[#1D184C] to-[#651514] text-white rounded-2xl p-5 sm:p-8 shadow-md border border-brand-gold/30">
              <h2 className="text-base sm:text-lg font-playfair font-bold mb-2">
                Still have a question?
              </h2>
              <p className="text-slate-200 text-sm font-light leading-relaxed mb-4">
                Speak to a senior matchmaker about your search, your family&apos;s
                preferences, or how membership works.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm">
                <a
                  href="mailto:connect@humnikah.com"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 bg-brand-gold text-brand-charcoal font-bold rounded-lg px-4 py-2.5 hover:bg-white transition-colors break-all"
                >
                  <Mail size={15} className="shrink-0" /> connect@humnikah.com
                </a>
                <a
                  href="tel:+919019082205"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg px-4 py-2.5 hover:bg-white/20 transition-colors"
                >
                  <Phone size={15} className="text-brand-gold shrink-0" /> +91 90190 82205
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg px-4 py-2.5 hover:bg-white/20 transition-colors"
                >
                  <Sparkles size={15} className="text-brand-gold shrink-0" /> Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
