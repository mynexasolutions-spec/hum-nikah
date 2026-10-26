"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Printer,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Download,
  Share2,
  ShieldCheck,
  ArrowRight,
  Eye,
  Edit3,
  Heart,
  User,
  BookOpen,
  Briefcase,
  Users,
  Compass,
  PhoneCall,
  FileText,
} from "lucide-react";

type Gender = "boy" | "girl";
type Theme = "emerald" | "ivory" | "minimal";

interface BiodataData {
  gender: Gender;
  bismillahHeader: boolean;
  theme: Theme;
  // Personal
  fullName: string;
  birthDate: string;
  age: string;
  height: string;
  maritalStatus: string;
  motherTongue: string;
  languages: string;
  sect: string;
  // Deen
  namaz: string;
  deenPractice: string;
  // Education & Work
  education: string;
  profession: string;
  companyOrBusiness: string;
  cityOfWork: string;
  // Family
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  sisters: string;
  nativePlace: string;
  residenceCity: string;
  waliName: string;
  waliRelation: string;
  // Expectations
  partnerAgeRange: string;
  partnerEducation: string;
  partnerLocation: string;
  partnerValues: string;
  // Contact
  contactPerson: string;
  contactNumber: string;
  contactEmail: string;
}

const INITIAL_BOY_DATA: BiodataData = {
  gender: "boy",
  bismillahHeader: true,
  theme: "emerald",
  fullName: "Mohammed Farhan",
  birthDate: "14/08/1998",
  age: "28 years",
  height: "5 ft 10 in",
  maritalStatus: "Never Married",
  motherTongue: "Urdu",
  languages: "Urdu, English, Hindi",
  sect: "Sunni Hanafi (Practising)",
  namaz: "Prays 5 times daily, attends Jummah",
  deenPractice: "Follows Sunnah, halal lifestyle, reads Quran",
  education: "B.Tech in Computer Science",
  profession: "Senior Software Engineer",
  companyOrBusiness: "Leading Tech Firm",
  cityOfWork: "Bengaluru, Karnataka",
  fatherName: "Syed Abdul Rahman",
  fatherOccupation: "Retired Central Govt Employee",
  motherName: "Ayesha Begum",
  motherOccupation: "Homemaker",
  brothers: "1 Elder Brother (Married, Engineer in Dubai)",
  sisters: "1 Younger Sister (Pursuing M.Sc)",
  nativePlace: "Bengaluru, Karnataka",
  residenceCity: "Frazer Town, Bengaluru",
  waliName: "",
  waliRelation: "",
  partnerAgeRange: "22 to 26 years",
  partnerEducation: "Graduate / Professional",
  partnerLocation: "Bengaluru or South India (Flexible)",
  partnerValues: "Practising Muslimah, respectful family values, simple & honest",
  contactPerson: "Syed Abdul Rahman (Father)",
  contactNumber: "+91 9XXXX XXXXX",
  contactEmail: "family.contact@example.com",
};

const INITIAL_GIRL_DATA: BiodataData = {
  gender: "girl",
  bismillahHeader: true,
  theme: "emerald",
  fullName: "Zainab Fatima",
  birthDate: "21/05/2000",
  age: "26 years",
  height: "5 ft 4 in",
  maritalStatus: "Never Married",
  motherTongue: "Urdu",
  languages: "Urdu, English, Hindi",
  sect: "Sunni Hanafi",
  namaz: "Regular in 5 times prayer",
  deenPractice: "Observes Hijab, modest & values-driven lifestyle",
  education: "B.Com, M.Com (Finance)",
  profession: "Financial Analyst (Open to discuss after marriage)",
  companyOrBusiness: "Private Multinational Firm",
  cityOfWork: "Bengaluru",
  fatherName: "Dr. Mohammed Tariq",
  fatherOccupation: "Medical Practitioner",
  motherName: "Fatima Begum",
  motherOccupation: "Homemaker",
  brothers: "1 Younger Brother (Studying B.E.)",
  sisters: "2 Elder Sisters (Both Married and Settled)",
  nativePlace: "Bengaluru, Karnataka",
  residenceCity: "Cox Town, Bengaluru",
  waliName: "Dr. Mohammed Tariq",
  waliRelation: "Father",
  partnerAgeRange: "27 to 31 years",
  partnerEducation: "Well-educated (Engineering / Medical / MBA)",
  partnerLocation: "Bengaluru / Overseas NRI welcome",
  partnerValues: "Deen-conscious, non-smoker, respectable family background",
  contactPerson: "Dr. Mohammed Tariq (Father / Wali)",
  contactNumber: "+91 9XXXX XXXXX",
  contactEmail: "wali.contact@example.com",
};

