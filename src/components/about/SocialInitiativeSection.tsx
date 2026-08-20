"use client";

import React from "react";
import Image from "next/image";
import { Heart, Sparkles, HeartHandshake, CheckCircle2, ShieldCheck, ArrowRight, Gift } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

export function SocialInitiativeSection() {
  return (
    <section id="social-initiatives" className="scroll-mt-24 py-14 sm:py-20 bg-gradient-to-b from-white via-brand-cream/50 to-white relative overflow-hidden border-t border-brand-border/50">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-gold/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1D184C]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest shadow-xs">
            <HeartHandshake size={16} className="text-brand-gold animate-pulse" />
            <span>OUR CHARITY &amp; INCLUSION COMMITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal leading-tight">
            Building Families &amp; <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D184C] via-[#651514] to-brand-gold italic">
              Serving the Community
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium sm:font-medium max-w-2xl mx-auto leading-relaxed">
            At HumNikah, business is guided by Islamic responsibility. We believe in giving back and ensuring equal, dignified matrimonial opportunities for everyone.
          </p>
        </ScrollReveal>

        {/* 2 Feature Cards Grid (Compact max-w with increased image height) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: 2.5% Revenue Donated to Charity */}
          <ScrollReveal variant="fade-up">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-border/60 hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between h-full group">
              
              {/* Image Banner (Increased Height) */}
              <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                <Image
                  src="/images/about/img_05.webp"
                  alt="Islamic Charity & Welfare - HumNikah"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D184C]/90 via-[#1D184C]/30 to-transparent" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-brand-gold to-[#b3854d] text-[#1D184C] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Gift size={15} />
                  <span>2.5% Revenue for Charity</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white">
                    Giving Back Through Sadaqah
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-700 text-xs sm:text-sm font-normal sm:font-light leading-relaxed">
                  In line with sacred Islamic values, <strong className="text-[#1D184C] font-semibold">2.5% of all HumNikah earnings</strong> are directly donated to verified charitable causes, supporting underprivileged families, orphan welfare, and community education.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Direct contribution to orphan &amp; needy family welfare</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Calculated strictly according to Zakat &amp; Sadaqah guidelines</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Transparent annual social impact reporting</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-[#1D184C]">
                    <Sparkles size={14} className="text-brand-gold" /> Every Nikah Helps Others
                  </span>
                  <span className="text-emerald-700 font-bold">100% Transparent</span>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Card 2: 100% Free Service for Physically Disabled Candidates */}
          <ScrollReveal variant="fade-up">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-border/60 hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between h-full group">
              
              {/* Image Banner (Increased Height) */}
              <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                <Image
                  src="/images/about/img_06.webp"
                  alt="Inclusive Matrimony for Differently Abled - HumNikah"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#651514]/90 via-[#651514]/30 to-transparent" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-emerald-300">
                  <Heart size={15} />
                  <span>100% Free for Differently Abled</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white">
                    Free Service for Physically Disabled
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-700 text-xs sm:text-sm font-normal sm:font-light leading-relaxed">
                  We believe physical disability should never be a barrier to finding a righteous life partner. HumNikah provides <strong className="text-[#651514] font-semibold">100% FREE matrimonial matchmaking</strong> with zero registration or match fees for physically disabled / differently abled individuals.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Zero registration, listing, or matchmaker charges</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Dedicated priority assistance by senior matchmakers</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Full home visit &amp; background verification included</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-[#651514]">
                    <ShieldCheck size={14} className="text-brand-gold" /> Dignified &amp; Respectful Matchmaking
                  </span>
                  <span className="text-emerald-700 font-bold">No Hidden Fees</span>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Banner Card */}
        <ScrollReveal variant="fade-up" className="mt-12 sm:mt-14">
          <div className="bg-gradient-to-r from-[#1D184C] via-[#2A2364] to-[#1D184C] border border-brand-gold/40 rounded-3xl p-6 sm:p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 max-w-xl">
              <h4 className="text-lg sm:text-xl font-playfair font-bold text-white">
                Know Someone Who Can Benefit From Our Free Service?
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm font-normal sm:font-light">
                Help us connect differently abled brothers and sisters with their soulmates with dignity and ease.
              </p>
            </div>

            <Link
              href="/submit-biodata"
              className="px-6 py-3.5 bg-gradient-to-r from-brand-gold to-[#b3854d] text-[#1D184C] font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center flex items-center gap-2 shrink-0"
            >
              <span>Submit Free Biodata</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
