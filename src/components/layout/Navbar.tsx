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
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-cream transition-all shadow-sm">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 lg:h-22 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
              <div className="flex-shrink-0">
                <img
                  src="/images/HN-logo.webp"
                  alt="HumNikah Logo"
                  className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-contain drop-shadow-xs"
                />
              </div>
              <div className="flex flex-col justify-center -ml-2 sm:-ml-2.5">
                <span className="text-2xl sm:text-3xl lg:text-[2.1rem] font-playfair font-extrabold text-brand-charcoal leading-none transition-colors group-hover:text-brand-emerald tracking-tight">
                  HumNikah
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[11.5px] font-bold text-brand-emerald uppercase tracking-[0.16em] leading-none mt-1 sm:mt-1.5 transition-colors group-hover:text-brand-emerald-hover whitespace-nowrap">
                  Love with Barakah
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Modern Pill & Indicator Menu */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/60 p-1.5 rounded-full border border-brand-border/60 shadow-sm">
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
                      className={`text-[14px] font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                        isAboutActive
                          ? "bg-brand-emerald text-white font-semibold shadow-md shadow-brand-emerald/20"
                          : "text-brand-charcoal hover:text-brand-emerald hover:bg-brand-cream/80"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isAboutDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Modern Luxury Dropdown Menu (Clean Icon + Title) */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50 w-64 sm:w-72 animate-in fade-in zoom-in-95 duration-200">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-1.5 shadow-2xl border border-brand-gold/30 ring-1 ring-black/5 overflow-hidden">
                          <div className="py-0.5 space-y-0.5">
                            {aboutSubLinks.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setIsAboutDropdownOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-cream text-brand-charcoal hover:text-brand-emerald transition-all group cursor-pointer"
                                >
                                  <div className="w-7 h-7 rounded-lg bg-brand-gold/15 text-brand-gold group-hover:bg-brand-emerald group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <IconComponent size={15} />
                                  </div>
                                  <span className="text-xs sm:text-[13px] font-semibold tracking-wide">
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
                  className={`text-[14px] font-medium px-4 py-2 rounded-full transition-all duration-200 relative flex items-center gap-1.5 ${
                    isActive
                      ? "bg-brand-emerald text-white font-semibold shadow-md shadow-brand-emerald/20"
                      : "text-brand-charcoal hover:text-brand-emerald hover:bg-brand-cream/80"
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
              className="flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white border-none shadow-sm hover:shadow-md transition-all active:scale-95 text-sm font-medium px-5 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <User size={16} />
              Submit Biodata
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleMobileMenu}
              className="text-brand-charcoal hover:text-brand-emerald p-1.5 sm:p-2 rounded-xl bg-white border border-brand-border shadow-sm focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} className="sm:w-5 sm:h-5" /> : <Menu size={20} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-brand-border shadow-xl px-4 py-6 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          {mainNavLinks.map((link) => {
            if (link.hasDropdown) {
              const isAboutActive = pathname.startsWith("/about");
              return (
                <div key={link.name} className="flex flex-col">
                  <div
                    onClick={() => setIsMobileAboutExpanded(!isMobileAboutExpanded)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer ${
                      isAboutActive
                        ? "bg-brand-emerald text-white font-semibold shadow-sm"
                        : "text-brand-charcoal hover:bg-brand-cream hover:text-brand-emerald"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isMobileAboutExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Mobile Sub-Links */}
                  {isMobileAboutExpanded && (
                    <div className="ml-3 pl-3 my-1.5 border-l-2 border-brand-gold/40 space-y-1.5 animate-in fade-in duration-200">
                      <Link
                        href="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs font-bold text-brand-emerald uppercase tracking-wider"
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
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-brand-charcoal hover:bg-brand-cream hover:text-brand-emerald transition-colors"
                          >
                            <IconComponent size={14} className="text-brand-gold shrink-0" />
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
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-brand-emerald text-white font-semibold shadow-sm"
                    : "text-brand-charcoal hover:bg-brand-cream hover:text-brand-emerald"
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}

          <div className="mt-4 pt-4 border-t border-brand-border flex flex-col gap-2.5">
            {/* Phone Quick Call */}
            <a
              href="tel:+919019082205"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-brand-cream/80 border border-brand-border text-brand-charcoal hover:bg-[#1D184C] hover:text-white font-semibold text-sm transition-all shadow-2xs group"
            >
              <div className="w-7 h-7 rounded-full bg-brand-emerald text-white flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                <Phone size={14} />
              </div>
              <span className="tracking-wide">+91 90190 82205</span>
            </a>

            <Link 
              href="/submit-biodata" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center gap-2 justify-center rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white py-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <User size={18} />
              Submit Biodata
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


