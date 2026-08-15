import React from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Newspaper,
} from "lucide-react";
import { logout } from "./actions";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  // If user is not authenticated, render children directly without admin header/sidebar (e.g. login page)
  if (!session) {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    "use server";
    await logout();
    redirect("/admin/login");
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-montserrat">
      {/* Top Admin Header Bar */}
      <AdminHeader onLogout={handleLogout} />

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-brand-emerald text-white hidden md:flex flex-col border-r border-brand-emerald-hover shrink-0 min-h-[calc(100vh-65px)]">
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand-emerald-hover transition-colors text-sm font-medium">
              <LayoutDashboard size={18} className="text-brand-gold" />
              <span>Dashboard</span>
            </Link>
            <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand-emerald-hover transition-colors text-sm font-medium">
              <Users size={18} className="text-brand-gold" />
              <span>Leads</span>
            </Link>
            <Link href="/admin/biodata" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand-emerald-hover transition-colors text-sm font-medium">
              <FileText size={18} className="text-brand-gold" />
              <span>Biodata</span>
            </Link>
            <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand-emerald-hover transition-colors text-sm font-medium">
              <Newspaper size={18} className="text-brand-gold" />
              <span>Blogs</span>
            </Link>
            <Link href="/admin/gallery" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand-emerald-hover transition-colors text-sm font-medium">
              <ImageIcon size={18} className="text-brand-gold" />
              <span>Gallery</span>
            </Link>
          </nav>
        </aside>

        {/* Main Dashboard Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Mobile Quick Navigation Bar */}
          <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-4 border-b border-brand-border">
            <Link href="/admin" className="px-3 py-1.5 rounded-lg bg-brand-emerald text-white text-xs font-semibold shrink-0">
              Dashboard
            </Link>
            <Link href="/admin/leads" className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-brand-charcoal text-xs font-semibold shrink-0">
              Leads
            </Link>
            <Link href="/admin/biodata" className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-brand-charcoal text-xs font-semibold shrink-0">
              Biodata
            </Link>
            <Link href="/admin/blogs" className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-brand-charcoal text-xs font-semibold shrink-0">
              Blogs
            </Link>
            <Link href="/admin/gallery" className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-brand-charcoal text-xs font-semibold shrink-0">
              Gallery
            </Link>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
