import React from "react";
import { logout } from "./actions";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminNavigation";

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
    <div className="h-[100dvh] overflow-hidden bg-brand-cream flex flex-col font-montserrat">
      {/* Top Admin Header Bar */}
      <AdminHeader onLogout={handleLogout} adminEmail={session.email || "Admin"} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <AdminSidebar />

        {/* Main Dashboard Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
