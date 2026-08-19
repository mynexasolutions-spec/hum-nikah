"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Home,
  FileCheck,
  Briefcase,
  UserCheck,
  BadgeCheck,
  Sparkles,
  MapPin,
  CheckCircle2,
  Lock,
  ChevronRight,
  Users,
  Shield,
  Building2,
  Scale,
  Award,
  Check,
  HelpCircle,
  PhoneCall,
  ArrowRight
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const verificationLayers = [
  {
    id: "home-visit",
    icon: Home,
    badge: "Key Feature",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    title: "1. Physical Home Visit",
    subtitle: "In-Person Family & Residence Verification",
    description:
      "Our trained field verification representative visits candidate homes before matchmaking begins. We physically verify family background, address details, living environment, and ensure full transparency.",
    points: [
      "Physical address & neighborhood check",
      "Direct interaction with parents / guardians",
      "Verification of family background & authenticity",
      "Ensures 0% fake or misleading profiles"
    ],
    highlightBg: "from-emerald-950/5 via-emerald-500/5 to-transparent",
  },
  {
    id: "id-check",
    icon: FileCheck,
    badge: "Identity Standard",
    badgeColor: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    title: "2. Government ID Screening",
    subtitle: "Legal Identity & CNIC Verification",
    description:
      "Every user must provide official government-issued identity documents (CNIC / Passport). Our compliance team manually audits each document to confirm identity & age.",
    points: [
      "Official CNIC / Passport identity cross-matching",
      "Age and marital status confirmation",
      "Strict data protection (IDs stored in encrypted vault)",
      "Zero anonymous or fake names allowed"
    ],
    highlightBg: "from-blue-950/5 via-blue-500/5 to-transparent",
  },
  {
    id: "career-check",
    icon: Briefcase,
    badge: "Credentials",
    badgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    title: "3. Education & Career Audit",
    subtitle: "Professional & Academic Background",
    description:
      "Degree documents, employment proof, and professional profiles are verified to guarantee accurate education and career background listings.",
    points: [
      "University degree & educational qualification check",
      "Employment status & workplace verification",
      "Financial stability transparency for families",
      "Prevents exaggerated profile claims"
    ],
    highlightBg: "from-purple-950/5 via-purple-500/5 to-transparent",
  },
  {
    id: "reference-check",
    icon: UserCheck,
    badge: "Community Trust",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    title: "4. Character & Reference Check",
    subtitle: "2+ Verified Family References",
    description:
      "We collect and verify references from respected family acquaintances or community elders to confirm character and respectable reputation.",
    points: [
      "Cross-check with two independent family references",
      "Community standing & reputation check",
      "Guardian (Wali) approval & contact confirmation",
      "Ensures serious, marriage-minded intentions"
    ],
    highlightBg: "from-amber-950/5 via-amber-500/5 to-transparent",
  },
  {
    id: "masjid-check",
    icon: Building2,
    badge: "Mohalla Audit",
    badgeColor: "bg-teal-500/10 text-teal-700 border-teal-500/20",
    title: "5. Local Mosque & Mohalla Check",
    subtitle: "Neighborhood & Imam Reference Verification",
    description:
      "Our field team cross-references with local neighborhood elders and mosque Imams to verify the candidate family's standing, moral conduct, and respect in the community.",
    points: [
      "Local Masjid Imam & neighborhood reference check",
      "Confirmation of candidate's character & conduct",
      "Ensures clean family reputation in local area",
      "Provides complete assurance to proposing family"
    ],
    highlightBg: "from-teal-950/5 via-teal-500/5 to-transparent",
  },
  {
    id: "legal-check",
    icon: Scale,
    badge: "Legal Audit",
    badgeColor: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
    title: "6. Legal Marital Status Verification",
    subtitle: "Single / Divorce Decree Audit",
    description:
      "For single, divorced, or widowed candidates, legal status documentation (Nadra Marriage Certificate / Khula / Divorce Decree) is audited to prevent any legal ambiguities.",
    points: [
      "Official Nadra Single / Marital status audit",
      "Divorce Decree / Khula document verification (if applicable)",
      "Child custody transparency (if applicable)",
      "Zero hidden marital history"
    ],
    highlightBg: "from-indigo-950/5 via-indigo-500/5 to-transparent",
  },
  {
    id: "privacy-check",
    icon: Lock,
    badge: "Privacy Guarantee",
    badgeColor: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    title: "7. Modesty & Data Security",
    subtitle: "Wali Controlled Photo & Contact Access",
    description:
      "Photos and personal contact info remain private until mutual family consent is established. No public exposure or casual browsing.",
    points: [
      "Watermarked & blur-protected photos",
      "Direct Wali involvement at every step",
      "Strict zero-tolerance policy against misconduct",
      "Complete control over who views full details"
    ],
    highlightBg: "from-rose-950/5 via-rose-500/5 to-transparent",
  }
];

