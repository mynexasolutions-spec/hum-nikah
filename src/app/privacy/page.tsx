import React from "react";
import Link from "next/link";
import { Mail, Phone, ScrollText, Sparkles } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | HumNikah",
  description:
    "How HumNikah collects, uses, stores, shares, and safeguards your personal information across its Islamic matrimonial and matchmaking services.",
};

const LAST_REVISED = "27 August 2026";

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "legal-entity",
    title: "2. Legal Entity & Jurisdiction",
    body: (
      <>
        <p>
          HumNikah is an Islamic matrimonial and matchmaking service operated from
          Bangalore, India, serving Muslim individuals and families in India and,
          where relevant, Non-Resident Indians and persons of Indian origin.
        </p>
        <p>
          Your personal data is handled in accordance with the laws of India,
          including the Digital Personal Data Protection Act, 2023. Any dispute
          relating to this Privacy Policy is subject to the exclusive jurisdiction
          of the courts located in Bangalore, Karnataka.
        </p>
        <p>
          This Privacy Policy governs the data handling practices of HumNikah. It
          does not apply to third-party entities that HumNikah does not own,
          control, or employ.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "3. Information We Collect",
    body: (
      <>
        <p>
          We collect only the information necessary to provide a considered,
          personalised, and Shariah-conscious matchmaking experience.
        </p>
        <p>
          Personal information may be provided directly by you or by your
          authorised representative — for example, a parent, wali, or family
          member. This may include your name, gender, age, date of birth, marital
          status, contact details, nationality, residency status, education,
          profession, income range, lifestyle information, family background,
          community and sect details, photographs, videos, biodata content,
          responses to our compatibility questionnaires, partner preferences, and
          expectations for the marriage. Identity verification documents may be
          requested where legally required or voluntarily provided.
        </p>
        <p>
          We display information as submitted and assume it is accurate, truthful,
          and shared with lawful authority.
        </p>
        <p>
          Sensitive personal information may be collected only with your explicit
          consent. This may include health information if voluntarily shared,
          religious observance and practice, limited financial information where
          relevant, or identifiers required for verification.
        </p>
        <p>
          When you visit our website, certain information may be collected
          automatically, including IP address, browser type, device information,
          pages viewed, time spent on pages, referral sources, communication logs,
          analytics data, and interaction patterns. This information helps us
          improve security, service quality, and user experience.
        </p>
      </>
    ),
  },
  {
    id: "call-recording",
    title: "4. Call Recording Notice",
    body: (
      <p>
        All calls with HumNikah may be recorded for purposes of quality assurance,
        staff training, and legal compliance. By engaging in a call with HumNikah,
        you expressly consent to such recording and agree that no objection will be
        raised to the recording in any form or manner.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking Technologies",
    body: (
      <>
        <p>
          We use cookies and similar technologies to maintain session continuity,
          improve website functionality, remember preferences, analyse behaviour and
          trends, and enhance security.
        </p>
        <p>
          If you disable cookies, some features of the website may not function
          properly. Third-party cookies placed by external websites are not
          controlled by HumNikah.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "6. How We Use Your Information",
    body: (
      <>
        <p>
          Your information enables us to deliver an intentional and tailored search
          experience. We use it to create and manage your HumNikah profile, assess
          compatibility, identify potential matches, facilitate introductions,
          communicate with you and — where authorised — with your family or
          representatives, conduct consultations and strategic reviews, manage
          membership preferences and billing, improve our services, comply with
          legal obligations, and ensure safety and fraud prevention.
        </p>
        <p>
          You may opt out of promotional communications, but you may not opt out of
          essential service-related communications during an active membership.
        </p>
      </>
    ),
  },
  {
    id: "payment-security",
    title: "7. Payment Information & Security",
    body: (
      <>
        <p>
          Payments are processed through secure third-party payment gateways.
          HumNikah does not store complete credit card, debit card, or bank account
          details.
        </p>
        <p>
          We implement reasonable technical and organisational security measures.
          However, no online system can guarantee absolute security. By using our
          services, you acknowledge this inherent risk.
        </p>
      </>
    ),
  },
  {
    id: "referrals",
    title: "8. Referrals",
    body: (
      <p>
        If you refer another individual using our referral tools, you confirm that
        the referred person has a legitimate interest in HumNikah and is eligible
        for our services. We may send one invitation communication and store
        referral details as permitted by applicable law.
      </p>
    ),
  },
  {
    id: "sharing-disclosure",
    title: "9. Information Sharing & Disclosure",
    body: (
      <>
        <p>HumNikah does not sell or rent personal information.</p>
        <p>
          Information may be shared with potential matches for the purpose of
          facilitating curated introductions. This may include profile details,
          photographs, relevant background information, and partner preferences.
          This sharing is fundamental to the matchmaking process and cannot be
          opted out of during active membership.
        </p>
        <p>
          All information you receive about other members or potential matches is
          strictly confidential and must not be disclosed to any third party
          without prior written consent from HumNikah.
        </p>
        <p>
          We may share information with trusted service providers who assist with
          hosting, payment processing, analytics, and communication systems. These
          providers are bound by confidentiality obligations.
        </p>
        <p>
          Information may also be disclosed where required to comply with legal
          obligations, respond to lawful government requests, protect the rights or
          safety of HumNikah, members, or staff, or investigate fraud, misuse, or
          security incidents.
        </p>
      </>
    ),
  },
  {
    id: "community-features",
    title: "10. Community Features",
    body: (
      <p>
        If you participate in any discussions, events, or shared spaces facilitated
        by HumNikah, information you choose to share may be visible to other
        participants. You should exercise discretion when sharing personal
        information in any group or community setting.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "11. Third-Party Links & Services",
    body: (
      <p>
        Our website may include links to or integrations with third-party platforms
        such as video conferencing tools, messaging services (including WhatsApp),
        social media platforms, payment processors, or analytics providers. HumNikah
        is not responsible for the privacy practices or policies of such third
        parties. Your interaction with them is at your own discretion and risk.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "12. Data Retention",
    body: (
      <>
        <p>
          We retain personal information for the duration of your membership and for
          such period thereafter as required by applicable law, regulatory
          obligations, or legitimate business purposes.
        </p>
        <p>
          You may request deletion of your information, subject to legal,
          compliance, and record-keeping requirements.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "13. Your Rights",
    body: (
      <>
        <p>
          Under the Digital Personal Data Protection Act, 2023, and subject to
          applicable law, you may have the right to access your personal data,
          correct inaccuracies, request deletion subject to legal retention
          obligations, withdraw consent, nominate a representative to exercise your
          rights in case of incapacity or death, or lodge a complaint with the Data
          Protection Board of India.
        </p>
        <p>
          Requests may be submitted to{" "}
          <a href="mailto:connect@humnikah.com">connect@humnikah.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "14. Data Security",
    body: (
      <>
        <p>
          We employ technical, administrative, and physical safeguards to protect
          personal information. These measures include encryption, restricted access
          controls, secure servers, confidentiality obligations for staff, and
          periodic security assessments.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "15. International Data Transfers",
    body: (
      <p>
        Some of our service providers operate globally. Where your information is
        stored or processed outside India, it is handled in accordance with
        applicable data protection laws. By using our services, you consent to such
        transfers.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "16. Children's Privacy",
    body: (
      <p>
        Our services are intended exclusively for adults of legal marriageable age.
        We do not knowingly collect personal information from minors. If such
        information is identified, it will be deleted promptly.
      </p>
    ),
  },
  {
    id: "acceptance-changes",
    title: "17. Acceptance & Changes to This Policy",
    body: (
      <>
        <p>
          By accessing or using the HumNikah website or services, you agree to this
          Privacy Policy and the{" "}
          <Link href="/terms">Terms &amp; Conditions</Link>.
        </p>
        <p>
          HumNikah reserves the right to update this Policy at any time. Revised
          versions will be posted on our website with an updated revision date.
          Continued use of the website or services constitutes acceptance of the
          updated Policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "18. Contact Information",
    body: (
      <>
        <p>
          For questions, concerns, or requests relating to this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:connect@humnikah.com">connect@humnikah.com</a>.
        </p>
        <p>
          <strong>Office:</strong> HumNikah, Splendid Plaza, No. 6, 2nd Floor,
          Wheeler Road, Cox Town, Bangalore 560005, Karnataka, India.
          <br />
          <strong>Telephone:</strong>{" "}
          <a href="tel:+919019082205">+91 90190 82205</a> /{" "}
          <a href="tel:+919844321312">+91 98443 21312</a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-cream pb-20">
      {/* Hero */}
      <section className="relative bg-[#1D184C] text-white py-10 sm:py-14 overflow-hidden border-b border-brand-gold/20">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#651514]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={14} className="animate-pulse text-brand-gold" />
            <span>Legal &amp; Support</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white tracking-tight leading-tight">
            Privacy <span className="text-[#F3B979] italic">Policy</span>
          </h1>

          <p className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Your trust is an amanah. This Policy explains how HumNikah collects,
            uses, stores, shares, and safeguards your personal information.
          </p>

          <p className="mt-4 inline-block text-[11px] sm:text-xs font-semibold text-brand-gold bg-white/5 border border-brand-gold/30 rounded-full px-4 py-1.5">
            Last Revised: {LAST_REVISED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Table of Contents */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <details className="toc-details group bg-white rounded-2xl border border-brand-border/80 shadow-sm lg:sticky lg:top-24" open>
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
                    <li>
                      <a
                        href="#introduction"
                        className="block text-[13px] text-black hover:text-brand-gold transition-colors leading-snug py-1 sm:py-0.5"
                      >
                        1. Introduction
                      </a>
                    </li>
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block text-[13px] text-black hover:text-brand-gold transition-colors leading-snug py-1 sm:py-0.5"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </details>
          </aside>

          {/* Body */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Introduction */}
            <div
              id="introduction"
              className="legal-prose scroll-mt-24 bg-white rounded-2xl border border-brand-border/80 shadow-sm p-5 sm:p-8 lg:p-10 mb-6"
            >
              <h2 className="text-lg sm:text-2xl font-playfair font-bold text-brand-charcoal mb-4">
                1. Introduction
              </h2>
              <div className="space-y-4 text-[15px] text-black leading-relaxed font-normal">
                <p>
                  Welcome to HumNikah, referred to as HumNikah, we, us, or our. We
                  are committed to protecting your privacy with the highest degree of
                  care, discretion, and professionalism.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, share, and
                  safeguard personal information when you access our website at
                  www.humnikah.com, communicate with us through any channel, submit a
                  biodata, or subscribe to or engage with our Islamic matrimonial and
                  advisory services.
                </p>
                <p>
                  By using our website or services, you acknowledge that you have
                  read, understood, and agreed to this Privacy Policy. If you do not
                  agree, you must discontinue use immediately. This Policy applies to
                  all users, including individuals represented by authorised third
                  parties such as parents, a wali, or family members.
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="bg-white rounded-2xl border border-brand-border/80 shadow-sm p-5 sm:p-8 lg:p-10">
              <div className="legal-prose space-y-8 sm:space-y-10">
                {sections.map((s) => (
                  <article key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="text-lg sm:text-xl font-playfair font-bold text-brand-charcoal mb-3 pb-2 border-b border-brand-border/50">
                      {s.title}
                    </h2>
                    <div className="space-y-4 text-[15px] text-black leading-relaxed font-normal">
                      {s.body}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Footer note / CTA */}
            <div className="mt-6 bg-gradient-to-r from-[#1D184C] to-[#651514] text-white rounded-2xl p-5 sm:p-8 shadow-md border border-brand-gold/30">
              <h2 className="text-base sm:text-lg font-playfair font-bold mb-2">
                Questions about your privacy?
              </h2>
              <p className="text-slate-200 text-sm font-light leading-relaxed mb-4">
                Reach out to exercise your data rights or to ask how your
                information is handled before you begin your Nikah journey.
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
                  href="/terms"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg px-4 py-2.5 hover:bg-white/20 transition-colors"
                >
                  <ScrollText size={15} className="text-brand-gold shrink-0" /> Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
