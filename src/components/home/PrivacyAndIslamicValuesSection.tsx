"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Users, HeartHandshake, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const values = [
  {
    icon: ShieldCheck,
    title: "100% Privacy Guaranteed",
    description: "Your contact details and personal info are strictly protected. Data is never shared without your permission.",
    accent: "from-[#1D184C] to-[#2D2468]",
  },
  {
    icon: Lock,
    title: "Manual Profile Screening",
    description: "Every single profile is reviewed by our dedicated team to ensure genuine intentions and zero spam.",
    accent: "from-[#651514] to-[#801B1A]",
  },
  {
    icon: Users,
    title: "Wali & Family Involvement",
    description: "We strongly support guardian/Wali involvement for a respectful and Sunnah-guided Nikah process.",
    accent: "from-[#062e29] to-[#0b4840]",
  },
  {
    icon: HeartHandshake,
    title: "Halal & Dignified Matching",
    description: "Designed purely for matrimonial matrimony (Nikah). No casual dating or unverified profiles allowed.",
    accent: "from-[#b3854d] to-[#966b37]",
  },
];

export function PrivacyAndIslamicValuesSection() {
  return (
    <section className="py-12 sm:py-14 bg-gradient-to-b from-white via-brand-cream/30 to-white relative overflow-hidden border-t border-brand-border/40">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1D184C]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span>HALAL &amp; SECURE MATCHMAKING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal leading-tight">
            Built on <span className="text-brand-gold italic font-playfair">Sacred Values</span> &amp; Total Privacy
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            HumNikah provides a dignified, halal environment to find your life partner while honoring your modesty, family traditions, and peace of mind.
          </p>
        </ScrollReveal>

        {/* Feature Grid + Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image Card with Ambient Floating Badges */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/30 group">
              <img
                src="/images/hero/img_02.webp"
                alt="Islamic Nikah Values"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D184C]/90 via-[#1D184C]/30 to-transparent" />
              
              {/* Bottom Card Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2 text-brand-gold font-bold text-sm mb-1">
                  <CheckCircle2 size={16} />
                  <span>Sacred Nikah Matrimony</span>
                </div>
                <p className="text-xs text-slate-200 font-light leading-relaxed">
                  &quot;Marriage is part of my Sunnah, and whoever follows it fulfills half of his Deen.&quot; (Sunan Ibn Majah) — &quot;They are garments for you and you are garments for them.&quot; (Quran 2:187)
                </p>
              </div>
            </div>

            {/* Floating Glass Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-brand-gold/30 text-xs font-bold text-brand-charcoal"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Verified Profiles</span>
            </motion.div>
          </ScrollReveal>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollRevealItem key={idx} variant="fade-up">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-base sm:text-lg font-playfair font-bold text-brand-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollRevealItem>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Banner inside Section */}
        <ScrollReveal variant="fade-up" className="mt-14 sm:mt-16 text-center">
          <div className="inline-block">
            <Link
              href="/submit-biodata"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1D184C] via-[#651514] to-[#1D184C] hover:from-[#141038] hover:to-[#4a0f0e] text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 border border-brand-gold/40 cursor-pointer"
            >
              <span>Submit Your Biodata Today</span>
              <ArrowRight size={18} className="text-brand-gold" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