const processSteps = [
  {
    step: "01",
    title: "Submit Biodata & Photo",
    desc: "Fill in candidate details along with recent photo and basic family background info."
  },
  {
    step: "02",
    title: "Document & Reference Audit",
    desc: "Our team cross-checks CNIC, educational credentials, and conducts preliminary phone audits."
  },
  {
    step: "03",
    title: "Scheduled Home Visit",
    desc: "HumNikah representative schedules an in-person visit to candidate's residence to verify credentials."
  },
  {
    step: "04",
    title: "Earned Verified Seal",
    desc: "Upon successful verification, candidate gets the prestigious 'Home Verified' badge on HumNikah."
  }
];

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

export function TrustVerificationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-14 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] relative overflow-hidden border-t border-brand-border/40">
      {/* Decorative Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1D184C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D184C]/10 border border-[#1D184C]/20 text-[#1D184C] text-xs font-bold uppercase tracking-widest shadow-xs">
            <ShieldCheck size={16} className="text-brand-gold animate-pulse" />
            <span>UNMATCHED SAFETY &amp; VERIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal leading-tight">
            100% Genuine Profiles with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D184C] via-[#651514] to-brand-gold">
              Home Visit &amp; Background Verification
            </span>
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-normal sm:font-light max-w-2xl mx-auto leading-relaxed mt-3">
            We don&apos;t rely on online claims alone. Every profile undergoes rigorous multi-layer screening—including physical in-person home visits—so your family can proceed with absolute trust.
          </p>
        </ScrollReveal>

        {/* Highlight Banner Card: HOME VISIT FEATURE */}
        <ScrollReveal variant="fade-up" className="mb-16">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#1D184C] via-[#2A2364] to-[#1D184C] p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-brand-gold/30 overflow-hidden">
            
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C58D5F_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Home size={14} />
                  <span>Physical Home Visit Guaranteed</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold leading-tight">
                  We Visit Candidate Homes <span className="text-brand-gold italic">Before</span> Matches Begin
                </h3>

                <p className="text-slate-200 text-sm sm:text-base font-normal sm:font-light leading-relaxed">
                  To ensure complete safety for both families, our verification representative visits the candidate&apos;s residence in-person. We verify family details, address, living environment, and character references—eliminating fake profiles completely.
                </p>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Residence Audit</h4>
                      <p className="text-xs text-slate-200 font-medium sm:font-normal">Physical address &amp; family home check</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                    <div className="p-2 rounded-lg bg-brand-gold/20 text-brand-gold">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Guardian Meeting</h4>
                      <p className="text-xs text-slate-200 font-medium sm:font-normal">Direct dialogue with parents / Wali</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <BadgeCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Home Verified Badge</h4>
                      <p className="text-xs text-slate-200 font-medium sm:font-normal">Golden seal assigned after visit</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                    <div className="p-2 rounded-lg bg-brand-gold/20 text-brand-gold">
                      <Shield size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Zero Fake Profiles</h4>
                      <p className="text-xs text-slate-200 font-medium sm:font-normal">100% peace of mind for families</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Official Physical Verification Certificate & Live Protocol Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-white text-brand-charcoal rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-brand-gold/50 relative overflow-hidden">
                  
                  {/* Header Badge */}
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md">
                      <Award size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-playfair font-bold text-base text-[#1D184C]">
                          Home Verification Certificate
                        </h4>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-full border border-emerald-300">
                          OFFICIAL
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-normal sm:font-light">HumNikah Field Audit Protocol</p>
                    </div>
                  </div>

                  {/* Inspection Protocol Progress */}
                  <div className="space-y-3 mb-5">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#1D184C] flex items-center gap-1.5">
                      <Sparkles size={14} className="text-brand-gold" /> Physical Inspection Checklist:
                    </h5>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/60">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                          <span className="font-semibold text-slate-800">1. Physical Home &amp; Address Audit</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-200/60 px-2 py-0.5 rounded-md">VERIFIED</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/60">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                          <span className="font-semibold text-slate-800">2. In-Person Guardian / Wali Dialogue</span>
                        </div>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-200/60 px-2 py-0.5 rounded-md">PASSED</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50/80 border border-purple-200/60">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 size={16} className="text-purple-600 shrink-0" />
                          <span className="font-semibold text-slate-800">3. CNIC &amp; Degree Document Check</span>
                        </div>
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-200/60 px-2 py-0.5 rounded-md">AUDITED</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/60">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                          <span className="font-semibold text-slate-800">4. Community &amp; Masjid References</span>
                        </div>
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded-md">CONFIRMED</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats Footer */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-base font-bold text-[#1D184C]">1,500+</div>
                      <div className="text-[10px] text-slate-600 font-medium">Homes Visited</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-base font-bold text-emerald-600">100%</div>
                      <div className="text-[10px] text-slate-600 font-medium">Address Proof</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-base font-bold text-brand-gold">0%</div>
                      <div className="text-[10px] text-slate-600 font-medium">Fake Profiles</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* 7-LAYER BACKGROUND VERIFICATION INTERACTIVE SHOWCASE */}
        <div className="mt-16">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              OUR MULTI-LAYER SAFETY SHIELD
            </span>
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mt-1">
              7-Step Comprehensive Verification Pipeline
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm font-normal sm:font-light mt-2">
              Select any layer below to explore how HumNikah protects your family&apos;s matrimonial search.
            </p>
          </ScrollReveal>

          {/* Mobile Layout (< lg): Mobile Accordion Cards */}
          <div className="block lg:hidden space-y-3">
            {verificationLayers.map((layer, idx) => {
              const Icon = layer.icon;
              const isOpen = activeTab === idx;
              return (
                <div
                  key={layer.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white shadow-lg border-brand-gold/60 ring-2 ring-brand-gold/20"
                      : "bg-white/80 border-slate-200/80"
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                          isOpen
                            ? "bg-[#1D184C] text-white shadow-md"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className={`text-sm font-playfair font-bold ${
                          isOpen ? "text-[#1D184C]" : "text-slate-800"
                        }`}>
                          {layer.title}
                        </h4>
                        <p className="text-xs text-slate-600 sm:text-slate-500 font-normal sm:font-light truncate max-w-[180px] xs:max-w-none">
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${layer.badgeColor}`}>
                        {layer.badge}
                      </span>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-90 text-brand-gold" : "text-slate-400"}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-5 pt-2 border-t border-slate-100 bg-gradient-to-br from-slate-50/80 to-white"
                      >
                        <p className="text-slate-700 text-xs sm:text-slate-600 font-normal sm:font-light leading-relaxed mb-4">
                          {layer.description}
                        </p>

                        <div className="space-y-2 bg-brand-cream/60 p-4 rounded-xl border border-brand-border/40 mb-3">
                          <h5 className="text-[11px] font-bold text-[#1D184C] uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles size={13} className="text-brand-gold" /> Key Checks Conducted:
                          </h5>
                          <div className="space-y-1.5">
                            {layer.points.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-800 sm:text-slate-700 font-medium sm:font-normal">
                                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-600 sm:text-slate-500 pt-1">
                          <span className="flex items-center gap-1 font-medium sm:font-normal">
                            <ShieldCheck size={13} className="text-emerald-600" /> Human Audited
                          </span>
                          <span className="font-bold text-[#1D184C]">100% Verified</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop Layout (>= lg): 2-Column Side-by-Side Tabs */}
          <ScrollReveal variant="fade-up" className="hidden lg:grid grid-cols-12 gap-6 items-start">
            
            {/* Left Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {verificationLayers.map((layer, idx) => {
                const Icon = layer.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? "bg-white shadow-xl border-brand-gold/60 ring-2 ring-brand-gold/20"
                        : "bg-white/60 hover:bg-white border-slate-200/80 hover:border-brand-gold/30"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#1D184C] text-white scale-110 shadow-md"
                            : "bg-slate-100 text-slate-600 group-hover:bg-[#1D184C]/10 group-hover:text-[#1D184C]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className={`text-sm font-playfair font-bold transition-colors ${
                          isActive ? "text-[#1D184C]" : "text-slate-800 group-hover:text-[#1D184C]"
                        }`}>
                          {layer.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-light truncate max-w-[200px] sm:max-w-none">
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${layer.badgeColor}`}>
                        {layer.badge}
                      </span>
                      <ChevronRight size={16} className={`transition-transform ${isActive ? "rotate-90 text-brand-gold" : "text-slate-400"}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Tab Detail Content Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab < 0 ? 0 : activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-border/60 relative overflow-hidden"
                >
                  {/* Subtle Background Accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${verificationLayers[activeTab < 0 ? 0 : activeTab].highlightBg} pointer-events-none`} />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3">
                        {React.createElement(verificationLayers[activeTab < 0 ? 0 : activeTab].icon, {
                          size: 28,
                          className: "text-[#1D184C]"
                        })}
                        <div>
                          <h4 className="text-xl font-playfair font-bold text-brand-charcoal">
                            {verificationLayers[activeTab < 0 ? 0 : activeTab].title}
                          </h4>
                          <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider">
                            {verificationLayers[activeTab < 0 ? 0 : activeTab].subtitle}
                          </p>
                        </div>
                      </div>

                      <span className={`text-xs px-3 py-1 rounded-full font-bold border ${verificationLayers[activeTab < 0 ? 0 : activeTab].badgeColor}`}>
                        {verificationLayers[activeTab < 0 ? 0 : activeTab].badge}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                      {verificationLayers[activeTab < 0 ? 0 : activeTab].description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-3 bg-brand-cream/50 p-5 rounded-2xl border border-brand-border/40">
                      <h5 className="text-xs font-bold text-[#1D184C] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles size={14} className="text-brand-gold" /> Key Verification Checks Conducted:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {verificationLayers[activeTab < 0 ? 0 : activeTab].points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <ShieldCheck size={14} className="text-emerald-600" /> Human Audited by Matchmaking Experts
                      </span>
                      <span className="font-semibold text-[#1D184C]">100% Verified Assurance</span>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </ScrollReveal>
        </div>


        {/* 100% AUTHENTICITY GUARANTEE & CALL BANNER */}
        <ScrollReveal variant="fade-up" className="mt-16">
          <div className="bg-gradient-to-r from-[#1D184C] via-[#2D2468] to-[#1D184C] border border-brand-gold/40 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <Award size={16} />
                  <span>Our 100% Truth &amp; Authenticity Promise</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-playfair font-bold">
                  Schedule Your Profile Home Verification Today
                </h4>

                <p className="text-slate-200 text-xs sm:text-sm font-normal sm:font-light leading-relaxed">
                  Join hundreds of verified families. Our senior matchmaker and verification team will coordinate a convenient physical visit to give your profile maximum authenticity and respect.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <Check size={16} className="text-emerald-400" /> Physical In-Person Visit
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check size={16} className="text-emerald-400" /> Direct Wali Dialogue
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check size={16} className="text-emerald-400" /> 100% Confidential
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/submit-biodata"
                  className="px-6 py-3.5 bg-gradient-to-r from-brand-gold to-[#b3854d] text-[#1D184C] font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Submit Biodata for Verification</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:+923000000000"
                  className="px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall size={16} className="text-brand-gold" />
                  <span>Talk to Matchmaker Team</span>
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* VERIFICATION PROCESS TIMELINE */}
        <ScrollReveal variant="fade-up" className="mt-20 sm:mt-24 pt-12 border-t border-brand-border/40">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              HOW VERIFICATION WORKS
            </span>
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mt-1">
              4 Steps to a Home Visit Verified Profile
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:border-brand-gold/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 text-3xl font-playfair font-black text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors">
                  {item.step}
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1D184C]/10 text-[#1D184C] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#1D184C] group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <h4 className="font-playfair font-bold text-base text-brand-charcoal mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-700 sm:text-slate-600 font-normal sm:font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold sm:font-medium flex items-center gap-1">
                  <CheckCircle2 size={13} /> Strict Verification
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
