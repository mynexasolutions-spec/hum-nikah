"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is HumNikah free to use?",
    answer: "Yes, registering your profile and browsing initial matches is completely free. We also offer premium packages for advanced communication features.",
    col: "left",
  },
  {
    question: "How are profiles verified?",
    answer: "Every profile undergoes a manual verification process checking contact details, photo authenticity, and basic background info before going live.",
    col: "left",
  },
  {
    question: "How can I contact someone?",
    answer: "Once you express interest and the recipient accepts your request, contact details or secure in-app messaging features are enabled.",
    col: "left",
  },
  {
    question: "Is my data safe with HumNikah?",
    answer: "Absolutely. We employ enterprise-grade encryption and privacy controls to ensure your personal info and photos remain completely safe.",
    col: "right",
  },
  {
    question: "Can I delete my profile anytime?",
    answer: "Yes! You have full ownership of your account and can pause, hide, or permanently delete your profile at any time from account settings.",
    col: "right",
  },
  {
    question: "How do I report a concern?",
    answer: "You can click the 'Report Profile' button on any profile card or reach out directly to our 24/7 support team via contact us page.",
    col: "right",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const leftFaqs = faqs.map((f, i) => ({ ...f, origIdx: i })).filter((f) => f.col === "left");
  const rightFaqs = faqs.map((f, i) => ({ ...f, origIdx: i })).filter((f) => f.col === "right");

  return (
    <section className="py-16 bg-white relative overflow-hidden border-t border-brand-border/40">
      
  
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
            FAQS
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        {/* 2 Column Accordion Grid */}
        <ScrollReveal variant="fade-up" delay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq) => {
              const isOpen = openIdx === faq.origIdx;
              return (
                <div
                  key={faq.origIdx}
                  className="bg-brand-cream/60 border border-brand-border/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-gold/40 shadow-xs hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(faq.origIdx)}
                    className="w-full p-4 sm:p-5 text-left font-semibold text-brand-charcoal flex items-center justify-between gap-4 text-sm sm:text-base hover:text-brand-emerald transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-brand-gold"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 pt-0 text-xs sm:text-sm text-brand-secondary leading-relaxed border-t border-brand-border/40">
                          <p className="mt-2">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => {
              const isOpen = openIdx === faq.origIdx;
              return (
                <div
                  key={faq.origIdx}
                  className="bg-brand-cream/60 border border-brand-border/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-gold/40 shadow-xs hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(faq.origIdx)}
                    className="w-full p-4 sm:p-5 text-left font-semibold text-brand-charcoal flex items-center justify-between gap-4 text-sm sm:text-base hover:text-brand-emerald transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-brand-gold"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 pt-0 text-xs sm:text-sm text-brand-secondary leading-relaxed border-t border-brand-border/40">
                          <p className="mt-2">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}

