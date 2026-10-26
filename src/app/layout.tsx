import { FACTS } from "@/lib/siteFacts";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Outfit, Amiri } from "next/font/google";
import "./globals.css";
import { HeaderFooterWrapper } from "@/components/layout/HeaderFooterWrapper";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  BUSINESS,
  SOCIAL_LINKS,
} from "@/lib/site";
import Script from "next/script";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { OFFICE_LOCATIONS } from "@/data/locationsData";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HumNikah | Meaningful Matches, Begin Your Nikah",
    template: "%s | HumNikah",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "HumNikah | Meaningful Matches, Begin Your Nikah",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "HumNikah | Meaningful Matches, Begin Your Nikah",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "./",
    languages: {
      "en-IN": "./",
      "x-default": "./",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Hum Nikah", "HumNikah.com"],
      url: SITE_URL,
      logo: `${SITE_URL}/images/hum-nikah-new-logo.png`,
      image: `${SITE_URL}/images/hum-nikah-new-logo.png`,
      description: SITE_DESCRIPTION,
      email: BUSINESS.email,
      telephone: `+${BUSINESS.phone[0].replace(/[^0-9]/g, "")}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.locality,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      areaServed: "IN",
      sameAs: SOCIAL_LINKS,
    },
    ...OFFICE_LOCATIONS.filter((office) => office.hasOffice).map((office) => ({
      "@type": ["LocalBusiness", "ProfessionalService"],
      // Must match the Bengaluru page's own schema exactly (same @id, name and
      // phone) so Google reads one business record, not two that disagree.
      "@id":
        office.city === "Bengaluru"
          ? `${SITE_URL}/#bengaluru-office`
          : `${SITE_URL}/#office-${office.city.toLowerCase()}`,
      name: office.city === "Bengaluru" ? "HumNikah" : `HumNikah ${office.city}`,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/muslim-matrimony/${office.city.toLowerCase()}`,
      telephone:
        office.city === "Bengaluru"
          ? FACTS.call.e164
          : office.phone
            ? `+${office.phone.replace(/[^0-9]/g, "")}`
            : undefined,
      email: office.email ?? BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.address,
        addressLocality: office.city,
        addressRegion: office.state,
        addressCountry: "IN",
      },
    })),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${montserrat.variable} ${outfit.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-montserrat text-brand-charcoal bg-brand-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <AnalyticsEvents />
        <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
      </body>
    </html>
  );
}
