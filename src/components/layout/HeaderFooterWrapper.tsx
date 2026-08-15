"use client";

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { StickyFloatingActions } from "@/components/ui/StickyFloatingActions";

export function HeaderFooterWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      <Suspense fallback={null}>
        <PageLoader />
      </Suspense>
      {!isAdminRoute && <Navbar />}
      <div className="flex-1">{children}</div>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <StickyFloatingActions />}
    </>
  );
}

