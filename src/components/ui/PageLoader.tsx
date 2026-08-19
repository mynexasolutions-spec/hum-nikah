"use client";

import React, { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { HumNikahLogo } from "@/components/ui/Logo";

function PageLoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // When route changes, turn off loader after smooth fade delay
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  // Handle render state for smooth CSS fade-out transition
  useEffect(() => {
    if (isLoading) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Safety fallback timeout: Never let loader stay stuck longer than 2.5s
  useEffect(() => {
    let safetyTimer: NodeJS.Timeout;
    if (isLoading) {
      safetyTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
    return () => clearTimeout(safetyTimer);
  }, [isLoading]);

  useEffect(() => {
    // Intercept internal link clicks to trigger loader instantly
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href) {
        const hrefAttr = target.getAttribute("href") || "";
        
        // Skip anchor/hash links, external links, and download links
        if (
          hrefAttr.startsWith("#") ||
          hrefAttr.includes("#") ||
          target.getAttribute("target") === "_blank" ||
          target.hasAttribute("download")
        ) {
          return;
        }

        try {
          const url = new URL(target.href, window.location.origin);
          const isSameOrigin = url.origin === window.location.origin;
          const isDifferentPath = url.pathname !== window.location.pathname;

          if (isSameOrigin && isDifferentPath) {
            setIsLoading(true);
          }
        } catch {
          // Ignore invalid URL parse errors
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#F3ECE4] transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-5 px-4 text-center">
        
        {/* Modern Dual-Ring Circular Spinner */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Gold Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-[3.5px] border-[#C58D5F]/20 border-t-[#C58D5F] animate-spin"></div>
          
          {/* Inner Counter-Spinning Navy Ring */}
          <div className="absolute inset-2.5 rounded-full border-[3.5px] border-[#1D184C]/20 border-b-[#1D184C] animate-[spin_0.8s_linear_infinite_reverse]"></div>
          
          {/* Center Pulsing Logo */}
          <div className="relative z-10 animate-pulse text-[#C58D5F]">
            <HumNikahLogo size={36} outerColor="#C58D5F" innerColor="#651514" />
          </div>
        </div>

        {/* Brand Text & Loading Subtitle */}
        <div className="space-y-1">
          <div className="text-xl font-playfair font-bold text-[#1D184C] tracking-wide">
            Hum<span className="text-[#C58D5F]">Nikah</span>
          </div>
          <div className="text-xs font-montserrat font-semibold text-[#5E5868] tracking-widest uppercase animate-pulse">
            Loading Page...
          </div>
        </div>

      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderContent />
    </Suspense>
  );
}
