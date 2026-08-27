import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ScrollText, Sparkles } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | HumNikah",
  description:
    "The Terms and Conditions governing the use of HumNikah's Islamic matrimonial and matchmaking services.",
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
    title: "1. Legal Entity & Jurisdiction",
    body: (
      <>
        <p>
          HumNikah is an Islamic matrimonial and matchmaking service operated from
          Bangalore, India, providing personalised, advisory-led matchmaking for
          Muslim individuals and families in India and, where relevant, for
          Non-Resident Indians and persons of Indian origin.
        </p>
        <p>
          These Terms and your use of the services shall be governed by and
          construed in accordance with the laws of India. You irrevocably agree to
          submit to the exclusive jurisdiction of the courts located in Bangalore,
          Karnataka, for the resolution of any dispute, claim, or cause of action
          arising out of or relating to the website or the services.
        </p>
        <p>
          Any dispute, claim, or cause of action arising out of or relating to the
          website or services must be initiated within three months from the date
          of the event giving rise to such claim. Failure to initiate proceedings
          within this period constitutes an absolute, irrevocable, and
          unconditional waiver of such claim.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    body: (
      <>
        <p>
          You may use the services of HumNikah only if you are of legal marriageable
          age under the laws applicable in India and are seeking a lawful Nikah. You
          must have full legal capacity, authority, and right to enter into this
          Agreement and to provide the information required in connection with the
          services.
        </p>
        <p>
          You must not be subject to any law, court order, injunction, decree, or
          legal restriction that prohibits you from providing personal information
          or engaging in matrimonial discussions.
        </p>
        <p>
          All information provided by you must be true, accurate, complete, and not
          misleading, and must be kept current throughout the duration of your
          membership.
        </p>
        <p>
          If you are registering on behalf of another individual — for example, a
          son, daughter, or ward — you represent and warrant that you are legally
          authorised to act on their behalf and have obtained their express
          permission.
        </p>
        <p>
          HumNikah reserves the right to terminate membership immediately for any
          misrepresentation, concealment, or provision of inaccurate or outdated
          information. In such cases, all fees paid shall be forfeited in full and
          HumNikah reserves the right to pursue legal remedies where appropriate.
        </p>
        <p>
          HumNikah facilitates introductions solely for lawful matrimonial alliances
          between persons legally competent to enter into Nikah under applicable
          law. Membership is void where prohibited.
        </p>
      </>
    ),
  },
  {
    id: "nature-of-service",
    title: "3. Nature of Service",
    body: (
      <>
        <p>
          HumNikah provides curated, advisory-led matchmaking services rooted in
          Islamic values. These services may include consultations, biodata
          curation and analysis, curated profile suggestions and introductions,
          verification support, and strategic guidance throughout the search
          process.
        </p>
        <p>
          While HumNikah is committed to a professional, discreet, and personalised
          approach, you expressly acknowledge and agree that HumNikah does not make
          any guarantees, whether express or implied, regarding the number,
          frequency, or timing of introductions, mutual interest or compatibility
          between individuals, or relationship success or marital outcomes.
        </p>
        <p>
          Matchmaking is an inherently subjective and time-intensive process. There
          may be periods during which no profiles are shared based on your criteria,
          preferences, availability, and alignment. Such periods do not constitute
          non-performance or breach of service.
        </p>
      </>
    ),
  },
  {
    id: "conditions-of-use",
    title: "4. Conditions of Use",
    body: (
      <>
        <p>
          By using the website and services, you agree that you will use HumNikah
          solely for lawful matrimonial purposes. You accept full responsibility for
          the authenticity, legality, and accuracy of all information provided by
          you or by anyone acting on your behalf.
        </p>
        <p>
          You acknowledge that HumNikah does not conduct background checks, legal
          verification, criminal history checks, financial checks, or credit checks
          unless expressly agreed to in writing.
        </p>
        <p>
          You assume all risks associated with communication or meetings with other
          individuals, whether online or offline, and agree to take all reasonable
          precautions to protect your personal, professional, and physical safety,
          including involving your wali or family members where appropriate.
        </p>
        <p>
          You agree not to use HumNikah for advertising, commercial solicitation,
          unlawful activities, harassment, or any conduct that may cause harm to
          others. You further agree to maintain confidentiality of your account
          credentials and all information shared with you through the service.
        </p>
        <p>
          You must promptly update your profile if there are any material changes to
          your personal, family, or professional circumstances that may affect your
          eligibility or suitability.
        </p>
        <p>
          HumNikah reserves the right to remove content deemed inaccurate,
          inappropriate, unlawful, or offensive and may suspend or terminate
          membership without refund for violations of these Terms.
        </p>
      </>
    ),
  },
  {
    id: "communication-consent",
    title: "5. Communication & Consent",
    body: (
      <>
        <p>
          You authorise HumNikah to contact you via email, phone, WhatsApp,
          messaging platforms, video calls, or other communication channels for
          service delivery, administration, and membership-related purposes.
        </p>
        <p>
          As communication is essential to the service, you may not opt out of
          receiving such service communications during an active membership.
        </p>
        <p>
          You consent to HumNikah using and sharing your profile and relevant
          information for matchmaking purposes, including sharing profiles and
          photographs with selected potential matches and communicating with you
          and, where authorised by you, with your family or representatives
          regarding progress.
        </p>
        <p>
          HumNikah will not use your information for promotional or marketing
          purposes without your explicit consent.
        </p>
      </>
    ),
  },
  {
    id: "call-recording",
    title: "6. Call Recording Notice",
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
    id: "membership-termination",
    title: "7. Membership Duration & Termination",
    body: (
      <>
        <h3>Membership Duration</h3>
        <p>
          Membership duration is defined by the plan you select at the time of
          enrollment.
        </p>
        <h3>Termination by Member</h3>
        <p>
          You may terminate your membership at any time by providing written notice
          to HumNikah. No refunds will be issued for any unused portion of the
          membership.
        </p>
        <h3>Termination by HumNikah</h3>
        <p>
          HumNikah reserves the right to terminate or suspend your membership
          immediately, without prior notice or refund, if you:
        </p>
        <ul>
          <li>Violate these Terms and Conditions or applicable laws;</li>
          <li>Provide false, misleading, or incomplete information;</li>
          <li>
            Harass, intimidate, threaten, abuse, or endanger any HumNikah staff,
            representatives, or other members, in any form or manner;
          </li>
          <li>Breach any other provision of this Agreement.</li>
        </ul>
        <h3>Effect of Termination or Expiration</h3>
        <p>
          Upon termination or expiration of membership, all access to your profile,
          communications, and any associated content on the HumNikah platform will
          be revoked. HumNikah shall have no further obligations toward providing
          services or content once access is terminated.
        </p>
      </>
    ),
  },
  {
    id: "refund-policy",
    title: "8. Refund Policy",
    body: (
      <>
        <p>
          All fees are payable in advance, non-transferable, and strictly
          non-refundable under all circumstances.
        </p>
        <p>
          By making a payment, you confirm that you have read and accepted the
          no-refund policy. You agree that dissatisfaction, perceived lack of
          suitable introductions, periods without introductions, early termination,
          or personal circumstances do not constitute grounds for refund, reversal,
          or chargeback.
        </p>
      </>
    ),
  },
  {
    id: "proprietary-rights",
    title: "9. Proprietary Rights",
    body: (
      <>
        <p>
          All intellectual property associated with HumNikah, including trademarks,
          logos, designs, text, concepts, images, databases, processes, and
          proprietary systems, is owned exclusively by HumNikah and protected by
          applicable laws.
        </p>
        <p>
          You may not reproduce, distribute, display, publish, scrape, reverse
          engineer, or commercially exploit any HumNikah content without prior
          written consent.
        </p>
        <p>
          Any intellectual property infringement may result in immediate termination
          of membership and legal action.
        </p>
      </>
    ),
  },
  {
    id: "membership-access",
    title: "10. Membership Access & Rights",
    body: (
      <>
        <p>
          HumNikah reserves the right to refuse membership or discontinue services
          at its discretion where eligibility criteria are not met or where
          continued engagement is not aligned with the integrity of the service.
        </p>
        <p>
          HumNikah may broaden the search by contacting individuals within or
          outside the HumNikah network where appropriate. HumNikah may, but is not
          obligated to, monitor disputes between members and is not responsible for
          interactions or transactions between members.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "11. Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify and hold harmless HumNikah, its directors,
          officers, employees, agents, and affiliates from any losses, claims,
          damages, liabilities, costs, or expenses arising out of your use or misuse
          of the services, information provided by you, breach of these Terms, or
          violation of applicable laws or third-party rights.
        </p>
        <p>
          HumNikah reserves the right to assume exclusive control of the defence of
          any matter subject to indemnification, and you agree to cooperate fully in
          such defence.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "12. Disclaimer",
    body: (
      <>
        <p>
          You are solely responsible for your safety, conduct, and decisions in all
          interactions facilitated through HumNikah.
        </p>
        <p>
          You should never share financial information or send money to other
          members or third parties.
        </p>
        <p>
          All services are provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. HumNikah disclaims all warranties, express or
          implied, including accuracy, reliability, or outcomes of profiles,
          introductions, or content posted by members or third parties.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "13. Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, HumNikah&apos;s total liability
          shall not exceed the membership fee paid by you.
        </p>
        <p>
          HumNikah shall not be liable for indirect, incidental, consequential,
          special, or punitive damages, including emotional distress or loss arising
          from interactions with other members or third parties.
        </p>
        <p>
          HumNikah does not verify all information provided by members and is not
          responsible for inaccuracies, omissions, or fraudulent representations.
        </p>
      </>
    ),
  },
  {
    id: "data-protection",
    title: "14. Data Protection & Privacy",
    body: (
      <p>
        Your personal data is processed in accordance with our{" "}
        <Link href="/privacy">Privacy Policy</Link>. By using the services, you
        acknowledge that you have reviewed and accepted our data handling practices.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "15. Third-Party Links & Social Media",
    body: (
      <>
        <p>
          The website may contain links to third-party websites or tools. HumNikah
          is not responsible for the content, policies, or practices of such third
          parties.
        </p>
        <p>
          If you engage with HumNikah through social media platforms, you are
          responsible for understanding the terms and privacy settings of those
          platforms.
        </p>
      </>
    ),
  },
  {
    id: "privacy-policy",
    title: "16. Privacy Policy",
    body: (
      <p>
        Use of the website and services constitutes acceptance of the{" "}
        <Link href="/privacy">Privacy Policy</Link>. Please review it carefully
        before using the services.
      </p>
    ),
  },
  {
    id: "acceptance-modifications",
    title: "17. Acceptance & Modifications",
    body: (
      <>
        <p>By using the website or services, you agree to these Terms.</p>
        <p>
          HumNikah reserves the right to modify these Terms at any time. Changes
          become effective upon posting on the website. Continued use constitutes
          acceptance of the updated Terms.
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
          For queries or complaints, please contact us at{" "}
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

export default function TermsPage() {
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
            Terms &amp; <span className="text-[#F3B979] italic">Conditions</span>
          </h1>

          <p className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Please read these Terms carefully. By accessing HumNikah, registering,
            or subscribing to any membership, you agree to be bound by them in
            their entirety.
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
            <div className="bg-white rounded-2xl border border-brand-border/80 shadow-sm p-5 sm:p-8 lg:p-10 mb-6">
              <h2 className="text-lg sm:text-2xl font-playfair font-bold text-brand-charcoal mb-4">
                Introduction
              </h2>
              <div className="legal-prose space-y-4 text-[15px] text-black leading-relaxed font-normal">
                <p>
                  HumNikah, referred to as HumNikah, we, us, or our, provides
                  personalised Islamic matrimonial and advisory matchmaking services
                  for Muslim individuals and families in India, Non-Resident Indians,
                  and persons of Indian origin.
                </p>
                <p>
                  These Terms and Conditions constitute a legally binding agreement
                  between you, referred to as you, your, user, or Member, and
                  HumNikah. By accessing or using our website at www.humnikah.com,
                  registering with us, submitting a biodata, subscribing to any
                  membership, or otherwise engaging with our services, you confirm
                  that you have read, understood, and agreed to be bound by these
                  Terms and our{" "}
                  <Link
                    href="/privacy"
                    className="text-brand-gold font-medium hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  in their entirety, without exception.
                </p>
                <p>
                  If you do not agree to these Terms, you must not access or use the
                  website or services. If any provision of this Agreement is held
                  invalid or unenforceable, the remaining provisions shall continue
                  in full force and effect.
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
                Questions about these Terms?
              </h2>
              <p className="text-slate-200 text-sm font-light leading-relaxed mb-4">
                Our support team is happy to help you understand your membership,
                privacy, and rights before you begin your Nikah journey.
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
                  <MapPin size={15} className="text-brand-gold shrink-0" /> Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
