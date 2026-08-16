"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Newspaper,
  MessageSquare,
} from "lucide-react";

export const navLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Leads", href: "/admin/leads", icon: Users },
  { name: "Biodata", href: "/admin/biodata", icon: FileText },
  { name: "Blogs", href: "/admin/blogs", icon: Newspaper },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-brand-emerald text-white hidden md:flex flex-col border-r border-brand-emerald-hover shrink-0 overflow-y-auto custom-scrollbar">
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navLinks.map((link) => {
          // Dashboard should only be active if pathname is exactly /admin
          const isActive = link.href === "/admin" 
            ? pathname === "/admin"
            : pathname.startsWith(link.href);
            
          const Icon = link.icon;
          
          return (
            <Link 
              key={link.name} 
              href={link.href} 
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
  );
}

export function AdminMobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-4 border-b border-brand-border hide-scrollbar">
      {navLinks.map((link) => {
        const isActive = link.href === "/admin" 
            ? pathname === "/admin"
            : pathname.startsWith(link.href);

        return (
          <Link 
            key={link.name} 
            href={link.href} 
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center gap-2 ${
              isActive 
                ? 'bg-[#062E29] text-white shadow-md border-transparent' 
                : 'bg-white border border-slate-200 text-brand-charcoal hover:bg-slate-50'
            }`}
          >
            <link.icon size={14} className={isActive ? "text-brand-gold" : "text-brand-charcoal"} />
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
