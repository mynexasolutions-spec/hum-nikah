"use client";

import { FACTS } from "@/lib/siteFacts";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  User,
  Phone,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { CITY_CONTENT } from "@/data/cityContent";
import { COMMUNITY_PAGES } from "@/data/communities";

const aboutSubLinks = [
  {
    name: "Our Mission & Values",
    href: "/about#our-mission",
    icon: Sparkles,
  },
  {
    name: "Why Choose HumNikah",
    href: "/about#why-choose-us",
    icon: ShieldCheck,
  },
  {
    name: "Our Office Locations",
    href: "/about#locations",
    icon: MapPin,
  },
];

type NavSubLink = { name: string; href: string; icon: typeof MapPin };

const navDropdowns: Record<string, { overview: string; links: NavSubLink[] }> = {
  "About Us": { overview: "About Us Overview", links: aboutSubLinks },
  "Muslim Matrimony": {
    overview: "Muslim Matrimony in India",
    links: CITY_CONTENT.map((c) => ({
      name: `Muslim Matrimony in ${c.city}`,
      href: `/muslim-matrimony/${c.slug}`,
      icon: MapPin,
    })),
  },
};

navDropdowns["Communities"] = {
  overview: "All Communities",
  links: COMMUNITY_PAGES.map((p) => ({
    name: p.navLabel,
    href: `/muslim-matrimony/${p.slug}`,
    icon: MapPin,
  })),
};

const activePrefix: Record<string, string> = {
  "About Us": "/about",
  "Muslim Matrimony": "/muslim-matrimony-india",
  Communities: "#",
};

