"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HelpCircle, ChevronRight, Sparkles, PhoneCall, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const verificationFaqs = [
  {
    q: "How does the HumNikah field representative conduct the Home Visit?",
    a: "Our trained verification representative coordinates with the candidate's family/Wali to schedule a convenient time. During the visit, we physically verify the residence, meet family members, and confirm living background with total respect and modesty."
  },
  {
    q: "Is our exact home address or documents visible to other users?",
    a: "No, absolutely not. Exact residential addresses and uploaded ID documents are kept strictly confidential in our secure vault. They are never published on the public website and are only accessible by our internal compliance team."
  },
  {
    q: "What credentials are verified during the background check?",
    a: "We audit government-issued CNIC/Passport, university degrees/employment proof, 2 family character references, local neighborhood reputation, and legal marital status documentation."
  },
  {
    q: "Can parents / Guardians (Wali) directly talk with the verification team?",
    a: "Yes! HumNikah encourages active Wali participation. Guardians can call or meet our verification team anytime to ask questions, check progress, or share specific matching preferences."
  }
];

export function VerificationFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-14 bg-gradient-to-b from-[#1D184C] via-[#241E5D] to-[#1D184C] relative overflow-hidden border-t border-brand-gold/30 text-white">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-gold/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest shadow-lg">
            <HelpCircle size={15} className="text-brand-gold animate-pulse" />
            <span>PARENT &amp; GUARDIAN QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white leading-tight">
            Frequently Asked <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold italic">
              Verification Questions
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-normal sm:font-light max-w-xl mx-auto leading-relaxed mt-2">
            Clear answers to help families understand our safety, privacy, and home visit protocols.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto space-y-4">
          {verificationFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/15 backdrop-blur-xl border-brand-gold/60 ring-2 ring-brand-gold/30 shadow-2xl"
                    : "bg-white/5 backdrop-blur-md hover:bg-white/10 border-white/15 hover:border-brand-gold/40"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-playfair font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-brand-gold shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronRight
                    size={18}
                    className={`text-brand-gold transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-90 text-amber-300" : "text-slate-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 pt-2 text-slate-200 text-xs sm:text-sm font-normal sm:font-light leading-relaxed border-t border-white/10 bg-black/20"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Bottom Quick Help Contact Line */}
        <ScrollReveal variant="fade-up" className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-brand-gold font-semibold">
              <Sparkles size={14} /> Have custom verification questions?
            </span>
            <a
              href="tel:+923000000000"
              className="inline-flex items-center gap-1.5 text-white font-bold hover:text-brand-gold transition-colors"
            >
              <PhoneCall size={14} className="text-brand-gold" />
              <span>Talk to Senior Matchmaker</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <Link
              href="/submit-biodata"
              className="inline-flex items-center gap-1 text-brand-gold font-bold hover:underline"
            >
              <span>Submit Biodata</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
