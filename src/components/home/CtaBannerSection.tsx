"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function CtaBannerSection() {
  return (
    <section className="py-10 md:py-16 bg-brand-cream overflow-hidden">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="zoom-in" duration={0.7}>
          <div className="relative rounded-2xl md:rounded-3xl bg-[#1D184C] text-white overflow-hidden shadow-2xl border border-[#C58D5F]/30 min-h-[340px] sm:min-h-[380px] lg:min-h-[400px] flex items-center">
            
            {/* Ambient Animated Glowing Orbs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -left-20 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none"
            />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#651514]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Right Image Overlay with smooth fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 md:w-3/5 lg:w-1/2 h-full pointer-events-none">
              <img
                src="/images/cta_banner_couple.jpg"
                alt="Muslim Couple Nikah Journey"
                className="w-full h-full object-cover object-[75%_20%] sm:object-[center_20%] opacity-65 sm:opacity-80 lg:opacity-90"
              />
              {/* Dark gradient fade over the image so text on left is 100% crisp & readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D184C] via-[#1D184C]/95 sm:via-[#1D184C]/80 lg:via-[#1D184C]/60 to-transparent" />
            </div>

            {/* Left Floral Gold Vector Artwork */}
            <div className="absolute left-0 top-0 bottom-0 h-full pointer-events-none opacity-30 sm:opacity-50 lg:opacity-75 z-10 flex items-center">
              <svg
                width="280"
                height="380"
                viewBox="0 0 280 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto text-[#C58D5F]"
              >
                <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="70" cy="130" r="16" strokeWidth="1.2" />
                  <circle cx="70" cy="130" r="7" fill="currentColor" fillOpacity="0.3" />
                  <path d="M70 98 C64 112, 76 112, 70 98 Z M70 162 C64 148, 76 148, 70 162 Z M38 130 C52 124, 52 136, 38 130 Z M102 130 C88 124, 88 136, 102 130 Z" />
                  <path d="M47 107 C59 107, 59 119, 47 107 Z M93 153 C81 153, 81 141, 93 153 Z M93 107 C81 107, 81 119, 93 107 Z M47 153 C59 153, 59 141, 47 153 Z" />
                  <path d="M70 162 Q70 240 135 300 T200 370" strokeWidth="1.5" />
                  <path d="M70 98 Q60 45 15 15" strokeWidth="1.5" />
                  <path d="M88 195 C110 185, 120 205, 88 195 Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M58 220 C35 210, 25 230, 58 220 Z" fill="currentColor" fillOpacity="0.2" />
                  <circle cx="145" cy="260" r="11" strokeWidth="1" />
                  <path d="M145 238 C140 248, 150 248, 145 238 Z M145 282 C140 272, 150 272, 145 282 Z M123 260 C133 255, 133 265, 123 260 Z M167 260 C157 255, 157 265, 167 260 Z" />
                  <path d="M15 165 Q45 175, 58 198" />
                  <path d="M100 240 Q130 220, 150 188" />
                  <path d="M130 198 C152 193, 147 176, 130 198 Z" fill="currentColor" fillOpacity="0.25" />
                  <circle cx="25" cy="90" r="2" fill="currentColor" />
                  <circle cx="40" cy="55" r="1.5" fill="currentColor" />
                  <circle cx="105" cy="165" r="2" fill="currentColor" />
                  <circle cx="170" cy="240" r="1.5" fill="currentColor" />
                  <circle cx="120" cy="325" r="2" fill="currentColor" />
                </g>
              </svg>
            </div>

            {/* Content Block */}
            <div className="relative z-20 w-full max-w-xl lg:max-w-2xl px-6 sm:px-10 lg:px-14 py-8 sm:py-12 ml-0 md:ml-32 lg:ml-40 my-auto text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>START YOUR HALAL JOURNEY</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white leading-tight sm:leading-tight lg:leading-tight tracking-tight">
                  Your Journey to{" "}
                  <span className="text-[#F3B979] italic">Nikah</span>{" "}
                  Starts Here
                </h2>

                <p className="mt-3 sm:mt-4 text-slate-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-lg">
                  Join thousands of Muslims finding trusted matches built on faith, respect &amp; sincere intentions.
                </p>

                <div className="mt-6 sm:mt-8">
                  <div className="inline-block">
                    <Link
                      href="/submit-biodata"
                      className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#651514] hover:bg-[#4D0F0E] text-white font-medium text-sm sm:text-base rounded-xl transition-all shadow-lg border border-[#C58D5F]/40 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>Create Your Profile Today</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}



