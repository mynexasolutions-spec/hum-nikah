"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const locationsData = [
  {
    id: "loc-1",
    title: "[ Bangalore ]",
    address: "Splendid Plaza, No. 6. 2nd, Floor, Wheeler Road, Cox Town Bangalore 560005",
    phone: "+91 90190 82205",
    email: "CONNECT@HUMNIKAH.COM",
    timing: "Mon - Sat: 10:00 AM - 7:00 PM",
  },
  {
    id: "loc-2",
    title: "[ Location 2 ]",
    address: "[ Location 2 Address Line, Street Name, City, Pincode ]",
    phone: "+91 90190 82205",
    email: "SUPPORT@HUMNIKAH.COM",
    timing: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    id: "loc-3",
    title: "[ Location 3 ]",
    address: "[ Location 3 Address Line, Area / Region, City Name ]",
    phone: "+91 90190 82205",
    email: "INFO@HUMNIKAH.COM",
    timing: "Mon - Sat: 10:30 AM - 7:00 PM",
  },
  {
    id: "loc-4",
    title: "[ Location 4 ]",
    address: "[ Location 4 Address Line, Country / Region Name ]",
    phone: "+91 90190 82205",
    email: "GLOBAL@HUMNIKAH.COM",
    timing: "Mon - Sat: 10:00 AM - 6:00 PM",
  }
];

export function LocationsSection() {
  return (
    <section id="locations" className="scroll-mt-24 py-12 sm:py-14 bg-white relative overflow-hidden border-t border-brand-border/40">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-gold/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D184C]/10 border border-[#1D184C]/20 text-[#1D184C] text-xs font-bold uppercase tracking-widest shadow-xs">
            <Building2 size={16} className="text-brand-gold" />
            <span>MULTIPLE LOCATIONS &amp; OFFICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-brand-charcoal leading-tight">
            Visit Our Walk-In Offices <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D184C] via-[#651514] to-brand-gold">
              Across Multiple Locations
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal sm:font-light max-w-2xl mx-auto leading-relaxed">
            Our relationship managers and field verification teams are available across multiple office centers to assist families with personal care and confidentiality.
          </p>
        </ScrollReveal>

        {/* Locations Grid */}
        <ScrollReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="bg-brand-cream/40 rounded-3xl p-6 border border-brand-border/80 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative"
            >
              <div>
                <h3 className="text-lg font-playfair font-bold text-[#1D184C] mb-3 group-hover:text-brand-gold transition-colors">
                  {loc.title}
                </h3>

                {/* Address */}
                <div className="space-y-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-slate-600 font-normal">{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-brand-gold shrink-0" />
                    <span className="text-slate-700 font-semibold">{loc.phone}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-brand-gold shrink-0" />
                    <span className="text-slate-600 font-normal">{loc.email}</span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1">
                    <Clock size={15} className="text-emerald-600 shrink-0" />
                    <span className="text-slate-500 font-normal">{loc.timing}</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <Link
                  href="/#submit-biodata"
                  className="text-[#1D184C] font-bold hover:text-brand-gold transition-colors flex items-center gap-1"
                >
                  <span>Book Appointment</span> &rarr;
                </Link>
              </div>
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
