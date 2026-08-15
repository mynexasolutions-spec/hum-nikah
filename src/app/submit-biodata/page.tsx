import React from "react";
import { BiodataForm } from "@/components/biodata/BiodataForm";
import { Sparkles, ShieldCheck, CheckCircle, Zap } from "lucide-react";

export const metadata = {
  title: "Submit Biodata | HumNikah",
  description: "Take the first step towards a blessed union. Submit your matrimonial biodata securely on HumNikah.",
};

export default function SubmitBiodataPage() {
  return (
    <main className="min-h-screen bg-brand-cream pb-20">
      {/* Compact Hero Section (Matches Blog, Gallery & Contact pages) */}
      <section className="relative bg-[#062E29] text-white py-8 sm:py-12 overflow-hidden border-b border-brand-gold/20">
        {/* Glow Orbs */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={14} className="animate-pulse text-brand-gold" />
            <span>Islamic Matrimonial Registration</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white tracking-tight leading-tight">
            Create Your <span className="text-[#C6A77D] italic">Matrimonial Biodata</span>
          </h1>

          <p className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base font-light max-w-lg mx-auto leading-relaxed">
            Please fill out your details accurately. Your privacy is 100% protected and only shared with verified matches.
          </p>
        </div>
      </section>

      {/* Main Content Section - Floating Luxury Card */}
      <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(6,46,41,0.07)] border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300">
          
          {/* Header Badge inside card */}
          <div className="text-center mb-8 pb-6 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal">
              Biodata Registration Form
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">
              Complete all sections below to generate your official HumNikah profile.
            </p>
          </div>

          {/* Form */}
          <BiodataForm />

          {/* Micro Trust Indicators */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-brand-gold" /> 100% Privacy Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={16} className="text-brand-gold" /> Verified Profiles Only
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={16} className="text-brand-gold" /> Fast Match Alerts
            </span>
          </div>

        </div>
      </section>
    </main>
  );
}
