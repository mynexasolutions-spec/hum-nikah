import { FACTS } from "@/lib/siteFacts";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMMUNITY_PAGES } from "@/data/communities";
import { cityAnchor } from "@/data/seo-meta";
import { liveZones } from "@/data/bengaluru-zones";
import { OFFICE_LOCATIONS } from "@/data/locationsData";

export function Footer() {
  return (
    <footer className="bg-brand-deep-green text-white pt-16 pb-8 border-t-[6px] border-brand-gold">
      <div className="max-w-wrap mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Logo (Header Matching Logo) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 group inline-flex">
              <div className="flex-shrink-0 relative">
                <Image
                  src="/images/hum-nikah-new-logo.png"
                  alt="HumNikah logo"
                  width={84}
                  height={84}
                  className="w-[68px] h-[68px] sm:w-[84px] sm:h-[84px] object-contain"
                />
                {/* Islamic Crescent & Star Element */}
                <div 
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#651514] to-[#1D184C] text-[#F3B979] border border-[#F3B979]/80 flex items-center justify-center shadow-md shadow-black/30"
                  title="Islamic Matrimonial Service"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.3 0 4.41-.78 6.1-2.09-4.8-.46-8.6-4.51-8.6-9.41 0-4.9 3.8-8.95 8.6-9.41C16.41 2.78 14.3 2 12 2zm6.5 6.5l.88 1.8 1.98.29-1.43 1.4.34 1.98-1.77-.93-1.77.93.34-1.98-1.43-1.4 1.98-.29.88-1.8z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline tracking-tight leading-none font-outfit">
                  <span className="text-[26px] sm:text-3xl font-black text-white tracking-tight transition-colors group-hover:text-brand-gold">
                    Hum
                  </span>
                  <span className="text-[26px] sm:text-3xl font-black bg-gradient-to-r from-brand-gold via-[#F3B979] to-brand-gold bg-clip-text text-transparent tracking-tight transition-all duration-300">
                    Nikah
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span>
                  <span className="text-[11px] sm:text-[11.5px] font-bold font-outfit text-brand-gold uppercase tracking-[0.2em] leading-none transition-colors">
                    Bringing Hearts Together
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              A trusted Islamic platform helping individuals and families discover meaningful Nikah connections with dignity, privacy, and purpose.
            </p>

            {/* Social Share & Follow Column */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-4">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {/* 1. WhatsApp */}
                <a
                  href="/whatsapp?src=footer"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>

                {/* 2. Call */}
                <a
                  href={FACTS.call.tel}
                  aria-label="Call Us"
                  className="w-10 h-10 rounded-full bg-[#1D184C] hover:bg-[#C58D5F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 shadow-sm cursor-pointer group"
                >
                  <Phone size={18} className="text-brand-gold group-hover:text-white transition-colors" />
                </a>

                {/* 3. Instagram */}
                <a
                  href="https://www.instagram.com/ammiabbaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C58D5F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* 4. Facebook */}
                <a
                  href="https://www.facebook.com/share/1CR6mNY6hA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C58D5F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-playfair font-semibold mb-5 text-brand-beige relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-[2px] after:bg-brand-gold">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/muslim-matrimony-india" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Muslim Matrimony in India
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Nikah Blog
                </Link>
              </li>
              {COMMUNITY_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/muslim-matrimony/${p.slug}`} className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                    {p.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/biodata-maker" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Free Biodata Maker (Online)
                </Link>
              </li>
              <li>
                <Link href="/blog/muslim-biodata-format-for-marriage" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Free Biodata Format
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-verify-a-muslim-rishta" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  How to Verify a Rishta
                </Link>
              </li>
              <li>
                <Link href="/how-we-verify" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  How We Verify Profiles
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Fees &amp; Payment
                </Link>
              </li>
              <li>
                <Link href="/submit-biodata" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Submit Biodata
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal (With FAQ redirect to Homepage) */}
          <div>
            <h3 className="text-base font-playfair font-semibold mb-5 text-brand-beige relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-[2px] after:bg-brand-gold">
              Legal &amp; Support
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Bangalore areas (live zone pages only) */}
          <div>
            <h3 className="text-base font-playfair font-semibold mb-5 text-brand-beige relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-[2px] after:bg-brand-gold">
              Bangalore Areas
            </h3>
            <ul className="space-y-2.5">
              {liveZones.map((z) => (
                <li key={z.slug}>
                  <Link href={`/muslim-matrimony/bengaluru/${z.slug}`} className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                    {z.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/muslim-matrimony/karnataka" className="text-gray-300 hover:text-brand-gold transition-colors text-xs sm:text-sm font-light">
                  Karnataka
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base font-playfair font-semibold mb-5 text-brand-beige relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-[2px] after:bg-brand-gold">
              Contact Support
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm sm:text-base font-normal leading-relaxed">
                  {FACTS.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <a href={FACTS.whatsapp.tel} className="text-gray-200 text-sm sm:text-base font-medium hover:text-brand-gold transition-colors tracking-wide">
                  {FACTS.whatsapp.display}
                </a>
              </li>
                            <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <a href={FACTS.call.tel} className="text-gray-200 text-sm sm:text-base font-medium hover:text-brand-gold transition-colors tracking-wide">
                  {FACTS.call.display}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <a href="mailto:connect@humnikah.com" className="text-gray-200 text-sm sm:text-base font-medium hover:text-brand-gold transition-colors">
                  connect@humnikah.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Our Locations Row (Multiple Locations Bar) */}
        <div className="border-t border-white/10 pt-8 pb-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-sm font-playfair font-bold text-brand-gold uppercase tracking-wider flex items-center gap-2">
                <MapPin size={16} /> Our Locations &amp; Regional Hubs
              </h4>
              <p className="text-gray-300 text-xs font-light mt-0.5">
                Office in Bengaluru. Serving families across South &amp; West India
              </p>
            </div>
          </div>

          {/* Locations Grid Pill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            {OFFICE_LOCATIONS.map((loc) => (
              <div 
                key={loc.id} 
                className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-brand-gold/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-brand-gold font-bold mb-1 flex items-center justify-between">
                    <span>{loc.state}</span>
                    {loc.isHeadquarters && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-gold/20 text-brand-gold font-semibold uppercase">HQ</span>
                    )}
                  </div>
                  <div className="text-gray-300 font-light text-[11px] leading-relaxed">
                    {loc.hasOffice
                      ? loc.address
                      : `Serving families in ${loc.city} via phone & WhatsApp`}
                  </div>
                  <Link
                    href={`/muslim-matrimony/${loc.city.toLowerCase()}`}
                    className="mt-1.5 inline-block text-brand-gold/95 hover:text-white hover:underline text-[11px] font-medium"
                  >
                    {cityAnchor(loc.city.toLowerCase(), loc.city)}
                  </Link>
                </div>
                {loc.phone && (
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col gap-1.5 text-[11px]">
                    <a 
                      href={`tel:${loc.phone.replace(/\s/g, "")}`} 
                      className="inline-flex items-center gap-1.5 text-brand-gold/95 hover:text-white hover:underline transition-colors font-medium"
                    >
                      <Phone size={12} className="text-brand-gold shrink-0" />
                      <span className="tracking-wide">{loc.phone}</span>
                    </a>
                    {loc.phone2 && (
                      <a 
                        href={`tel:${loc.phone2.replace(/\s/g, "")}`} 
                        className="inline-flex items-center gap-1.5 text-brand-gold/95 hover:text-white hover:underline transition-colors font-medium"
                      >
                        <Phone size={12} className="text-brand-gold shrink-0" />
                        <span className="tracking-wide">{loc.phone2}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/80 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left font-light">
            &copy; {new Date().getFullYear()} HumNikah. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-brand-gold/40 hidden sm:inline">&bull;</span>
            <Link
              href="/contact"
              className="text-[16px] sm:text-[15.5px] font-semibold text-brand-gold hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
