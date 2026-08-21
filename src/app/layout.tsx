import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Outfit, Cinzel, Amiri } from "next/font/google";
import "./globals.css";
import { HeaderFooterWrapper } from "@/components/layout/HeaderFooterWrapper";

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
  title: "HumNikah | Meaningful Matches, Begin Your Nikah",
  description: "HumNikah is a trusted matrimonial platform helping individuals and families discover meaningful Nikah connections with dignity, privacy and purpose.",
  icons: {
    icon: "/images/favicon-rounded.png",
  },
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
        <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
      </body>
    </html>
  );
}
