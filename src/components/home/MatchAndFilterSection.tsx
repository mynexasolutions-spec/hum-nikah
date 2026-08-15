"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ChevronDown, 
  X, 
  CheckCircle, 
  User, 
  Phone, 
  Calendar,
  Globe,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  HeartHandshake,
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
                      ? "bg-[#062e29] text-white font-semibold shadow-xs"
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

function ModernDatePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const initialDate = value ? new Date(value) : new Date(1998, 0, 1);
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 70 }, (_, i) => currentYear - 16 - i);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const handleSelectDay = (day: number) => {
    const formattedMonth = String(viewMonth + 1).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");
    const dateStr = `${viewYear}-${formattedMonth}-${formattedDay}`;
    onChange(dateStr);
    setIsOpen(false);
  };

  const formattedDisplay = value
    ? new Date(value).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Select Date of Birth";

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <Calendar size={18} className="absolute left-3.5 text-brand-gold pointer-events-none z-10" />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm transition-all duration-200 flex items-center justify-between outline-none cursor-pointer shadow-xs hover:shadow-sm"
        >
          <span className={value ? "text-slate-900 font-semibold" : "text-slate-400 font-normal"}>
            {formattedDisplay}
          </span>
        </button>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 sm:left-auto right-0 sm:right-auto mt-2 z-50 w-72 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-brand-gold/30 p-4 animate-in fade-in zoom-in-95">
            {/* Header: Month & Year Selectors */}
            <div className="flex items-center justify-between mb-3 gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
              <select
                value={viewMonth}
                onChange={(e) => setViewMonth(Number(e.target.value))}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold bg-white text-slate-800 outline-none cursor-pointer shadow-xs"
              >
                {months.map((m, idx) => (
                  <option key={m} value={idx}>{m}</option>
                ))}
              </select>

              <select
                value={viewYear}
                onChange={(e) => setViewYear(Number(e.target.value))}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold bg-white text-slate-800 outline-none cursor-pointer shadow-xs"
              >
                {yearOptions.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 text-center mb-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <span key={day} className="text-[11px] font-bold text-slate-400 py-1">
                  {day}
                </span>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const formattedMonth = String(viewMonth + 1).padStart(2, "0");
                const formattedDay = String(day).padStart(2, "0");
                const dateStr = `${viewYear}-${formattedMonth}-${formattedDay}`;
                const isSelected = value === dateStr;

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleSelectDay(day)}
                    className={`h-8 w-8 rounded-full text-xs font-medium flex items-center justify-center transition-all cursor-pointer mx-auto ${
                      isSelected
                        ? "bg-[#062e29] text-white font-bold shadow-md scale-105"
                        : "hover:bg-brand-gold/20 text-slate-700 hover:text-brand-gold"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Footer Buttons */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => {
                  onChange("");
                  setIsOpen(false);
                }}
                className="text-slate-400 hover:text-slate-600 font-medium cursor-pointer"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#062e29] font-bold hover:underline cursor-pointer"
              >
                Done
              </button>
            </div>
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
    gender: "",
    dob: "",
    country: "",
    city: "",
    maritalStatus: "",
    profession: "",
    education: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;

    setIsModalOpen(true);
    setIsSubmitting(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName || "Anonymous Biodata",
          phone: formData.phone,
          gender: formData.gender,
          dob: formData.dob,
          country: formData.country,
          city: formData.city,
          maritalStatus: formData.maritalStatus,
          profession: formData.profession,
          education: formData.education
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
    <section id="explore-matches" className="py-10 sm:py-14 bg-gradient-to-b from-brand-cream/50 via-white to-brand-cream/40 border-t border-brand-border/40 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span>SUBMIT YOUR BIODATA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-brand-charcoal leading-tight tracking-tight">
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

              {/* Field 2: Gender */}
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

              {/* Field 3: Date of Birth */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                  Date of Birth
                </label>
                <ModernDatePicker
                  value={formData.dob}
                  onChange={(val) => setFormData({ ...formData, dob: val })}
                />
              </div>

              {/* Field 4: Country */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                  Country
                </label>
                <div className="relative flex items-center">
                  <Globe size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter country name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm transition-all duration-200 outline-none shadow-xs"
                  />
                </div>
              </div>

              {/* Field 5: City */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                  City
                </label>
                <div className="relative flex items-center">
                  <MapPin size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm transition-all duration-200 outline-none shadow-xs"
                  />
                </div>
              </div>

              {/* Field 6: Marital Status */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                  Marital Status
                </label>
                <ModernSelect
                  icon={<HeartHandshake size={18} />}
                  placeholder="Select Status"
                  value={formData.maritalStatus}
                  onChange={(val) => setFormData({ ...formData, maritalStatus: val })}
                  dropdownPosition="top"
                  options={[
                    { label: "Never Married", value: "Never Married" },
                    { label: "Divorced", value: "Divorced" },
                    { label: "Widowed", value: "Widowed" },
                    { label: "Separated", value: "Separated" },
                  ]}
                />
              </div>

              {/* Field 7: Profession */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                  Profession
                </label>
                <ModernSelect
                  icon={<Briefcase size={18} />}
                  placeholder="Select Profession"
                  value={formData.profession}
                  onChange={(val) => setFormData({ ...formData, profession: val })}
                  dropdownPosition="top"
                  options={[
                    { label: "Engineer", value: "Engineer" },
                    { label: "Doctor", value: "Doctor" },
                    { label: "Business", value: "Business" },
                    { label: "Teacher", value: "Teacher" },
                    { label: "IT Professional", value: "IT Professional" },
                    { label: "Government Employee", value: "Government Employee" },
                    { label: "Accountant / Finance", value: "Accountant / Finance" },
                    { label: "Other", value: "Other" },
                  ]}
                />
              </div>

              {/* Field 8: Education */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 text-left">
                  Education
                </label>
                <ModernSelect
                  icon={<GraduationCap size={18} />}
                  placeholder="Select Education"
                  value={formData.education}
                  onChange={(val) => setFormData({ ...formData, education: val })}
                  dropdownPosition="top"
                  options={[
                    { label: "Bachelors", value: "Bachelors" },
                    { label: "Masters", value: "Masters" },
                    { label: "Doctorate / PhD", value: "Doctorate / PhD" },
                    { label: "Diploma", value: "Diploma" },
                    { label: "High School", value: "High School" },
                    { label: "Other", value: "Other" },
                  ]}
                />
              </div>

              {/* Field 9: Submit Button (10th slot in grid) */}
              <div className="flex items-end pt-1 sm:pt-0">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-4 py-3.5 bg-gradient-to-r from-[#062e29] via-[#0b4840] to-[#062e29] hover:from-[#083b34] hover:to-[#083b34] text-white font-semibold text-sm sm:text-base rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 group border border-brand-gold/30 cursor-pointer h-[52px]"
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

      </div>{/* Phone modal to complete submission */}
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
