"use client";

import React from "react";
import {  Heart, ShieldCheck, Star } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const stats = [

  {
    icon: Heart,
    value: "Multiple",
    label: "Successful Marriages",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Profiles",
  },
  {
    icon: Star,
    value: "5/5",
    label: "User Satisfaction",
  },
];

export function StatsSection() {
  return (
    <section className="py-10 bg-brand-cream border-t border-brand-border/40 overflow-hidden">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="zoom-in" duration={0.6}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border/60 shadow-sm hover:shadow-md transition-shadow grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex flex-col items-center justify-center p-2 group cursor-pointer ${
                    idx === 2 ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    className="p-3 rounded-full bg-brand-cream text-brand-gold mb-3 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 shadow-xs"
                  >
                    <Icon size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal group-hover:text-brand-emerald transition-colors"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-brand-secondary font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

