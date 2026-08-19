"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, 
  ChevronDown, 
  X, 
  CheckCircle, 
  User, 
  Phone, 
  Mail,
  Users,
  ShieldCheck,
  Zap
} from "lucide-react";

interface ModernSelectProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  dropdownPosition?: "top" | "bottom";
}

function ModernSelect({ icon, placeholder, value, onChange, options, dropdownPosition = "bottom" }: ModernSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <span className="absolute left-3.5 text-brand-gold pointer-events-none z-10 flex items-center justify-center">
          {icon}
        </span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm transition-all duration-200 flex items-center justify-between outline-none cursor-pointer shadow-xs"
        >
          <span className={value ? "text-slate-900 font-semibold" : "text-slate-400 font-normal"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            size={18}
            className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-gold" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className={`absolute left-0 right-0 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-brand-gold/30 p-2 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 scrollbar-thin ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}`}>
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-center justify-between cursor-pointer my-0.5 ${
                    isSelected
                      ? "bg-[#1D184C] text-white font-semibold shadow-xs"
                      : "text-slate-700 hover:bg-brand-cream/80 hover:text-brand-charcoal"
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <CheckCircle size={16} className="text-brand-gold" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export function MatchAndFilterSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.fullName) return;

    setIsModalOpen(true);
    setIsSubmitting(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName || "Anonymous Biodata",
          phone: formData.phone,
          email: formData.email || null,
          gender: formData.gender || null,
        }),
      });

      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        router.push("/submit-biodata");
      }, 1400);

    } catch (err) {
      console.error("Biodata lead submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="submit-biodata" className="py-10 sm:py-14 bg-gradient-to-b from-brand-cream/50 via-white to-brand-cream/40 border-t border-brand-border/40 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span>SUBMIT YOUR BIODATA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal leading-tight tracking-tight">
            Take the First Step towards a <span className="text-brand-gold font-playfair italic">Beautiful Relationship</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Fill in your details below to submit your biodata and connect with verified, genuine matches.
          </p>
        </ScrollReveal>

        {/* Floating Modern Luxury Card */}
        <div className="max-w-6xl xl:max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(6,46,41,0.07)] border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
                  {/* Field 1: Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm transition-all duration-200 outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Field 2: Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Phone size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm transition-all duration-200 outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Field 3: Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <Mail size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm transition-all duration-200 outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Field 4: Gender */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                      Gender
                    </label>
                    <ModernSelect
                      icon={<Users size={18} />}
                      placeholder="Select Gender"
                      value={formData.gender}
                      onChange={(val) => setFormData({ ...formData, gender: val })}
                      options={[
                        { label: "Male (Groom)", value: "Male (Groom)" },
                        { label: "Female (Bride)", value: "Female (Bride)" },
                      ]}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2 flex justify-center pt-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1D184C] via-[#651514] to-[#1D184C] hover:from-[#141038] hover:to-[#4a0f0e] text-white font-bold text-base rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 group border border-brand-gold/40 cursor-pointer h-[54px]"
                    >
                      <span>Submit My Biodata</span>
                      <Sparkles size={18} className="group-hover:scale-125 group-hover:rotate-12 transition-transform text-brand-gold" />
                    </button>
                  </div>

                </div>
              </form>

              {/* Micro Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium">
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

            {/* Image Section */}
            <div className="lg:col-span-5 xl:col-span-4 h-64 sm:h-80 lg:h-full order-1 lg:order-2 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/images/hero/img_05.webp" 
                alt="Submit Biodata" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Modal to complete submission */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-gold/30 p-6 sm:p-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Biodata Submitted!</h3>
                <p className="text-sm text-slate-600">Your details have been registered successfully.</p>
              </div>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Submitting...</h3>
                <p className="text-sm text-slate-600">Please wait while we process your details.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

