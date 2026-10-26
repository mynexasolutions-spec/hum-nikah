/**
 * ONE source of truth for HumNikah's business facts.
 *
 * Every page, schema block, footer and header reads the name, address, phone
 * numbers and approved sentences from here, so they can never disagree. (Competitor
 * sites show several addresses and phone formats; consistency is an easy ranking
 * and trust win.) Change a fact here and it changes everywhere.
 *
 * Do not add facts that cannot be proven: no counters, ratings, "since" years or
 * extra offices. HumNikah has ONE office: Cox Town, Bengaluru.
 */

export const FACTS = {
  name: "HumNikah",
  alternateNames: ["Hum Nikah", "HumNikah.com"],

  /** The single office. Nothing else may be presented as an office. */
  address: {
    street: "Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560005",
    country: "IN",
    full: "Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005",
  },

  /** Number for calls. */
  call: {
    display: "+91 98443 21312",
    e164: "+919844321312",
    tel: "tel:+919844321312",
  },

  /** WhatsApp number. Links must go through /whatsapp?src=<tag> (nofollow). */
  whatsapp: {
    display: "+91 90190 82205",
    e164: "+919019082205",
    digits: "919019082205",
    tel: "tel:+919019082205",
  },

  email: "connect@humnikah.com",

  /** Approved sentences. Use these exactly; do not paraphrase claims. */
  sentences: {
    free: "Submitting your biodata to HumNikah is free.",
    screening:
      "Every profile is manually screened and we check identity and address documents.",
    noCriminalChecks: "We do not run formal criminal-record checks.",
    visitFirst:
      "Please call or message before you visit, so we can set aside time for your family.",
  },
} as const;

/** Screening + limits in one approved sentence pair. */
export const VERIFICATION_SENTENCE = `${FACTS.sentences.screening} ${FACTS.sentences.noCriminalChecks}`;

/** `/whatsapp?src=<tag>`: the tracked, nofollow redirect to the WhatsApp chat. */
export const whatsappHref = (src: string) => `/whatsapp?src=${src}`;