const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Muslim Matrimony", href: "/muslim-matrimony-india", hasDropdown: true },
  { name: "Communities", href: "/muslim-matrimony-india#communities", hasDropdown: true },
  { name: "Biodata Maker", href: "/biodata-maker" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border/70 bg-white/85 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_25px_rgba(29,24,76,0.04)]">
      {/* Top subtle golden luxury sheen line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 lg:h-26 items-center justify-between">
          
          {/* Logo & Brand Typography */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer select-none">
              <div className="flex-shrink-0 relative">
                <Image
                  src="/images/hum-nikah-new-logo.png"
                  alt="HumNikah logo"
                  width={68}
                  height={68}
                  priority
                  className="w-14 h-14 sm:w-[60px] sm:h-[60px] lg:w-[68px] lg:h-[68px] object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 ease-out"
                />
                {/* Islamic Crescent & Star Element */}
                <div 
                  className="absolute -top-1 -right-1 w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-gradient-to-br from-[#651514] via-[#1D184C] to-[#1D184C] text-[#F3B979] border border-[#F3B979]/80 flex items-center justify-center shadow-md shadow-black/20"
                  title="Islamic Matrimonial Service"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.3 0 4.41-.78 6.1-2.09-4.8-.46-8.6-4.51-8.6-9.41 0-4.9 3.8-8.95 8.6-9.41C16.41 2.78 14.3 2 12 2zm6.5 6.5l.88 1.8 1.98.29-1.43 1.4.34 1.98-1.77-.93-1.77.93.34-1.98-1.43-1.4 1.98-.29.88-1.8z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline tracking-tight leading-none font-outfit">
                  <span className="text-[27px] sm:text-[33px] lg:text-[2.45rem] xl:text-[2.2rem] font-black text-brand-charcoal tracking-tight transition-colors group-hover:text-brand-emerald">
                    Hum
                  </span>
                  <span className="text-[27px] sm:text-[33px] lg:text-[2.45rem] xl:text-[2.2rem] font-black bg-gradient-to-r from-brand-gold via-[#D89F6F] to-brand-gold bg-clip-text text-transparent tracking-tight transition-all duration-300 group-hover:brightness-110">
                    Nikah
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span>
                  <span className="text-[11px] sm:text-[12px] lg:text-[12.5px] xl:text-[10px] font-bold text-brand-emerald/90 uppercase tracking-[0.2em] xl:tracking-[0.12em] leading-none transition-colors group-hover:text-brand-gold">
                    Bringing Hearts Together
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Modern Glass Pill Menu */}
          <nav className="hidden xl:flex flex-nowrap items-center gap-0.5 xl:gap-1 bg-[#FAF6F0]/90 backdrop-blur-md p-1 xl:p-1.5 rounded-full border border-brand-border/80 shadow-[0_2px_10px_rgba(29,24,76,0.03)]">
            {mainNavLinks.map((link) => {
              if (link.hasDropdown) {
                const isAboutActive = pathname.startsWith(activePrefix[link.name] ?? link.href);
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`text-[14px] font-semibold font-outfit whitespace-nowrap px-3 py-2 rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                        isAboutActive
                          ? "bg-gradient-to-r from-brand-emerald to-[#2A2365] text-white shadow-md shadow-brand-emerald/25"
                          : "text-brand-charcoal hover:text-brand-emerald hover:bg-white/90"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        className={`shrink-0 transition-transform duration-200 ${
                          openDropdown === link.name ? "rotate-180 text-brand-gold" : ""
                        }`}
                      />
                    </Link>

                    {/* Modern Luxury Dropdown Menu (Clean Icon + Title) */}
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 pt-2 z-50 w-64 sm:w-72 animate-in fade-in zoom-in-95 duration-200">
                        <div className="relative bg-gradient-to-b from-[#1D184C] via-[#1A1544] to-[#120E33] backdrop-blur-2xl rounded-2xl p-2 shadow-[0_20px_50px_rgba(20,16,56,0.35)] border border-brand-gold/40 ring-1 ring-white/10 overflow-hidden">
                          {/* Subtle top golden luxury sheen line */}
                          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent pointer-events-none" />

                          <div className="py-1 space-y-1">
                            {navDropdowns[link.name].links.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all group cursor-pointer"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-[#1D184C] flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs">
                                    <IconComponent size={16} />
                                  </div>
                                  <span className="text-xs sm:text-[13.5px] font-semibold font-outfit tracking-wide group-hover:translate-x-0.5 transition-transform">
                                    {sub.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href !== "/" && link.href !== "/#explore-matches" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] font-semibold font-outfit whitespace-nowrap px-3 py-2 rounded-full transition-all duration-200 relative flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-emerald to-[#2A2365] text-white shadow-md shadow-brand-emerald/25"
                      : "text-brand-charcoal hover:text-brand-emerald hover:bg-white/90"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA: Submit Biodata ("Biodata Maker" is already in the menu) */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link 
              href="/submit-biodata" 
              className="flex items-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-emerald via-[#2A2365] to-brand-emerald hover:from-[#2A2365] hover:via-[#3B3280] hover:to-[#1D184C] text-white border border-brand-gold/30 hover:border-brand-gold/60 shadow-sm hover:shadow-md hover:shadow-brand-emerald/25 transition-all duration-300 active:scale-95 text-[14px] font-semibold font-outfit px-4 xl:px-5 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <User size={17} className="text-brand-gold" />
              <span>Submit Biodata</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={toggleMobileMenu}
              className="text-brand-charcoal hover:text-brand-emerald p-2 rounded-xl bg-white border border-brand-border shadow-xs focus:outline-none transition-all active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} className="text-brand-emerald" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-brand-border/80 shadow-2xl px-4 sm:px-6 py-5 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          {mainNavLinks.map((link) => {
            if (link.hasDropdown) {
              const isAboutActive = pathname.startsWith(activePrefix[link.name] ?? link.href);
              return (
                <div key={link.name} className="flex flex-col">
                  <div
                    onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold font-outfit transition-all cursor-pointer ${
                      isAboutActive
                        ? "bg-gradient-to-r from-brand-emerald to-[#2A2365] text-white shadow-sm"
                        : "text-brand-charcoal hover:bg-brand-cream/80 hover:text-brand-emerald"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileExpanded === link.name ? "rotate-180 text-brand-gold" : ""
                      }`}
                    />
                  </div>

                  {/* Mobile Sub-Links */}
                  {mobileExpanded === link.name && (
                    <div className="my-2 bg-gradient-to-b from-[#1D184C] to-[#141038] text-white rounded-2xl p-2.5 border border-brand-gold/35 shadow-lg space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs font-bold font-outfit text-brand-gold uppercase tracking-wider hover:underline"
                      >
                        {navDropdowns[link.name].overview} &rarr;
                      </Link>
                      {navDropdowns[link.name].links.map((sub) => {
                        const IconComponent = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold font-outfit text-white/90 hover:bg-white/10 hover:text-brand-gold transition-colors"
                          >
                            <div className="w-6 h-6 rounded-md bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                              <IconComponent size={13} />
                            </div>
                            <span>{sub.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              (link.href === "/" && pathname === "/") ||
              (link.href !== "/" && link.href !== "/#explore-matches" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold font-outfit transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-brand-emerald to-[#2A2365] text-white shadow-sm"
                    : "text-brand-charcoal hover:bg-brand-cream/80 hover:text-brand-emerald"
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}

          <div className="mt-3 pt-3 border-t border-brand-border/80 flex flex-col gap-2.5">
            {/* Phone Quick Call */}
            <a
              href={FACTS.call.tel}
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-brand-cream/70 border border-brand-border text-brand-charcoal hover:bg-[#1D184C] hover:text-white font-semibold font-outfit text-sm transition-all shadow-2xs group"
            >
              <div className="w-7 h-7 rounded-full bg-brand-emerald text-white flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                <Phone size={14} />
              </div>
              <span className="tracking-wide">{FACTS.call.display}</span>
            </a>

            <a
              href={FACTS.whatsapp.tel}
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-brand-cream/70 border border-brand-border text-brand-charcoal hover:bg-[#1D184C] hover:text-white font-semibold font-outfit text-sm transition-all shadow-2xs group"
            >
              <div className="w-7 h-7 rounded-full bg-brand-emerald text-white flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                <Phone size={14} />
              </div>
              <span className="tracking-wide">{FACTS.whatsapp.display}</span>
            </a>


            <Link 
              href="/submit-biodata" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center gap-2 justify-center rounded-xl bg-gradient-to-r from-brand-emerald via-[#2A2365] to-brand-emerald hover:from-[#2A2365] hover:via-[#3B3280] hover:to-[#1D184C] text-white py-3 font-semibold font-outfit transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <User size={18} className="text-brand-gold" />
              <span>Submit Biodata</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


