import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Outfit, Cinzel, Amiri } from "next/font/google";
import "./globals.css";
import { HeaderFooterWrapper } from "@/components/layout/HeaderFooterWrapper";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  BUSINESS,
  SOCIAL_LINKS,
} from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HumNikah | Meaningful Matches, Begin Your Nikah",
    template: "%s | HumNikah",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  keywords: [
    "HumNikah",
    "Hum Nikah",
    "Muslim matrimony",
    "Muslim matrimonial",
    "Nikah matchmaking",
    "Muslim marriage bureau",
    "Shariah compliant matrimony",
    "Muslim brides and grooms",
  ],
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
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Hum Nikah",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/icon.png`,
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
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${outfit.variable} ${cinzel.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-montserrat text-brand-charcoal bg-brand-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
      </body>
    </html>
  );
}
