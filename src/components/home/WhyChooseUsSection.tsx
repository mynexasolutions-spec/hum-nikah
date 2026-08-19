"use client";

import React from "react";
import { ShieldCheck, Lock, Home, Headphones, FileCheck } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const features = [
  {
    icon: Home,
    title: "Physical Home Visits",
    description: "In-person representative visit to candidate's home to verify family background and residence.",
    bgColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    icon: ShieldCheck,
    title: "5-Layer Background Check",
    description: "CNIC, degree audit, employment check, and 2+ verified family references.",
    bgColor: "bg-[#1D184C]/10 text-[#1D184C] border-[#1D184C]/20 group-hover:bg-[#1D184C] group-hover:text-white",
  },
  {
    icon: Lock,
    title: "Privacy & Modesty First",
    description: "Wali-controlled profile access, blur options, and 100% data security.",
    bgColor: "bg-[#C58D5F]/15 text-[#C58D5F] border-[#C58D5F]/30 group-hover:bg-[#C58D5F] group-hover:text-white",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personalized matchmaker support helping families every step of the way.",
    bgColor: "bg-[#651514]/10 text-[#651514] border-[#651514]/20 group-hover:bg-[#651514] group-hover:text-white",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-white border-y border-brand-border/40 relative overflow-hidden">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
            WHY CHOOSE HUMNIKAH?
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
            A Platform You Can <span className="text-brand-gold">Trust</span>
          </h2>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <ScrollReveal variant="fade-up" staggerChildren={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollRevealItem key={idx} variant="fade-up">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-brand-cream/60 rounded-2xl p-6 sm:p-8 border border-brand-border/60 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col items-start group h-full cursor-pointer"
                >
                  <div className={`p-3.5 rounded-xl border ${feature.bgColor} mb-5 group-hover:scale-110 transition-all duration-300`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2 group-hover:text-brand-emerald transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-brand-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>

        {/* Social Impact Highlight Banner */}
        <ScrollReveal variant="fade-up" className="mt-12">
          <div className="bg-gradient-to-r from-[#1D184C] via-[#2A2364] to-[#1D184C] rounded-2xl p-4 sm:p-5 text-white shadow-lg border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full border border-brand-gold/30">
                🎁 2.5% Revenue Donated to Charity
              </span>
              <span className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30">
                ♿ 100% Free Service for Physically Disabled
              </span>
            </div>
            
            <a
              href="/about#our-purpose"
              className="text-xs text-brand-gold hover:underline font-bold whitespace-nowrap"
            >
              Learn More About Our Values &rarr;
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