export function BiodataMakerClient() {
  const [data, setData] = useState<BiodataData>(INITIAL_BOY_DATA);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const previewRef = useRef<HTMLDivElement>(null);

  const handleGenderChange = (newGender: Gender) => {
    if (newGender === "girl") {
      setData({ ...INITIAL_GIRL_DATA, theme: data.theme });
    } else {
      setData({ ...INITIAL_BOY_DATA, theme: data.theme });
    }
  };

  const handleInputChange = (field: keyof BiodataData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    if (data.gender === "boy") {
      setData({ ...INITIAL_BOY_DATA, theme: data.theme });
    } else {
      setData({ ...INITIAL_GIRL_DATA, theme: data.theme });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const generateWhatsAppText = () => {
    const isGirl = data.gender === "girl";
    return `*BIODATA FOR MUSLIM MARRIAGE*
${data.bismillahHeader ? "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\n" : ""}
━━━━━━━━━━━━━━━━━━━━━━
*PERSONAL DETAILS*
• *Name:* ${data.fullName}
• *Age / DOB:* ${data.age} (${data.birthDate})
• *Height:* ${data.height}
• *Marital Status:* ${data.maritalStatus}
• *Mother Tongue:* ${data.motherTongue}
• *Languages:* ${data.languages}
• *School of Thought / Maslak:* ${data.sect || "Sunni"}

*RELIGIOUS PRACTICE (DEEN)*
• *Salah / Namaz:* ${data.namaz}
• *Deen Practice:* ${data.deenPractice}

*EDUCATION & WORK*
• *Education:* ${data.education}
• *Profession:* ${data.profession}
• *Company / Business:* ${data.companyOrBusiness}
• *City of Work:* ${data.cityOfWork}

*FAMILY BACKGROUND*
• *Father:* ${data.fatherName} (${data.fatherOccupation})
• *Mother:* ${data.motherName} (${data.motherOccupation})
• *Brothers:* ${data.brothers}
• *Sisters:* ${data.sisters}
• *Native Place:* ${data.nativePlace}
• *Residence:* ${data.residenceCity}
${isGirl && data.waliName ? `• *Wali:* ${data.waliName} (${data.waliRelation})\n` : ""}
*PARTNER EXPECTATIONS*
• *Age Range:* ${data.partnerAgeRange}
• *Education:* ${data.partnerEducation}
• *Location:* ${data.partnerLocation}
• *Values:* ${data.partnerValues}

*CONTACT FOR PROPOSAL*
• *Contact Person:* ${data.contactPerson}
• *Phone / WhatsApp:* ${data.contactNumber}
${data.contactEmail ? `• *Email:* ${data.contactEmail}\n` : ""}
━━━━━━━━━━━━━━━━━━━━━━
_Created for free on HumNikah: https://www.humnikah.com/biodata-maker_`;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateWhatsAppText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Please copy text manually.");
    }
  };

  return (
    <div className="w-full">
      {/* Top Banner & Quick Controls */}
      <div className="bg-gradient-to-r from-brand-deep-green via-[#1c2921] to-brand-emerald text-white rounded-2xl p-5 sm:p-7 shadow-xl border border-brand-gold/30 mb-8 print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold mb-2">
              <Sparkles size={14} /> 100% Free Islamic Matrimonial Tool
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-playfair tracking-tight text-white">
              Online Muslim Marriage Biodata Generator
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-xl font-light">
              Create an elegant, Shariah-compliant marriage biodata for boy or girl in under 2 minutes. Instant preview, ready for WhatsApp and PDF print.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-gold hover:bg-[#d69f3d] text-brand-deep-green font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer size={16} /> Print / Download PDF
            </button>
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition-all active:scale-95 cursor-pointer"
              title="Copy formatted WhatsApp text"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-[#25D366]" /> Copied!
                </>
              ) : (
                <>
                  <Copy size={16} /> Copy for WhatsApp
                </>
              )}
            </button>
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs border border-white/10 transition-colors cursor-pointer"
              title="Reset with sample data"
            >
              <RefreshCw size={14} /> Sample
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="flex lg:hidden mt-5 pt-4 border-t border-white/10 gap-2">
          <button
            onClick={() => setActiveTab("edit")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === "edit"
                ? "bg-brand-gold text-brand-deep-green font-bold shadow"
                : "bg-white/10 text-white"
            }`}
          >
            <Edit3 size={14} /> Edit Biodata Form
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === "preview"
                ? "bg-brand-gold text-brand-deep-green font-bold shadow"
                : "bg-white/10 text-white"
            }`}
          >
            <Eye size={14} /> View Live Preview
          </button>
        </div>
      </div>

      {/* Main Grid: Form Left, Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: EDIT FORM CONTROLS                          */}
        {/* ========================================================= */}
        <div
          className={`lg:col-span-6 space-y-6 print:hidden ${
            activeTab === "preview" ? "hidden lg:block" : "block"
          }`}
        >
          {/* Card: Profile Type & Design Options */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/60 shadow-sm">
            <h3 className="text-sm font-bold text-brand-deep-green uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-brand-gold" /> 1. Choose Format &amp; Design
            </h3>

            {/* Gender Toggle */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-brand-charcoal mb-2">
                Creating Biodata For:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleGenderChange("boy")}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    data.gender === "boy"
                      ? "bg-brand-deep-green text-white border-brand-deep-green shadow-sm"
                      : "bg-brand-cream/50 text-brand-charcoal border-brand-border/70 hover:bg-brand-cream"
                  }`}
                >
                  <User size={16} /> Muslim Boy (Groom)
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderChange("girl")}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    data.gender === "girl"
                      ? "bg-brand-deep-green text-white border-brand-deep-green shadow-sm"
                      : "bg-brand-cream/50 text-brand-charcoal border-brand-border/70 hover:bg-brand-cream"
                  }`}
                >
                  <Heart size={16} /> Muslim Girl (Bride)
                </button>
              </div>
            </div>

            {/* Theme & Calligraphy Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-brand-border/40">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1.5">
                  Visual Theme:
                </label>
                <select
                  value={data.theme}
                  onChange={(e) => handleInputChange("theme", e.target.value as Theme)}
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/30 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald focus:border-transparent outline-none"
                >
                  <option value="emerald">Royal Emerald &amp; Gold</option>
                  <option value="ivory">Classic Ivory Parchment</option>
                  <option value="minimal">Modern Minimal Clean</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="bismillahToggle"
                  checked={data.bismillahHeader}
                  onChange={(e) => handleInputChange("bismillahHeader", e.target.checked)}
                  className="w-4 h-4 rounded text-brand-emerald focus:ring-brand-emerald border-brand-border cursor-pointer"
                />
                <label
                  htmlFor="bismillahToggle"
                  className="text-xs font-medium text-brand-charcoal cursor-pointer select-none"
                >
                  Include Arabic Bismillah Header
                </label>
              </div>
            </div>
          </div>

          {/* Card: Personal Details */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/60 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-brand-deep-green uppercase tracking-wider flex items-center gap-2">
              <User size={16} className="text-brand-gold" /> 2. Personal Information
            </h3>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Full Name or Initials <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="e.g. Mohammed Farhan or M. F."
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Age
                </label>
                <input
                  type="text"
                  value={data.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="e.g. 27 years"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={data.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  placeholder="DD/MM/YYYY"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Height
                </label>
                <input
                  type="text"
                  value={data.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  placeholder="e.g. 5 ft 8 in"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Marital Status
                </label>
                <select
                  value={data.maritalStatus}
                  onChange={(e) => handleInputChange("maritalStatus", e.target.value)}
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                >
                  <option value="Never Married">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed / Widower">Widowed / Widower</option>
                  <option value="Khula / Annulled">Khula / Annulled</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Mother Tongue
                </label>
                <input
                  type="text"
                  value={data.motherTongue}
                  onChange={(e) => handleInputChange("motherTongue", e.target.value)}
                  placeholder="e.g. Urdu / Tamil / Malayalam"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Languages Spoken
                </label>
                <input
                  type="text"
                  value={data.languages}
                  onChange={(e) => handleInputChange("languages", e.target.value)}
                  placeholder="e.g. Urdu, English, Hindi"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Maslak / Sect (Optional)
                </label>
                <input
                  type="text"
                  value={data.sect}
                  onChange={(e) => handleInputChange("sect", e.target.value)}
                  placeholder="e.g. Sunni Hanafi / Shafi'i / Ahle Hadees"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>
          </div>

          {/* Card: Deen & Religious Practice */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/60 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-brand-deep-green uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={16} className="text-brand-gold" /> 3. Religious Practice &amp; Deen
            </h3>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Salah / Namaz Habit
              </label>
              <input
                type="text"
                value={data.namaz}
                onChange={(e) => handleInputChange("namaz", e.target.value)}
                placeholder="e.g. Prays 5 times daily, attends Jummah"
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Islamic Lifestyle &amp; Values
              </label>
              <input
                type="text"
                value={data.deenPractice}
                onChange={(e) => handleInputChange("deenPractice", e.target.value)}
                placeholder={
                  data.gender === "boy"
                    ? "e.g. Keeps beard / follows Sunnah, halal income, reads Quran"
                    : "e.g. Observes Hijab / Abaya, modest, values-driven family life"
                }
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>
          </div>

          {/* Card: Education & Career */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/60 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-brand-deep-green uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={16} className="text-brand-gold" /> 4. Education &amp; Profession
            </h3>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Highest Education / Degree
              </label>
              <input
                type="text"
                value={data.education}
                onChange={(e) => handleInputChange("education", e.target.value)}
                placeholder="e.g. B.Tech (Computer Science), MBA, MBBS"
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Profession / Role
                </label>
                <input
                  type="text"
                  value={data.profession}
                  onChange={(e) => handleInputChange("profession", e.target.value)}
                  placeholder="e.g. Software Engineer / Doctor / Business"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Company / Business Name
                </label>
                <input
                  type="text"
                  value={data.companyOrBusiness}
                  onChange={(e) => handleInputChange("companyOrBusiness", e.target.value)}
                  placeholder="e.g. Private MNC or Family Business"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                City / Location of Work
              </label>
              <input
                type="text"
                value={data.cityOfWork}
                onChange={(e) => handleInputChange("cityOfWork", e.target.value)}
                placeholder="e.g. Bengaluru, Karnataka (or Dubai / Riyadh / Hyderabad)"
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>
          </div>

          {/* Card: Family Background */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/60 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-brand-deep-green uppercase tracking-wider flex items-center gap-2">
              <Users size={16} className="text-brand-gold" /> 5. Family Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Father&apos;s Name &amp; Occupation
                </label>
                <input
                  type="text"
                  value={data.fatherName}
                  onChange={(e) => handleInputChange("fatherName", e.target.value)}
                  placeholder="Father's Name"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none mb-1.5"
                />
                <input
                  type="text"
                  value={data.fatherOccupation}
                  onChange={(e) => handleInputChange("fatherOccupation", e.target.value)}
                  placeholder="Occupation (e.g. Businessman / Govt / Retired)"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Mother&apos;s Name &amp; Occupation
                </label>
                <input
                  type="text"
                  value={data.motherName}
                  onChange={(e) => handleInputChange("motherName", e.target.value)}
                  placeholder="Mother's Name"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none mb-1.5"
                />
                <input
                  type="text"
                  value={data.motherOccupation}
                  onChange={(e) => handleInputChange("motherOccupation", e.target.value)}
                  placeholder="Occupation (e.g. Homemaker / Teacher)"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Brothers
                </label>
                <input
                  type="text"
                  value={data.brothers}
                  onChange={(e) => handleInputChange("brothers", e.target.value)}
                  placeholder="e.g. 1 Elder Brother (Married)"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Sisters
                </label>
                <input
                  type="text"
                  value={data.sisters}
                  onChange={(e) => handleInputChange("sisters", e.target.value)}
                  placeholder="e.g. 1 Younger Sister (Unmarried)"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Native Place
                </label>
                <input
                  type="text"
                  value={data.nativePlace}
                  onChange={(e) => handleInputChange("nativePlace", e.target.value)}
                  placeholder="City / State"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Current Residence City &amp; Area
                </label>
                <input
                  type="text"
                  value={data.residenceCity}
                  onChange={(e) => handleInputChange("residenceCity", e.target.value)}
                  placeholder="e.g. Cox Town, Bengaluru"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>

            {/* Wali Section (Important for Sisters) */}
            {data.gender === "girl" && (
              <div className="p-3.5 bg-brand-cream/60 border border-brand-gold/40 rounded-xl space-y-2">
                <span className="text-xs font-bold text-brand-deep-green flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-brand-gold" /> Wali (Guardian) Details for Bride:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={data.waliName}
                    onChange={(e) => handleInputChange("waliName", e.target.value)}
                    placeholder="Wali's Full Name"
                    className="w-full text-xs rounded-lg border border-brand-border p-2 bg-white text-brand-charcoal outline-none"
                  />
                  <input
                    type="text"
                    value={data.waliRelation}
                    onChange={(e) => handleInputChange("waliRelation", e.target.value)}
                    placeholder="Relation (e.g. Father / Elder Brother)"
                    className="w-full text-xs rounded-lg border border-brand-border p-2 bg-white text-brand-charcoal outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Card: Partner Expectations */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/60 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-brand-deep-green uppercase tracking-wider flex items-center gap-2">
              <Compass size={16} className="text-brand-gold" /> 6. Partner Preferences
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Preferred Age Range
                </label>
                <input
                  type="text"
                  value={data.partnerAgeRange}
                  onChange={(e) => handleInputChange("partnerAgeRange", e.target.value)}
                  placeholder="e.g. 23 to 27 years"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Preferred Location
                </label>
                <input
                  type="text"
                  value={data.partnerLocation}
                  onChange={(e) => handleInputChange("partnerLocation", e.target.value)}
                  placeholder="e.g. Bengaluru / Karnataka / Open"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Preferred Education &amp; Career
              </label>
              <input
                type="text"
                value={data.partnerEducation}
                onChange={(e) => handleInputChange("partnerEducation", e.target.value)}
                placeholder="e.g. Graduate / Engineer / Doctor / Open minded"
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Religious Values &amp; Expectations
              </label>
              <input
                type="text"
                value={data.partnerValues}
                onChange={(e) => handleInputChange("partnerValues", e.target.value)}
                placeholder="e.g. Practising Muslim, respectful family, simple nikah"
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>
          </div>

          {/* Card: Contact Details */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border/60 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-brand-deep-green uppercase tracking-wider flex items-center gap-2">
              <PhoneCall size={16} className="text-brand-gold" /> 7. Family Contact Information
            </h3>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                Contact Person Name &amp; Relationship
              </label>
              <input
                type="text"
                value={data.contactPerson}
                onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                placeholder="e.g. Father or Elder Brother"
                className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="text"
                  value={data.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={data.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  placeholder="family@example.com"
                  className="w-full text-xs sm:text-sm rounded-xl border border-brand-border p-2.5 bg-brand-cream/20 text-brand-charcoal focus:ring-2 focus:ring-brand-emerald outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: LIVE PREVIEW & PRINT SHEET                  */}
        {/* ========================================================= */}
        <div
          className={`lg:col-span-6 sticky top-24 ${
            activeTab === "edit" ? "hidden lg:block" : "block"
          }`}
        >
          {/* Action Toolbar above preview */}
          <div className="flex items-center justify-between pb-3 px-1 print:hidden">
            <span className="text-xs font-bold text-brand-charcoal/70 uppercase tracking-wider flex items-center gap-1.5">
              <Eye size={14} className="text-brand-gold" /> Live Formatted Biodata Sheet
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-brand-gold text-brand-deep-green font-bold text-xs flex items-center gap-1 shadow-sm hover:brightness-105 cursor-pointer"
              >
                <Printer size={13} /> Print / PDF
              </button>
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg bg-brand-deep-green text-white font-medium text-xs flex items-center gap-1 shadow-sm hover:bg-brand-emerald cursor-pointer"
              >
                {copied ? <Check size={13} className="text-[#25D366]" /> : <Copy size={13} />} Copy
              </button>
            </div>
          </div>

          {/* THE PRINTABLE / PREVIEW DOCUMENT */}
          <div
            ref={previewRef}
            id="printable-biodata"
            className={`w-full rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${
              data.theme === "emerald"
                ? "bg-white border-[6px] border-double border-brand-emerald/80"
                : data.theme === "ivory"
                ? "bg-[#FCF9F2] border-[5px] border-double border-[#9E6C38]/70"
                : "bg-white border border-gray-300 shadow-md"
            }`}
          >
            {/* Inner Decorative Frame Border */}
            <div
              className={`p-6 sm:p-8 ${
                data.theme === "emerald"
                  ? "border border-brand-gold/40 m-2 rounded-xl"
                  : data.theme === "ivory"
                  ? "border border-[#C58D5F]/40 m-2 rounded-xl"
                  : "m-0"
              }`}
            >
              {/* Header: Bismillah & Title */}
              <div className="text-center pb-5 mb-5 border-b border-brand-border/60">
                {data.bismillahHeader && (
                  <div className="font-amiri text-2xl sm:text-3xl text-brand-emerald mb-2 tracking-wide font-normal select-none">
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                  </div>
                )}
                <h2 className="text-lg sm:text-xl font-bold tracking-widest uppercase font-playfair text-brand-deep-green">
                  Muslim Marriage Biodata
                </h2>
                <p className="text-[11px] sm:text-xs text-brand-gold font-semibold uppercase tracking-[0.25em] mt-0.5">
                  {data.gender === "boy" ? "Groom Profile" : "Bride Profile"}
                </p>
              </div>

              {/* Biodata Body: Sections */}
              <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed text-brand-charcoal">
                
                {/* 1. Personal Details */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider pb-1 mb-2 border-b border-brand-gold/30 text-brand-deep-green flex items-center justify-between">
                    <span>Personal Details</span>
                    <span className="text-[10px] font-normal text-gray-500 lowercase">
                      {data.maritalStatus}
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    <div>
                      <span className="text-gray-500 font-medium">Name:</span>{" "}
                      <strong className="text-brand-charcoal font-semibold">{data.fullName || "—"}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Age / DOB:</span>{" "}
                      <span className="font-medium">{data.age || "—"} ({data.birthDate || "—"})</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Height:</span>{" "}
                      <span className="font-medium">{data.height || "—"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Marital Status:</span>{" "}
                      <span className="font-medium">{data.maritalStatus || "—"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Mother Tongue:</span>{" "}
                      <span className="font-medium">{data.motherTongue || "—"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Languages:</span>{" "}
                      <span className="font-medium">{data.languages || "—"}</span>
                    </div>
                    {data.sect && (
                      <div className="sm:col-span-2">
                        <span className="text-gray-500 font-medium">Maslak / School:</span>{" "}
                        <span className="font-medium">{data.sect}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Religious Practice */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider pb-1 mb-2 border-b border-brand-gold/30 text-brand-deep-green">
                    Religious Practice (Deen)
                  </h4>
                  <div className="space-y-1">
                    <div>
                      <span className="text-gray-500 font-medium">Salah / Prayer:</span>{" "}
                      <span className="font-medium">{data.namaz || "—"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Deen Lifestyle:</span>{" "}
                      <span className="font-medium">{data.deenPractice || "—"}</span>
                    </div>
                  </div>
                </div>

                {/* 3. Education & Profession */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider pb-1 mb-2 border-b border-brand-gold/30 text-brand-deep-green">
                    Education &amp; Profession
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    <div className="sm:col-span-2">
                      <span className="text-gray-500 font-medium">Highest Education:</span>{" "}
                      <strong className="text-brand-charcoal font-semibold">{data.education || "—"}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Profession:</span>{" "}
                      <span className="font-medium">{data.profession || "—"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Organization / Firm:</span>{" "}
                      <span className="font-medium">{data.companyOrBusiness || "—"}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-gray-500 font-medium">Working City:</span>{" "}
                      <span className="font-medium">{data.cityOfWork || "—"}</span>
                    </div>
                  </div>
                </div>

                {/* 4. Family Details */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider pb-1 mb-2 border-b border-brand-gold/30 text-brand-deep-green">
                    Family Background
                  </h4>
                  <div className="space-y-1.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <div>
                        <span className="text-gray-500 font-medium">Father:</span>{" "}
                        <span className="font-medium">{data.fatherName} ({data.fatherOccupation})</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Mother:</span>{" "}
                        <span className="font-medium">{data.motherName} ({data.motherOccupation})</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <div>
                        <span className="text-gray-500 font-medium">Brothers:</span>{" "}
                        <span className="font-medium">{data.brothers || "None"}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Sisters:</span>{" "}
                        <span className="font-medium">{data.sisters || "None"}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <div>
                        <span className="text-gray-500 font-medium">Native Place:</span>{" "}
                        <span className="font-medium">{data.nativePlace || "—"}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Current Residence:</span>{" "}
                        <span className="font-medium">{data.residenceCity || "—"}</span>
                      </div>
                    </div>
                    {data.gender === "girl" && data.waliName && (
                      <div className="pt-1 text-brand-deep-green font-medium">
                        <span className="text-gray-500">Wali (Guardian):</span>{" "}
                        <strong>{data.waliName}</strong> ({data.waliRelation})
                      </div>
                    )}
                  </div>
                </div>

                {/* 5. Partner Expectations */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider pb-1 mb-2 border-b border-brand-gold/30 text-brand-deep-green">
                    Partner Preferences
                  </h4>
                  <div className="space-y-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <div>
                        <span className="text-gray-500 font-medium">Age Preference:</span>{" "}
                        <span className="font-medium">{data.partnerAgeRange || "—"}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Location:</span>{" "}
                        <span className="font-medium">{data.partnerLocation || "—"}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Education / Work:</span>{" "}
                      <span className="font-medium">{data.partnerEducation || "—"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Values:</span>{" "}
                      <span className="font-medium">{data.partnerValues || "—"}</span>
                    </div>
                  </div>
                </div>

                {/* 6. Contact Section */}
                <div className="bg-brand-cream/50 p-3 rounded-xl border border-brand-border/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1 text-brand-deep-green">
                    Contact for Proposal
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    <div>
                      <span className="text-gray-600 font-medium">Contact Person:</span>{" "}
                      <strong className="text-brand-charcoal">{data.contactPerson || "Family / Guardian"}</strong>
                    </div>
                    <div>
                      <span className="text-gray-600 font-medium">Phone / WhatsApp:</span>{" "}
                      <strong className="text-brand-charcoal">{data.contactNumber || "—"}</strong>
                    </div>
                    {data.contactEmail && (
                      <div className="sm:col-span-2">
                        <span className="text-gray-600 font-medium">Email:</span>{" "}
                        <span className="font-medium">{data.contactEmail}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Biodata Footer Note */}
              <div className="text-center pt-4 mt-4 border-t border-brand-border/40 text-[10px] text-gray-500">
                Created with HumNikah Muslim Matrimonial · Verified &amp; Private introductions
              </div>
            </div>
          </div>

          {/* Direct CTA card under preview - Lead Funnel */}
          <div className="bg-gradient-to-r from-brand-cream via-brand-beige/60 to-brand-cream border-2 border-brand-gold/50 rounded-2xl p-4 sm:p-5 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold tracking-wide uppercase">
                  Step 2 · Free Verification
                </span>
                <p className="text-xs sm:text-sm font-bold text-brand-deep-green">
                  Download, Then Get It Verified
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-charcoal/85 leading-relaxed">
                Submitting your biodata to HumNikah is free. Send your saved biodata to our verified matchmaking team on WhatsApp for free screening and confidential family introductions.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <a
                href="/whatsapp?src=biodata-maker-verify"
                rel="nofollow noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-sm"
              >
                Verify on WhatsApp &rarr;
              </a>
              <Link
                href="/submit-biodata"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3.5 py-2.5 rounded-xl bg-[#1D184C] hover:bg-brand-gold hover:text-brand-charcoal text-white text-xs font-bold transition-colors shadow-sm"
              >
                Submit Online Free
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* PRINT STYLESHEET OVERRIDE */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-biodata,
          #printable-biodata * {
            visibility: visible;
          }
          #printable-biodata {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            border-width: 2px !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            background-color: white !important;
          }
          @page {
            size: A4 portrait;
            margin: 1.2cm;
          }
        }
      `}</style>
    </div>
  );
}
