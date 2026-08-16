"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-cream transition-all">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1 sm:gap-1 group">
              <div className="flex-shrink-0">
                <img
                  src="/images/HN-logo.webp"
                  alt="HumNikah Logo"
                  className="w-20 h-20 sm:w-20 sm:h-20 lg:w-20 lg:h-20 object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl lg:text-2xl font-playfair font-bold text-brand-charcoal leading-none transition-colors group-hover:text-brand-emerald -ml-3">
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
              className="text-brand-charcoal hover:text-brand-emerald p-2 rounded-xl bg-white border border-brand-border shadow-sm focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-border shadow-xl px-4 py-6 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
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


