/**
 * Community and situation landing pages (Batch 1).
 * Copy uses only facts already on the site (communities, towns served, the
 * verification and Wali-involved process). Owner to review before launch.
 */
export interface CommunityFaq {
  q: string;
  a: string;
}

export interface CommunityPage {
  slug: string;
  primaryKeyword: string;
  /** <= 60 chars including brand */
  title: string;
  /** <= 155 chars */
  description: string;
  h1: string;
  /** Short label used in nav, breadcrumbs and link anchors. */
  navLabel: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  /** "How matching works" / "What families usually ask" style sections, rendered after `sections`. */
  extraSections?: { heading: string; body: string[] }[];
  /** Short "...in Bangalore" section with a link to the Bengaluru page (or a zone). */
  bangaloreSection?: {
    heading: string;
    body: string[];
    link: { href: string; label: string };
  };
  placesHeading: string;
  places: { heading: string; body: string }[];
  /** City page slugs this page links to. */
  relatedCities: string[];
  /** Blog guides this page links to (slug + anchor text). */
  relatedGuides?: { slug: string; label: string }[];
  faqs: CommunityFaq[];
}

export const COMMUNITY_PAGES: CommunityPage[] = [
  {
    slug: "labbai-rowther-marakkayar",
    primaryKeyword: "Labbai matrimony",
    title: "Labbai, Rowther & Marakkayar Matrimony | HumNikah",
    description:
      "Labbai, Rowther and Marakkayar Muslim matrimony in Tamil Nadu. Verified profiles, Wali-involved introductions, Tamil support. Submit biodata free.",
    h1: "Labbai, Rowther & Marakkayar Muslim Matrimony",
    navLabel: "Labbai, Rowther & Marakkayar",
    intro: [
      "HumNikah offers Labbai matrimony, along with Rowther and Marakkayar matchmaking, for Tamil Muslim families who want a verified, family-led process instead of an open matrimonial website. Community is treated as a genuine preference, recorded in your biodata and used when your relationship manager shortlists profiles.",
      "Every biodata is manually screened, and introductions are arranged between families with the Wali involved from the first conversation. You can communicate with us in Tamil, Urdu or English.",
    ],
    sections: [
      {
        heading: "Labbai matrimony",
        body: [
          "Families who prefer a Labbai match can state this in their biodata. We use it alongside language, education, profession and family expectations, so the proposals you receive are aligned with what you actually asked for.",
        ],
      },
      {
        heading: "Rowther matrimony",
        body: [
          "For Rowther families, the same process applies: a relationship manager reads your brief, shortlists verified profiles that match your community preference, and discusses each one with you and your Wali before any introduction is made.",
        ],
      },
      {
        heading: "Marakkayar matrimony",
        body: [
          "Marakkayar families can register in the same way. We never share your photographs, contact details or documents publicly. They are passed on only to matches that you and your family approve.",
        ],
      },
      {
        heading: "Who we serve across Tamil Nadu",
        body: [
          "We assist Tamil Muslim families across Chennai, Coimbatore, Madurai, Tiruchirappalli, Vaniyambadi, Ambur and Nagore, including merchants, doctors, software professionals and business families. Whether your family adheres to Labbai traditions, Rowther trade legacies or coastal Marakkayar customs, your specific preferences are noted and prioritized.",
        ],
      },
      {
        heading: "How matching works for Tamil Muslim families",
        body: [
          "Rather than placing your biodata in open groups or searchable internet directories, a dedicated matchmaker reviews each proposal personally. We verify basic identity and residence credentials, discuss expectations directly with parents and elders, and coordinate introductions only with explicit consent from the bride's Wali.",
        ],
      },
      {
        heading: "What families usually ask",
        body: [
          "Families frequently ask whether conversations can be conducted in Tamil or Urdu, how ancestral town ties are honored, and how proposals involving Gulf-employed members are coordinated. Our team communicates fluently in Tamil, English and Urdu, respecting local cultural nuances from the first call.",
        ],
      },
      {
        heading: "How verification works",
        body: [
          "Before a profile is shared, we verify identity through government ID, along with phone number, marital status, education or profession and residence. We do not run formal criminal-record checks, so families should still do their own due diligence before deciding.",
        ],
      },
    ],
    bangaloreSection: {
      heading: "Tamil Muslim Families in Bangalore",
      body: [
        "Many Tamil Muslim families live and work in Bangalore while their roots are in Tamil Nadu. If that is your family, you can work with us from Bangalore without travelling to Chennai: our office is in Cox Town, and most of the process happens by phone and WhatsApp.",
        "Tell us your community, whether Labbai, Rowther, Marakkayar or another Tamil Muslim community, and the language you prefer. You can choose Tamil, Urdu or English. We record your preferences in the biodata and use them when we shortlist, and we can also share profiles from Tamil families in Chennai and elsewhere. Every profile is manually screened, and the Wali is involved where the bride's family wishes. Submitting your biodata to HumNikah is free, and you can ask questions about how we work before you decide anything.",
      ],
      link: { href: "/muslim-matrimony/bengaluru", label: "Muslim marriage bureau in Bangalore" },
    },
    placesHeading: "Tamil Nadu towns we serve",
    places: [
      {
        heading: "Chennai, Coimbatore, Madurai and Trichy",
        body: "We serve Tamil Muslim families in Chennai, Coimbatore, Madurai and Tiruchirappalli (Trichy), by phone and WhatsApp, with in-person meetings at our Bengaluru office when needed.",
      },
      {
        heading: "Vaniyambadi, Ambur and Nagore",
        body: "Families in Vaniyambadi, Ambur and Nagore can use the same verified, Wali-involved process, and can also be matched with families elsewhere in India and in the Gulf.",
      },
    ],
    relatedCities: ["chennai"],
    relatedGuides: [
      {
        slug: "how-to-verify-a-muslim-rishta",
        label: "Checklist to Verify a Muslim Rishta",
      },
    ],
    faqs: [
      {
        q: "Can I ask for a Labbai, Rowther or Marakkayar match specifically?",
        a: "Yes. You can state your community preference in the biodata form, and your relationship manager uses it when shortlisting.",
      },
      {
        q: "Can I communicate in Tamil?",
        a: "Yes. You can choose Tamil, Urdu or English as the language for communication with your relationship manager.",
      },
      {
        q: "Do you serve Vaniyambadi, Ambur and Nagore?",
        a: "Yes. We serve families in these towns as well as Chennai, Coimbatore, Madurai and Tiruchirappalli.",
      },
      {
        q: "Do I need to travel to Bengaluru?",
        a: "No. You can begin and continue the process by phone and WhatsApp. In-person meetings take place at our Bengaluru office when a family wishes to meet.",
      },
    ],
  },
  {
    slug: "mappila",
    primaryKeyword: "Mappila matrimony",
    title: "Mappila Muslim Matrimony in Kerala | HumNikah",
    description:
      "Mappila matrimony in Kerala for families in Malappuram, Kozhikode, Kannur and Thrissur. Verified profiles, Wali involved. Submit biodata free.",
    h1: "Mappila Muslim Matrimony in Kerala",
    navLabel: "Mappila (Kerala)",
    intro: [
      "HumNikah provides Mappila matrimony for Muslim families across Kerala who expect discretion, clear communication and a verified process. Your biodata is reviewed by a relationship manager who then shortlists profiles that match your community, family and religious preferences.",
      "Privacy comes first. Photographs, contact details and documents are never publicly searchable, and the Wali is involved in every introduction.",
    ],
    sections: [
      {
        heading: "How Mappila matchmaking works with HumNikah",
        body: [
          "You submit a biodata with your community and family preferences. A relationship manager verifies it, shortlists aligned profiles and discusses each one with you and your family. Introductions are made only when both sides are interested.",
        ],
      },
      {
        heading: "Families in the Gulf with Kerala roots",
        body: [
          "Many Kerala families have members working in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. We coordinate cross-border introductions between Kerala families and Malayali members in the Gulf, around time zones and travel plans.",
        ],
      },
      {
        heading: "Who we serve across Malabar and Kerala",
        body: [
          "We work with Mappila and Malayali Muslim families throughout Malappuram, Kozhikode, Kannur, Thrissur, Kochi, Kollam and Thiruvananthapuram. This includes established business families, agricultural households, healthcare professionals, academics and overseas professionals across the Gulf.",
        ],
      },
      {
        heading: "What families usually ask about Mappila rishtas",
        body: [
          "Families frequently enquire about Shafi'i madhhab practices, local mahalls, Gulf travel schedules for meetings, and mahr agreements. We ensure that both sides have complete clarity on family background, residence plans and expectations before facilitating meetings between elders.",
        ],
      },
      {
        heading: "Verification and privacy",
        body: [
          "Identity, education or profession, marital status and residence are verified before a profile is shared, using government ID and phone verification, with respectful home visits by our representatives where possible. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
    ],
    bangaloreSection: {
      heading: "Malayali Muslim Families in Bangalore",
      body: [
        "Malayali Muslim families who have settled in Bangalore for work or study can use HumNikah without going back to Kerala to begin the search. Our office is in Cox Town, Bengaluru, and we speak with families by phone and WhatsApp at times that suit them.",
        "Tell us your community, including Mappila, and your family and language preferences, and we take them into account when we shortlist. We can share profiles from families in Bangalore and from families in Kerala, and we also coordinate introductions with Malayali families in the Gulf. Privacy comes first: photographs and contact details are shared only with matches that you and your family approve, and every profile is manually screened. Submitting your biodata to HumNikah is free, and you can message us on WhatsApp first if you prefer.",
      ],
      link: { href: "/muslim-matrimony/bengaluru", label: "Muslim marriage bureau in Bangalore" },
    },
    placesHeading: "Kerala districts we serve",
    places: [
      {
        heading: "Malappuram, Kozhikode (Calicut), Kannur and Thrissur",
        body: "We support Mappila Muslim families in Malappuram, Kozhikode (Calicut), Kannur and Thrissur, working with them by phone and WhatsApp.",
      },
      {
        heading: "Kochi, Kollam and Thiruvananthapuram",
        body: "Families in Kochi, Kollam and Thiruvananthapuram can use the same process, with proposals available from across Kerala, India and the Gulf.",
      },
    ],
    relatedCities: ["kochi"],
    relatedGuides: [
      {
        slug: "how-to-verify-a-muslim-rishta",
        label: "Checklist to Verify a Muslim Rishta",
      },
    ],
    faqs: [
      {
        q: "Does HumNikah serve Mappila families?",
        a: "Yes. Mappila and Malayali Muslim families are a core part of our Kerala service, and community preferences are respected when we shortlist.",
      },
      {
        q: "Can Gulf-based Kerala families register?",
        a: "Yes. We regularly coordinate matches between Kerala families and Malayali members in the Gulf.",
      },
      {
        q: "Do you cover Malappuram, Kozhikode and Kannur?",
        a: "Yes. We serve families in Malappuram, Kozhikode (Calicut), Kannur, Thrissur, Kochi, Kollam and Thiruvananthapuram.",
      },
      {
        q: "How is my privacy protected?",
        a: "Your photographs, contact details and documents are shared only with matches that you and your family approve, and only as far as needed.",
      },
    ],
  },
  {
    slug: "konkani",
    primaryKeyword: "Konkani Muslim matrimony",
    title: "Konkani Muslim Matrimony in Mumbai | HumNikah",
    description:
      "Konkani Muslim matrimony in Mumbai, Pune, Malegaon and Bhiwandi. Verified profiles, Wali-involved introductions. Submit biodata free.",
    h1: "Konkani Muslim Matrimony",
    navLabel: "Konkani (Mumbai)",
    intro: [
      "HumNikah offers Konkani Muslim matrimony for families in Mumbai and across Maharashtra who want a discreet, dignified process handled by a personal matchmaker. Community and language are recorded in your biodata and respected when profiles are shortlisted.",
      "Introductions are arranged between families, with the Wali involved throughout and no open browsing of profiles.",
    ],
    sections: [
      {
        heading: "Konkani matchmaking, handled for you",
        body: [
          "For busy professionals and business families, a dedicated relationship manager does the screening and shortlisting. You receive a short list of verified, aligned profiles and discuss each one with your family, rather than spending evenings scrolling.",
        ],
      },
      {
        heading: "Who we serve in Mumbai and the Konkan belt",
        body: [
          "We assist Konkani Muslim families residing across Mumbai, Navi Mumbai, Thane, Pune and coastal districts including Raigad, Ratnagiri and Sindhudurg. Members include maritime executives, corporate professionals, entrepreneurs and families with members working abroad.",
        ],
      },
      {
        heading: "What families usually ask about Konkani rishtas",
        body: [
          "Konkani families often ask how dialect preferences (Konkani, Marathi, Urdu) are accommodated, how family lineage and ancestral villages are respected, and how introductions are kept confidential in tight-knit community circles. Every step is handled privately through family elders without public exposure.",
        ],
      },
      {
        heading: "Verification and privacy",
        body: [
          "Every biodata is manually screened. Identity, education or profession, marital status and residence are verified before sharing, and your photographs and contact details stay private until you approve an introduction. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
      {
        heading: "Gulf and overseas families",
        body: [
          "Many Maharashtra families have members working in the Gulf and overseas. We coordinate introductions across time zones and travel plans.",
        ],
      },
    ],
    extraSections: [
      {
        heading: "What Konkani families usually ask",
        body: [
          "Families often ask how private the process is. Your biodata is not posted publicly, and profiles are never open for browsing. Photographs and contact details go only to families you and your Wali have approved, and every introduction is arranged between families rather than between strangers.",
        ],
      },
    ],
    placesHeading: "Maharashtra cities we serve",
    places: [
      {
        heading: "Mumbai and Pune",
        body: "We serve Konkani Muslim families in Mumbai and Pune by phone and WhatsApp. There is no HumNikah office in Mumbai; in-person meetings take place at our Bengaluru office.",
      },
      {
        heading: "Malegaon and Bhiwandi",
        body: "Families in Malegaon and Bhiwandi are served in the same way, along with Nagpur and Aurangabad, with proposals available across India.",
      },
    ],
    relatedCities: ["mumbai"],
    relatedGuides: [
      {
        slug: "konkani-muslim-matrimony-mumbai-guide",
        label: "Konkani Muslim Matrimony in Mumbai: A Family Guide",
      },
    ],
    faqs: [
      {
        q: "Can I ask for a Konkani Muslim match?",
        a: "Yes. State your community preference in the biodata form and your relationship manager will use it when shortlisting.",
      },
      {
        q: "Is there a HumNikah office in Mumbai?",
        a: "No. Mumbai families are served by phone and WhatsApp, and in-person meetings take place at our Bengaluru office in Cox Town.",
      },
      {
        q: "Do you cover Pune, Malegaon and Bhiwandi?",
        a: "Yes. We serve Muslim families in Pune, Malegaon, Bhiwandi, Nagpur and Aurangabad as well as Mumbai.",
      },
      {
        q: "Can I delegate the search?",
        a: "Yes. A relationship manager does the screening and shortlisting and shares only curated, aligned profiles with you.",
      },
    ],
  },
  {
    slug: "deccani",
    primaryKeyword: "Deccani Muslim matrimony",
    title: "Deccani Muslim Matrimony in Hyderabad | HumNikah",
    description:
      "Deccani Muslim matrimony for Hyderabad, Warangal and Nizamabad families. Verified profiles, Urdu support, Wali involved. Submit biodata free.",
    h1: "Deccani Muslim Matrimony",
    navLabel: "Deccani (Hyderabad)",
    intro: [
      "HumNikah offers Deccani Muslim matrimony for Hyderabadi and Urdu-speaking families who value the traditional marriage bureau approach: a known matchmaker, verified details and introductions made family to family.",
      "We take time to understand your family, your expectations and your school of thought, and then share only the proposals that genuinely fit, with the Wali informed at every step.",
    ],
    sections: [
      {
        heading: "Deccani and Hyderabadi family preferences",
        body: [
          "Sect, maslak, community and language preferences common among Hyderabadi and Deccani families are recorded in your biodata and respected during shortlisting. They are not treated as generic filters.",
        ],
      },
      {
        heading: "Urdu-speaking proposals",
        body: [
          "Urdu-speaking families are matched with Urdu-speaking proposals where their preferences allow, and your relationship manager can communicate with you in Urdu.",
        ],
      },
      {
        heading: "Hyderabadis settled abroad",
        body: [
          "Many Hyderabadi families have members in the Gulf, the UK and North America. We coordinate cross-border introductions and family meetings around time zones and travel plans.",
        ],
      },
      {
        heading: "Verification",
        body: [
          "Identity, education or profession, marital status and residence are verified before a profile is shared. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
    ],
    extraSections: [
      {
        heading: "How matching works for Deccani families",
        body: [
          "Matching starts with a conversation, not a search form. Your relationship manager asks about your khandaan, your expectations and your maslak, then reads your biodata alongside what you have told us. Profiles are shortlisted by hand and discussed with you and your Wali before any introduction is made, so you only meet families who fit what you asked for.",
        ],
      },
      {
        heading: "What Deccani families usually ask",
        body: [
          "Families usually want to know three things. First, whether their language will be respected: Urdu-speaking families can talk to us in Urdu, and Urdu-speaking proposals are shared where preferences allow. Second, whether a profile has been checked: identity, education or profession, marital status and residence are verified before it is shared. Third, who will see the biodata: only the families we introduce, and only with your approval.",
        ],
      },
    ],
    bangaloreSection: {
      heading: "Families from Karnataka in Bangalore",
      body: [
        "If your family lives in Bangalore and you would like Deccani or Urdu-speaking proposals, you can start from here without travelling to Hyderabad. Our office is in Cox Town, Bengaluru, and the whole process can happen by phone and WhatsApp.",
        "Tell us your community, your language and your family's expectations, and we take them into account when we shortlist. Families from Karnataka are welcome to ask for proposals within Bangalore, across the state or from Hyderabad. Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too. Submitting your biodata to HumNikah is free, and please call or message before visiting so that we can set aside time for your family.",
      ],
      link: { href: "/muslim-matrimony/karnataka", label: "Muslim matrimony in Karnataka" },
    },
    placesHeading: "Telangana areas we serve",
    places: [
      {
        heading: "Hyderabad and Secunderabad",
        body: "We serve families across Hyderabad, including the Old City, Malakpet, Tolichowki and Mehdipatnam, and in Secunderabad, by phone and WhatsApp.",
      },
      {
        heading: "Warangal and Nizamabad",
        body: "Deccani families in Warangal and Nizamabad can use the same process, with verified profiles shared from Hyderabad and across India.",
      },
    ],
    relatedCities: ["hyderabad", "bengaluru"],
    relatedGuides: [
      {
        slug: "muslim-marriage-bureau-hyderabad-guide",
        label: "How to Choose a Muslim Marriage Bureau in Hyderabad",
      },
    ],
    faqs: [
      {
        q: "Do you support Deccani families?",
        a: "Yes. Deccani and Hyderabadi family preferences are recorded and respected when we shortlist profiles.",
      },
      {
        q: "Can I get Urdu-speaking proposals?",
        a: "Yes, where your preferences allow. Your relationship manager can communicate with you in Urdu.",
      },
      {
        q: "Do you cover Warangal and Nizamabad?",
        a: "Yes. We serve families in Warangal and Nizamabad as well as Hyderabad and Secunderabad.",
      },
      {
        q: "Can NRI Hyderabadis register?",
        a: "Yes. We coordinate introductions for Hyderabadi families settled in the Gulf, the UK and North America.",
      },
    ],
  },
  {
    slug: "divorcee-widow-remarriage",
    primaryKeyword: "divorcee Muslim matrimony",
    title: "Muslim Divorcee & Widow Remarriage | HumNikah",
    description:
      "Muslim divorcee and widow matrimony: respectful second-marriage matchmaking with verification, privacy and Wali involvement. Submit biodata free.",
    h1: "Muslim Remarriage: Divorcee & Widow Matrimony",
    navLabel: "Divorcee & Widow Remarriage",
    intro: [
      "HumNikah supports divorcee Muslim matrimony and widow remarriage with the same care, privacy and Shariah-minded process we offer every member. Divorced and widowed members are welcome to register, and a second marriage is handled with dignity and discretion.",
      "A relationship manager reviews your biodata, understands what you are looking for, and shortlists only profiles that are genuinely aligned, with the Wali involved in every introduction.",
    ],
    sections: [
      {
        heading: "Muslim second marriage, handled respectfully",
        body: [
          "Marital status is recorded openly in the biodata. You can state whether you are divorced, widowed or separated, and what you are looking for, so proposals reach you with full clarity on both sides.",
        ],
      },
      {
        heading: "Verification for remarriage profiles",
        body: [
          "Marital status is verified like every other detail, alongside identity, education or profession and residence. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
      {
        heading: "Privacy",
        body: [
          "Photographs, contact details and documents are never publicly searchable. They are shared only with matches that you and your family approve, which matters especially when a member wants discretion about their past.",
        ],
      },
      {
        heading: "Wali and family involvement",
        body: [
          "We encourage Wali involvement and treat every introduction as a family matter. Parents or guardians can speak with our team, share preferences and take part in discussions.",
        ],
      },
    ],
    extraSections: [
      {
        heading: "What families usually ask about remarriage",
        body: [
          "Many members ask how marital status is recorded. The biodata form has a marital status field with options for never married, divorced, widowed, separated and annulled, so every profile starts from a clearly stated position. That status is then verified like every other detail. Introductions stay private: photographs and contact details go only to matches you approve.",
        ],
      },
    ],
    bangaloreSection: {
      heading: "Remarriage in Bangalore",
      body: [
        "HumNikah's office is in Cox Town, Bengaluru, and families across Bangalore can begin a conversation about a second marriage by phone, on WhatsApp or by appointment at the office. Many members prefer to keep this part of their life private, so we speak with you first, and with your family if you wish, before anything is shared with another family.",
        "Marital status is stated openly in the biodata and verified like every other detail, and introductions are made only with your approval and through your Wali or family. You can start from any part of the city. Please call or message us before visiting, so that we can set aside time for you. You are welcome to ask questions about how we work before you decide anything, and there is no obligation to go ahead.",
      ],
      link: { href: "/muslim-matrimony/bengaluru", label: "Muslim marriage bureau in Bangalore" },
    },
    placesHeading: "Families we support across India",
    places: [
      {
        heading: "Every city we serve",
        body: "We serve remarriage and second-marriage families in Bengaluru, Chennai, Hyderabad, Kochi, Mumbai and Vijayawada, and across India, mostly by phone and WhatsApp.",
      },
    ],
    relatedCities: ["bengaluru", "chennai", "hyderabad", "kochi", "mumbai", "vijayawada"],
    relatedGuides: [
      {
        slug: "muslim-biodata-format-for-marriage",
        label: "Free Muslim Biodata Format for Marriage",
      },
    ],
    faqs: [
      {
        q: "Do you help Muslim divorcees and widows?",
        a: "Yes. Divorced and widowed members are welcome to register, and the matchmaking process is the same private, verified and Wali-involved one we offer everyone.",
      },
      {
        q: "Is second marriage handled with Wali involvement?",
        a: "Yes. We encourage Wali involvement in every introduction, including second marriages.",
      },
      {
        q: "How is my privacy protected?",
        a: "Your photographs, contact details and documents are never publicly searchable and are shared only with matches that you and your family approve.",
      },
      {
        q: "Is marital status verified?",
        a: "Yes. Marital status is verified before a profile is shared, together with identity, education or profession and residence.",
      },
    ],
  },

  {
    slug: "beary-bhatkali",
    primaryKeyword: "Beary Muslim matrimony",
    title: "Beary & Bhatkali Muslim Matrimony | HumNikah",
    description:
      "Beary and Bhatkali Muslim matrimony for families in Bangalore, Mangaluru and Bhatkal. Verified profiles, Wali involved. Submit biodata free.",
    h1: "Beary & Bhatkali Muslim Matrimony",
    navLabel: "Beary & Bhatkali",
    intro: [
      "HumNikah offers Beary Muslim matrimony and Bhatkali matchmaking for families who want their community, language and traditions respected from the first conversation. Your preferences are recorded in the biodata and used by your relationship manager when shortlisting profiles.",
      "Every biodata is manually screened. Introductions are arranged between families with the Wali involved, and nothing is shared publicly.",
    ],
    sections: [
      {
        heading: "Beary matrimony",
        body: [
          "Families who prefer a Beary match can state this clearly in their biodata. Your relationship manager combines it with education, profession, language and family expectations, so the proposals you receive are aligned with what you asked for rather than being a generic list.",
        ],
      },
      {
        heading: "Bhatkali matrimony",
        body: [
          "Bhatkali families can register in the same way. We discuss each shortlisted profile with you and your family before any introduction is made, and we never bypass the Wali.",
        ],
      },
      {
        heading: "Bangalore and coastal Karnataka families",
        body: [
          "Our office is in Cox Town, Bangalore (Bengaluru), where families can walk in for a consultation. Families in Mangaluru and Bhatkal can work with us by phone and WhatsApp, and be matched with families in Bangalore, across Karnataka and in the Gulf.",
        ],
      },
      {
        heading: "Who we serve in Bangalore and coastal Karnataka",
        body: [
          "We assist Beary-speaking families originating from Dakshina Kannada (Mangaluru, Bantwal, Puttur) and Bhatkali families from Uttara Kannada, both those living in their home districts and those settled in Bengaluru or the Gulf. Our team works with IT professionals, merchants, entrepreneurs and religious scholars.",
        ],
      },
      {
        heading: "What families usually ask",
        body: [
          "Families commonly ask how distinctive Beary and Nawayath traditions are respected, how language at home is considered, and whether elders can meet our team at the Bengaluru office. We welcome families to our Cox Town office to discuss community preferences and matrimonial expectations in person.",
        ],
      },
      {
        heading: "Verification and privacy",
        body: [
          "Identity, education or profession, marital status and residence are verified before a profile is shared. Photographs, contact details and documents are shared only with matches that you and your family approve. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
    ],
    bangaloreSection: {
      heading: "Families from Karnataka in Bangalore",
      body: [
        "Beary and Bhatkali families often have ties to the coastal towns of Karnataka, such as Mangaluru and Bhatkal, while living or working in Bangalore. HumNikah's office in Cox Town is a short step from the city's central neighbourhoods, and families from coastal Karnataka can also talk to us by phone and WhatsApp.",
        "Tell us your community, your language and what you are looking for. We record these in the biodata and take them into account when we shortlist profiles, though we cannot promise a specific match or timeline. Introductions are made through families, with the Wali involved where the bride's family wishes, and your biodata is never posted publicly. Submitting your biodata to HumNikah is free, and you are welcome to call before you visit.",
      ],
      link: { href: "/muslim-matrimony/bengaluru/central-bangalore", label: "Muslim matrimony in Central Bangalore" },
    },
    placesHeading: "Where we serve Beary and Bhatkali families",
    places: [
      {
        heading: "Bangalore (Bengaluru)",
        body: "Walk-in consultations at our Cox Town office, with families also served from Frazer Town, Shivaji Nagar, RT Nagar and the wider city.",
      },
      {
        heading: "Mangaluru and Bhatkal",
        body: "Families in Mangaluru and Bhatkal are served by phone and WhatsApp, with in-person meetings at our Bangalore office when a family wishes to meet.",
      },
    ],
    relatedCities: ["bengaluru"],
    relatedGuides: [
      {
        slug: "muslim-marriage-bureau-bangalore-guide",
        label: "How to Choose a Muslim Marriage Bureau in Bangalore",
      },
    ],
    faqs: [
      {
        q: "Do you match Beary and Bhatkali families?",
        a: "Yes. Beary and Bhatkali community preferences are recorded in your biodata and respected when we shortlist profiles.",
      },
      {
        q: "Can I visit your office in Bangalore?",
        a: "Yes. Our office is at Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Please call or message us first so that we can set aside time for your family.",
      },
      {
        q: "Do you serve families in Mangaluru and Bhatkal?",
        a: "Yes. We serve families in Mangaluru and Bhatkal, as well as Mysuru, Hubli-Dharwad, Gulbarga and Bijapur, mostly by phone and WhatsApp.",
      },
      {
        q: "Is the Wali involved?",
        a: "Yes. We encourage Wali involvement from the first conversation, and introductions are made between families, never directly between strangers.",
      },
    ],
  },
  {
    slug: "nri-gulf",
    primaryKeyword: "NRI Muslim rishta",
    title: "NRI & Gulf Muslim Rishta | HumNikah",
    description:
      "NRI and Gulf-based Muslim rishta and matrimony. Cross-border introductions, verified profiles, Wali involved, privacy first. Submit biodata free.",
    h1: "NRI & Gulf-Based Muslim Rishta and Matrimony",
    navLabel: "NRI & Gulf Families",
    intro: [
      "HumNikah helps NRI and Gulf-based families find a Muslim rishta in India through a verified, family-led process. A relationship manager understands your brief, shortlists aligned profiles and coordinates introductions around your time zone and travel plans.",
      "Photographs, contact details and documents are shared only with matches that you and your family approve, and the Wali is involved throughout.",
    ],
    sections: [
      {
        heading: "How NRI matchmaking works",
        body: [
          "You submit your biodata online, wherever you are. A relationship manager contacts you by phone or WhatsApp, verifies your details, and shares hand-picked profiles from families in India. Family meetings and introductions are scheduled around your availability.",
        ],
      },
      {
        heading: "Gulf families",
        body: [
          "We regularly coordinate matches between families in India and members working in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. Many of our Kerala, Hyderabad and Maharashtra members have relatives in the Gulf.",
        ],
      },
      {
        heading: "UK, North America and Southeast Asia",
        body: [
          "We also help families with members in the UK and North America, and Tamil-speaking families in Singapore and Malaysia, connect with verified profiles in India.",
        ],
      },
      {
        heading: "Verification from abroad",
        body: [
          "Identity, education or profession, marital status and residence are verified before a profile is shared, using government ID and phone verification. Where possible our representatives visit the family in India. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
    ],
    extraSections: [
      {
        heading: "What NRI and Gulf families usually ask",
        body: [
          "Families abroad often ask whether they must be in India to begin. You do not. Your biodata is submitted online and your relationship manager speaks with you by phone or WhatsApp. When both sides are interested, family meetings are planned around your travel dates, so a visit home can be used for the introduction rather than for the search.",
        ],
      },
    ],
    placesHeading: "Where your family can be matched",
    places: [
      {
        heading: "Bangalore, Chennai and Hyderabad",
        body: "Bangalore (Bengaluru), Chennai and Hyderabad families are a large part of our network, including Deccani, Tamil Muslim and Kannada-speaking communities.",
      },
      {
        heading: "Kerala, Maharashtra and Andhra Pradesh",
        body: "We also serve Mappila families in Kerala, Konkani and Urdu-speaking families in Maharashtra, and Muslim families across Andhra Pradesh.",
      },
    ],
    relatedCities: ["bengaluru", "hyderabad", "kochi", "mumbai"],
    relatedGuides: [
      {
        slug: "how-to-verify-a-muslim-rishta",
        label: "Checklist to Verify a Muslim Rishta",
      },
    ],
    faqs: [
      {
        q: "Can Gulf-based families register?",
        a: "Yes. You can submit your biodata online and work with a relationship manager by phone and WhatsApp.",
      },
      {
        q: "Do you work around time zones?",
        a: "Yes. Calls and family meetings are scheduled around your time zone and travel plans.",
      },
      {
        q: "Which countries do you coordinate with?",
        a: "We regularly coordinate with the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman, and also with the UK, North America, Singapore and Malaysia.",
      },
      {
        q: "Is the Wali involved?",
        a: "Yes. We encourage Wali involvement, and introductions are made between families.",
      },
    ],
  },
  {
    slug: "professionals",
    primaryKeyword: "Muslim doctor engineer matrimony",
    title: "Muslim Doctor & Engineer Matrimony | HumNikah",
    description:
      "Muslim matrimony for doctors, engineers, IT professionals, CAs and business owners. A matchmaker does the shortlisting. Submit biodata free.",
    h1: "Muslim Matrimony for Doctors, Engineers & Professionals",
    navLabel: "Doctors, Engineers & Professionals",
    intro: [
      "HumNikah offers Muslim doctor and engineer matrimony for busy professionals who want a considered process without hours of browsing. A dedicated relationship manager does the screening and shortlisting, and shares only curated, aligned profiles.",
      "Introductions are discreet and Wali-involved, and your photographs and contact details stay private until you approve.",
    ],
    sections: [
      {
        heading: "Doctors and engineers",
        body: [
          "Education and profession are recorded in your biodata and verified before a profile is shared. You can state what you are looking for, such as a similar profession, or a partner with different but compatible goals, and your relationship manager uses it when shortlisting.",
        ],
      },
      {
        heading: "IT professionals, CAs, teachers and business owners",
        body: [
          "We also work with IT professionals, chartered accountants, teachers and business-owning families. Because your time is limited, we handle the screening, and you spend it on genuine conversations with your family.",
        ],
      },
      {
        heading: "Working in the Gulf or overseas",
        body: [
          "Many professionals work in the Gulf or abroad. We schedule calls and family introductions around your time zone and travel plans.",
        ],
      },
      {
        heading: "Verification and privacy",
        body: [
          "Identity, education or profession, marital status and residence are verified before sharing. We do not run formal criminal-record checks, so families should still do their own due diligence before deciding.",
        ],
      },
    ],
    extraSections: [
      {
        heading: "What busy professionals usually ask",
        body: [
          "Professionals usually ask how much of their time the search will take. The screening and shortlisting are done by your relationship manager, so your part is to share your biodata and preferences once, review the profiles you are sent and talk them through with your family. Photographs and contact details stay private until you approve an introduction.",
        ],
      },
    ],
    bangaloreSection: {
      heading: "Muslim Professionals in Bangalore",
      body: [
        "Doctors, engineers, IT professionals, chartered accountants and business owners in Bangalore often have long working days, so we plan the search around your schedule. Tell us which times suit you for a call or a WhatsApp message, and we will try to accommodate you.",
        "Your relationship manager does the screening and shortlisting, so you review a short list of aligned, manually screened profiles instead of searching alone. Share your education, work, location and family expectations once, and we take them into account. You can do everything by phone and WhatsApp, and visit our Cox Town office only if you want to. Introductions are made through families, with the Wali involved where the bride's family wishes, and your biodata is never posted publicly.",
      ],
      link: { href: "/muslim-matrimony/bengaluru", label: "Muslim marriage bureau in Bangalore" },
    },
    placesHeading: "Where professionals can find matches",
    places: [
      {
        heading: "Bangalore and Hyderabad",
        body: "Bangalore (Bengaluru) professionals in the IT corridors of Whitefield, Electronic City, Marathahalli, HSR Layout and Koramangala, and Hyderabad professionals around HITEC City and Banjara Hills, are served by phone, WhatsApp and our Cox Town office.",
      },
      {
        heading: "Across India",
        body: "We also serve professionals in Chennai, Kochi, Mumbai, Vijayawada and other cities, matching them with verified profiles across India.",
      },
    ],
    relatedCities: ["bengaluru", "hyderabad", "chennai", "mumbai"],
    relatedGuides: [
      {
        slug: "muslim-biodata-format-for-marriage",
        label: "Free Muslim Biodata Format for Marriage",
      },
    ],
    faqs: [
      {
        q: "Can I ask for a doctor or engineer match?",
        a: "Yes. State your preferences for education and profession in the biodata form, and your relationship manager will use them when shortlisting.",
      },
      {
        q: "I have very little time. Can you manage the search?",
        a: "Yes. A relationship manager does the screening and shortlisting and shares only curated, aligned profiles.",
      },
      {
        q: "Is my profile kept private?",
        a: "Yes. Photographs, contact details and documents are never publicly searchable and are shared only with matches that you and your family approve.",
      },
      {
        q: "Do you verify education and profession?",
        a: "Yes. Education or profession is verified before a profile is shared, along with identity, marital status and residence.",
      },
    ],
  },
];

export function getCommunityPage(slug: string): CommunityPage | undefined {
  return COMMUNITY_PAGES.find((c) => c.slug === slug);
}

/** Community pages relevant to each city page (for cross-links). */
export const CITY_COMMUNITY_LINKS: Record<string, string[]> = {
  bengaluru: ["beary-bhatkali", "professionals", "nri-gulf", "divorcee-widow-remarriage"],
  chennai: ["labbai-rowther-marakkayar", "professionals", "nri-gulf", "divorcee-widow-remarriage"],
  hyderabad: ["deccani", "professionals", "nri-gulf", "divorcee-widow-remarriage"],
  kochi: ["mappila", "nri-gulf", "divorcee-widow-remarriage"],
  mumbai: ["konkani", "professionals", "nri-gulf", "divorcee-widow-remarriage"],
  vijayawada: ["nri-gulf", "divorcee-widow-remarriage"],
};

function validateCommunities(pages: CommunityPage[]) {
  for (const p of pages) {
    if (p.title.length > 60) throw new Error(`${p.slug}: title > 60`);
    if (p.description.length > 155) throw new Error(`${p.slug}: description > 155`);
    if (p.faqs.length < 4) throw new Error(`${p.slug}: needs at least 4 FAQs`);
  }
}
validateCommunities(COMMUNITY_PAGES);
