"use client";

import React from "react";
import { UserPlus, Search, MessageSquare, Heart } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Profile",
    description: "Submit your biodata and preferences.",
  },
  {
    step: "02",
    icon: Search,
    title: "Search & Connect",
    description: "Find suitable matches based on your choices.",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Interact Safely",
    description: "Communicate with interest & build trust.",
  },
  {
    step: "04",
    icon: Heart,
    title: "Find Your Match",
    description: "Take the step towards a beautiful Nikah.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-brand-cream relative overflow-hidden">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
            HOW HUMNIKAH WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
            A Simple Path to Your Forever
          </h2>
        </ScrollReveal>

        {/* Steps Flow */}
        <div className="relative">
          {/* Animated Connecting Line behind steps on LG screens */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#651514] z-0 origin-left"
          />

          <ScrollReveal variant="fade-up" staggerChildren={0.2} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollRevealItem key={idx} variant="fade-up">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Step Circle with Icon and Number Badge */}
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 rounded-full bg-white border-2 border-brand-emerald shadow-md flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-300"
                      >
                        <Icon size={26} />
                      </motion.div>
                      <span className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-brand-emerald text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow group-hover:bg-brand-gold transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2 group-hover:text-brand-emerald transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-secondary text-sm leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </motion.div>
                </ScrollRevealItem>
              );
            })}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

