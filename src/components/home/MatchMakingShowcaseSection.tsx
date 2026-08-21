"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, Lock, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const showcases = [
  {
    title: "Verified Educated Grooms",
    subtitle: "Engineers, Doctors, IT Professionals & Businessmen",
    image: "/images/hero/img_01.webp",
    badge: "100% Verified Profiles",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Respectable Bride Profiles",
    subtitle: "Accomplished, Religious & Family-Oriented Women",
    image: "/images/hero/img_02.webp",
    badge: "Confidential & Safe",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    title: "Sacred Matrimony Values",
    subtitle: "Guidance and Sincere Support Throughout Your Journey",
    image: "/images/about/about_mosque.jpg",
    badge: "Sunnah Centered",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const pillars = [
  {
    icon: Lock,
    title: "Protected Contact Info",
    desc: "Your phone & email are never shown publicly until mutual interest is approved.",
  },
  {
    icon: Users,
    title: "Wali & Family First",
    desc: "Respecting Islamic traditions with guardian involvement at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Fake Profiles",
    desc: "Strict human verification process ensures authentic, sincere proposals only.",
  },
];

export function MatchMakingShowcaseSection() {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden border-t border-brand-border/40">
      
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cream/60 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span>DISCOVER GENUINE MATCHES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal leading-tight">
            Connecting Sincere Hearts For <span className="text-brand-gold italic font-playfair">Blessed Marriage</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Take a look at how HumNikah helps families connect with verified, noble proposals from across India &amp; abroad.
          </p>
        </ScrollReveal>

        {/* 3 Showcase Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {showcases.map((card, idx) => (
            <ScrollRevealItem key={idx} variant="fade-up">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:border-brand-gold/40 bg-slate-900 h-[380px] sm:h-[420px] flex flex-col justify-end p-6 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D184C] via-[#1D184C]/50 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-xs ${card.tagColor}`}>
                    <CheckCircle2 size={13} />
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-2 text-left">
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white group-hover:text-brand-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Brand New Luxury "Nikah Trust Commitment" Banner */}
        <ScrollReveal variant="fade-up" className="mt-12 sm:mt-16">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#1D184C] via-[#2A1E5C] to-[#1D184C] p-6 sm:p-10 border border-brand-gold/40 shadow-2xl text-white overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-gold/15 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-4 text-left space-y-3">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles size={14} className="text-brand-gold" />
                  <span>OUR SACRED COMMITMENT</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold leading-tight">
                  Matrimony Handled With <span className="text-brand-gold italic">Honor &amp; Trust</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  We guarantee total confidentiality so you can search for your soulmate with complete confidence.
                </p>
                <div className="pt-2">
                  <Link
                    href="/submit-biodata"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#651514] hover:bg-[#4d0f0e] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg border border-brand-gold/30 hover:scale-105 active:scale-95"
                  >
                    <span>Register Biodata</span>
                    <ArrowRight size={16} className="text-brand-gold" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 Luxury Pillar Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                {pillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:border-brand-gold/50 transition-all text-left flex flex-col justify-start h-full group shadow-xs"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-3.5 shrink-0 group-hover:bg-brand-gold group-hover:text-[#1D184C] transition-all">
                        <Icon size={20} />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-white  font-playfair sm:min-h-[2.75rem] flex items-center">
                          {pillar.title}
                        </h4>
                        <p className="text-slate-300 text-xs font-light leading-relaxed flex-1">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

