"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
import { Button } from "../ui/Button";

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

const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
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
            <Link href="/" className="flex items-center gap-1 sm:gap-2 group cursor-pointer select-none">
              <div className="flex-shrink-0 relative">
                <img
                  src="/images/HN-logo.webp"
                  alt="HumNikah Logo"
                  className="w-[80px] h-[80px] sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px] object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
              <div className="flex flex-col justify-center -ml-1 sm:-ml-1.5">
                <div className="flex items-baseline tracking-tight leading-none font-outfit">
                  <span className="text-[27px] sm:text-[33px] lg:text-[2.45rem] font-black text-brand-charcoal tracking-tight transition-colors group-hover:text-brand-emerald">
                    Hum
                  </span>
                  <span className="text-[27px] sm:text-[33px] lg:text-[2.45rem] font-black bg-gradient-to-r from-brand-gold via-[#D89F6F] to-brand-gold bg-clip-text text-transparent tracking-tight transition-all duration-300 group-hover:brightness-110">
                    Nikah
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span>
                  <span className="text-[11px] sm:text-[12px] lg:text-[12.5px] font-bold text-brand-emerald/90 uppercase tracking-[0.2em] leading-none transition-colors group-hover:text-brand-gold">
                    Love with Barakah
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Modern Glass Pill Menu */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FAF6F0]/90 backdrop-blur-md p-1.5 rounded-full border border-brand-border/80 shadow-[0_2px_10px_rgba(29,24,76,0.03)]">
            {mainNavLinks.map((link) => {
              if (link.hasDropdown) {
                const isAboutActive = pathname.startsWith("/about");
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsAboutDropdownOpen(false)}
                      className={`text-[14.5px] xl:text-[15.5px] font-semibold font-outfit px-3.5 xl:px-4.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                        isAboutActive
                          ? "bg-gradient-to-r from-brand-emerald to-[#2A2365] text-white shadow-md shadow-brand-emerald/25"
                          : "text-brand-charcoal hover:text-brand-emerald hover:bg-white/90"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          isAboutDropdownOpen ? "rotate-180 text-brand-gold" : ""
                        }`}
                      />
                    </Link>

                    {/* Modern Luxury Dropdown Menu (Clean Icon + Title) */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50 w-64 sm:w-72 animate-in fade-in zoom-in-95 duration-200">
                        <div className="relative bg-gradient-to-b from-[#1D184C] via-[#1A1544] to-[#120E33] backdrop-blur-2xl rounded-2xl p-2 shadow-[0_20px_50px_rgba(20,16,56,0.35)] border border-brand-gold/40 ring-1 ring-white/10 overflow-hidden">
                          {/* Subtle top golden luxury sheen line */}
                          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent pointer-events-none" />

                          <div className="py-1 space-y-1">
                            {aboutSubLinks.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setIsAboutDropdownOpen(false)}
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
                  className={`text-[14.5px] xl:text-[15.5px] font-semibold font-outfit px-3.5 xl:px-4.5 py-2 rounded-full transition-all duration-200 relative flex items-center gap-1.5 ${
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

          {/* Desktop CTAs: Submit Biodata */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/submit-biodata" 
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-emerald via-[#2A2365] to-brand-emerald hover:from-[#2A2365] hover:via-[#3B3280] hover:to-[#1D184C] text-white border border-brand-gold/30 hover:border-brand-gold/60 shadow-sm hover:shadow-md hover:shadow-brand-emerald/25 transition-all duration-300 active:scale-95 text-[14.5px] xl:text-[15.5px] font-semibold font-outfit px-5 xl:px-6 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <User size={17} className="text-brand-gold" />
              <span>Submit Biodata</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-brand-border/80 shadow-2xl px-4 sm:px-6 py-5 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          {mainNavLinks.map((link) => {
            if (link.hasDropdown) {
              const isAboutActive = pathname.startsWith("/about");
              return (
                <div key={link.name} className="flex flex-col">
                  <div
                    onClick={() => setIsMobileAboutExpanded(!isMobileAboutExpanded)}
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
                        isMobileAboutExpanded ? "rotate-180 text-brand-gold" : ""
                      }`}
                    />
                  </div>

                  {/* Mobile Sub-Links */}
                  {isMobileAboutExpanded && (
                    <div className="my-2 bg-gradient-to-b from-[#1D184C] to-[#141038] text-white rounded-2xl p-2.5 border border-brand-gold/35 shadow-lg space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Link
                        href="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs font-bold font-outfit text-brand-gold uppercase tracking-wider hover:underline"
                      >
                        About Us Overview &rarr;
                      </Link>
                      {aboutSubLinks.map((sub) => {
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
              href="tel:+919844321312"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-brand-cream/70 border border-brand-border text-brand-charcoal hover:bg-[#1D184C] hover:text-white font-semibold font-outfit text-sm transition-all shadow-2xs group"
            >
              <div className="w-7 h-7 rounded-full bg-brand-emerald text-white flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                <Phone size={14} />
              </div>
              <span className="tracking-wide">+91 98443 21312</span>
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


