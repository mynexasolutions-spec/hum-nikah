"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, LogOut, User } from "lucide-react";
import { HumNikahLogo } from "@/components/ui/Logo";

interface AdminHeaderProps {
  onLogout: () => void;
  adminEmail?: string;
}

export function AdminHeader({ onLogout, adminEmail = "Admin" }: AdminHeaderProps) {
  return (
    <header className="w-full bg-white border-b border-brand-border sticky top-0 z-30 shadow-sm flex items-stretch h-16">
      
      {/* Left Logo Section: Aligned with Sidebar Width (w-64 on desktop) */}
      <div className="w-auto md:w-64 md:shrink-0 px-4 sm:px-6 flex items-center justify-between md:border-r border-brand-border bg-white">
        <Link href="/admin" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-brand-emerald text-brand-gold flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform shrink-0">
            <HumNikahLogo size={22} outerColor="#B08A5F" innerColor="#B08A5F" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-brand-charcoal uppercase tracking-wider font-montserrat leading-none">
              HUMNIKAH
            </span>
            <span className="text-[11px] text-brand-secondary font-medium mt-1">
              Admin Panel
            </span>
          </div>
        </Link>

        {/* Mobile vertical divider */}
        <div className="md:hidden h-8 w-[1px] bg-brand-border ml-2" />
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
            <span>View Site</span>
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
                Administrator
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
  );
}
