"use client";

import React from "react";
import { ShieldCheck, Lock, Heart, Headphones } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Profiles",
    description: "All profiles are manually verified for authenticity.",
    bgColor: "bg-emerald-50 text-emerald-700 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your privacy is our priority. Your data is always safe with us.",
    bgColor: "bg-amber-50 text-amber-700 border-amber-100 group-hover:bg-amber-600 group-hover:text-white",
  },
  {
    icon: Heart,
    title: "Faith & Values",
    description: "We believe in building relationships on the foundation of faith.",
    bgColor: "bg-emerald-50 text-emerald-700 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our team is here to help you at every step of your journey.",
    bgColor: "bg-amber-50 text-amber-700 border-amber-100 group-hover:bg-amber-600 group-hover:text-white",
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

      </div>
    </section>
  );
}

