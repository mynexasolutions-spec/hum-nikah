/**
 * Canonical public origin for the site, used for SEO metadata, sitemap,
 * robots and structured data. Override with NEXT_PUBLIC_SITE_URL in the
 * environment (no trailing slash).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://humnikah.com"
).replace(/\/+$/, "");

export const SITE_NAME = "HumNikah";

export const SITE_DESCRIPTION =
  "HumNikah is a trusted Muslim matrimonial platform helping individuals and families discover meaningful, verified and Shariah-compliant Nikah connections with dignity, privacy and purpose.";

/** Business contact + address, kept consistent across the site (NAP). */
export const BUSINESS = {
  phone: ["+91 90190 82205", "+91 98443 21312"],
  email: "connect@humnikah.com",
  streetAddress:
    "Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town",
  locality: "Bangalore",
  region: "Karnataka",
  postalCode: "560005",
  country: "IN",
} as const;

// Only real, verifiable profiles belong here — they feed schema.org `sameAs`.
export const SOCIAL_LINKS = [
  "https://instagram.com/HUMNIKAHOFFICIAL",
];
