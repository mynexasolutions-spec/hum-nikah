import { FACTS } from "./siteFacts";

/**
 * Canonical public origin for the site, used for SEO metadata, sitemap,
 * robots and structured data. Override with NEXT_PUBLIC_SITE_URL in the
 * environment (no trailing slash).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.humnikah.com"
).replace(/\/+$/, "");

export const SITE_NAME = "HumNikah";

export const SITE_DESCRIPTION =
  "HumNikah is a trusted Muslim matrimonial platform helping individuals and families discover meaningful, verified and Shariah-compliant Nikah connections with dignity, privacy and purpose.";

/** Business contact + address, kept consistent across the site (NAP). */
export const BUSINESS = {
  phone: [FACTS.whatsapp.display, FACTS.call.display],
  email: FACTS.email,
  streetAddress: FACTS.address.street,
  locality: FACTS.address.locality,
  region: FACTS.address.region,
  postalCode: FACTS.address.postalCode,
  country: FACTS.address.country,
} as const;

// Only real, verifiable profiles belong here — they feed schema.org `sameAs`.
export const SOCIAL_LINKS = [
  "https://www.instagram.com/ammiabbaa",
  "https://www.facebook.com/share/1CR6mNY6hA/",
];
