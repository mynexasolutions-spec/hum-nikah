"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, Mail, Phone } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-cream transition-all shadow-sm">
      
      {/* Header Top Bar */}
      <div className="bg-[#1D184C] text-white py-1.5 sm:py-2 border-b border-white/10">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] sm:text-xs">
          
          {/* Left Side: Email & Phone */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Email */}
            <a
              href="mailto:info@humnikah.com"
              className="flex items-center gap-2 text-slate-200 hover:text-brand-gold transition-colors group"
              title="Email Us"
            >
              <div className="w-7 h-7 rounded-full bg-white text-[#1D184C] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-brand-gold group-hover:text-white transition-all">
                <Mail size={14} className="shrink-0" />
              </div>
              <span className="hidden sm:inline font-medium text-xs">info@humnikah.com</span>
            </a>

            {/* Separator for desktop */}
            <span className="hidden sm:inline text-white/30">|</span>

            {/* Phone */}
            <a
              href="tel:+919844321312"
              className="flex items-center gap-2 text-slate-200 hover:text-brand-gold transition-colors group"
              title="Call Us"
            >
              <div className="w-7 h-7 rounded-full bg-white text-[#1D184C] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-brand-gold group-hover:text-white transition-all">
                <Phone size={14} className="shrink-0" />
              </div>
              <span className="hidden sm:inline font-medium text-xs">+91 98443 21312</span>
            </a>
          </div>

          {/* Right Side: Social Media Icons (matching Footer) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="hidden md:inline text-[11px] text-brand-gold/90 font-medium mr-1 uppercase tracking-wider">
              Follow Us:
            </span>

            {/* 1. WhatsApp */}
            <a
              href="https://wa.me/919019082205"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white inline-flex items-center justify-center shrink-0 transition-all hover:scale-110 shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0 block" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* 2. Instagram */}
            <a
              href="https://instagram.com/HUMNIKAHOFFICIAL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#C58D5F] text-white inline-flex items-center justify-center shrink-0 transition-all hover:scale-110 border border-white/10 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0 block" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* 3. Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#C58D5F] text-white inline-flex items-center justify-center shrink-0 transition-all hover:scale-110 border border-white/10 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0 block" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 lg:h-22 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-1 group">
              <div className="flex-shrink-0">
                <img
                  src="/images/HN-logo.webp"
                  alt="HumNikah Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal leading-none transition-colors group-hover:text-brand-emerald -ml-2.5 sm:-ml-3">
                HumNikah
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Modern Pill & Indicator Menu */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/60 p-1.5 rounded-full border border-brand-border/60 shadow-sm">
            {navLinks.map((link) => {
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
          {navLinks.map((link) => {
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

          <div className="mt-4 pt-4 border-t border-brand-border flex flex-col gap-3">
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


