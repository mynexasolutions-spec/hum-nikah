"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, LogOut, User, Menu, X } from "lucide-react";
import { HumNikahLogo } from "@/components/ui/Logo";
import { navLinks } from "./AdminNavigation";

interface AdminHeaderProps {
  onLogout: () => void;
  adminEmail?: string;
}

export function AdminHeader({ onLogout, adminEmail = "Admin" }: AdminHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-brand-border sticky top-0 z-30 shadow-sm flex items-stretch h-16">
        
        {/* Left Logo Section: Aligned with Sidebar Width (w-64 on desktop) */}
        <div className="w-auto md:w-64 md:shrink-0 px-4 sm:px-6 flex items-center gap-3 md:justify-between md:border-r border-brand-border bg-white">
          
          {/* Mobile Menu Icon (Left of Logo) */}
          <button 
            className="md:hidden text-brand-charcoal hover:text-brand-emerald focus:outline-none transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>

          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-emerald text-brand-gold flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform shrink-0">
              <HumNikahLogo size={22} outerColor="#C58D5F" innerColor="#C58D5F" />
            </div>
            {/* Hidden text on mobile as requested */}
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-bold text-brand-charcoal uppercase tracking-wider font-montserrat leading-none">
                HUMNIKAH
              </span>
              <span className="text-[11px] text-brand-secondary font-medium mt-1">
                Admin Panel
              </span>
            </div>
          </Link>
        </div>

        {/* Right Header Section: Page Title, View Site & Profile */}
        <div className="flex-1 px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Title & View Site Link */}
          <div className="flex items-center gap-3">
            <h1 className="text-base font-bold font-playfair text-brand-charcoal hidden sm:block">
              Admin Dashboard
            </h1>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-white text-xs font-semibold transition-all shrink-0"
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">View Site</span>
            </Link>
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* User Info Badge */}
            <div className="flex items-center gap-2.5 bg-brand-cream/80 px-3 py-1.5 rounded-xl border border-brand-border/60">
              <div className="w-8 h-8 rounded-full bg-brand-light-cream border border-brand-border text-brand-emerald flex items-center justify-center shrink-0">
                <User size={16} />
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-bold text-brand-charcoal truncate max-w-[160px]">
                  {adminEmail}
                </span>
                <span className="text-[10px] text-brand-secondary font-medium">
                  Admin
                </span>
              </div>
            </div>

            {/* Logout Button */}
            <form action={onLogout}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </form>

          </div>

        </div>
      </header>

      {/* Mobile Sidebar Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={toggleMobileMenu}
          />
          
          {/* Sidebar Drawer */}
          <aside className="relative w-64 bg-brand-emerald text-white h-full shadow-2xl flex flex-col transform transition-transform animate-in slide-in-from-left-full duration-300">
            <div className="flex items-center justify-between p-4 border-b border-brand-emerald-hover h-16">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white text-brand-gold flex items-center justify-center shadow-sm shrink-0">
                  <HumNikahLogo size={18} outerColor="#C58D5F" innerColor="#C58D5F" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider font-montserrat leading-none">
                  HUMNIKAH
                </span>
              </div>
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-brand-gold p-1 focus:outline-none transition-colors"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
              {navLinks.map((link) => {
                const isActive = link.href === "/admin" 
                  ? pathname === "/admin"
                  : pathname.startsWith(link.href);
                  
                const Icon = link.icon;
                
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium group ${
                      isActive 
                        ? 'bg-[#08423b] shadow-inner text-white' 
                        : 'hover:bg-brand-emerald-hover text-slate-100 hover:text-white'
                    }`}
                  >
                    <Icon size={18} className={`transition-colors ${isActive ? "text-brand-gold" : "text-brand-gold/70 group-hover:text-brand-gold"}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
