"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { biodataSchema, BiodataFormValues } from "@/lib/validations";
import { BiodataUploadDropzone } from "./BiodataUploadDropzone";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  HelpCircle
} from "lucide-react";

export function BiodataForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadedDocUrl, setUploadedDocUrl] = useState<string>("");
  const [uploadedDocName, setUploadedDocName] = useState<string>("");
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BiodataFormValues>({
    resolver: zodResolver(biodataSchema),
    defaultValues: {
      maritalStatus: "Never Married",
      gender: "Male",
      country: "India",
      contactMethod: "WhatsApp",
    },
  });

  const selectedGender = watch("gender");
  const selectedMaritalStatus = watch("maritalStatus");

  const onUploadSuccess = (url: string, filename: string) => {
    setUploadedDocUrl(url);
    setUploadedDocName(filename);
    setValue("biodataDocUrl", url);
    setValue("biodataDocName", filename);
  };

  const onRemoveUpload = () => {
    setUploadedDocUrl("");
    setUploadedDocName("");
    setValue("biodataDocUrl", "");
    setValue("biodataDocName", "");
  };

  const onSubmit = async (data: BiodataFormValues) => {
    setIsSubmitting(true);
    try {
      const submissionData = {
        ...data,
        biodataDocUrl: uploadedDocUrl || undefined,
        biodataDocName: uploadedDocName || undefined,
        profileImageUrl: uploadedDocUrl || undefined,
      };

      const res = await fetch("/api/biodata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await res.json().catch(() => null);
        console.error("API Error Response:", errorData);
        if (errorData?.details) {
          throw new Error("Validation Error: " + JSON.stringify(errorData.details));
        }
        throw new Error(errorData?.error || "Failed to submit biodata");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Please try again.";
      alert(`There was an error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center max-w-2xl mx-auto border border-brand-border/60 shadow-[0_4px_20px_rgba(29,24,76,0.04)] animate-fade-in">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1D184C] via-[#651514] to-[#1D184C] rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 text-white shadow-xl shadow-[#1D184C]/25">
          <CheckCircle2 size={36} className="text-[#F3B979]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-3 sm:mb-4">
          Biodata Submitted Successfully!
        </h2>
        <p className="text-xs sm:text-base text-slate-500 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
          JazakAllah Khair for trusting HumNikah. Our team will review your biodata carefully and connect with you shortly.
        </p>

        {uploadedDocName && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium mb-6">
            <FileText size={16} className="text-emerald-600" />
            <span>Document attached: <strong className="font-semibold">{uploadedDocName}</strong></span>
          </div>
        )}

        <div>
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center font-medium border text-xs sm:text-sm px-7 sm:px-9 py-3 rounded-xl border-brand-gold/40 text-brand-charcoal hover:text-white hover:bg-[#1D184C] transition-all bg-white shadow-xs cursor-pointer"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Header Info Banner */}
      <div className="bg-gradient-to-r from-brand-cream/80 via-white to-brand-cream/80 border border-brand-gold/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-playfair font-bold text-brand-charcoal flex items-center gap-2">
            <Sparkles size={18} className="text-brand-gold" />
            Quick Matrimonial Registration
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Have a ready biodata? Simply upload it below and enter your contact details to get started!
          </p>
        </div>
        <span className="shrink-0 px-3 py-1 rounded-full bg-brand-gold/20 text-[#1D184C] font-semibold text-xs uppercase tracking-wider">
          Fast &amp; Private
        </span>
      </div>

      {/* STEP 1: UPLOAD BIODATA DOCUMENT (Primary Option) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm sm:text-base font-playfair font-bold text-brand-charcoal flex items-center gap-2">
            <FileText size={18} className="text-brand-gold" />
            Upload Your Biodata Document (Optional but Recommended)
          </label>
          <span className="text-xs text-slate-400">PDF, JPG, PNG, DOC</span>
        </div>

        <p className="text-xs text-slate-500 font-light">
          If you have a ready-made bio-data or CV, upload it here. You won&apos;t need to type lengthy details!
        </p>

        <BiodataUploadDropzone
          onUploadSuccess={onUploadSuccess}
          onRemove={onRemoveUpload}
          uploadedUrl={uploadedDocUrl}
          uploadedName={uploadedDocName}
        />
      </div>

      {/* STEP 2: ESSENTIAL CANDIDATE INFORMATION */}
      <div className="pt-4 border-t border-slate-100 space-y-6">
        <h3 className="text-base sm:text-lg font-playfair font-bold text-brand-charcoal flex items-center gap-2">
          <User size={18} className="text-brand-gold" />
          Candidate Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <User size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
              <input
                type="text"
                placeholder="Candidate's full name"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm outline-none transition-all shadow-xs"
                {...register("fullName")}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Gender Selector (Pills) */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["Male", "Female"] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setValue("gender", g)}
                  className={`py-3 px-4 rounded-2xl font-semibold text-sm transition-all border flex items-center justify-center gap-2 cursor-pointer ${
                    selectedGender === g
                      ? "bg-[#1D184C] text-white border-[#1D184C] shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-brand-gold/50"
                  }`}
                >
                  <span>{g === "Male" ? "Male (Groom)" : "Female (Bride)"}</span>
                  {selectedGender === g && <CheckCircle2 size={16} className="text-brand-gold" />}
                </button>
              ))}
            </div>
            {errors.gender && (
              <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <Calendar size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
              <input
                type="date"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm outline-none transition-all shadow-xs"
                {...register("dateOfBirth")}
              />
            </div>
            {errors.dateOfBirth && (
              <p className="mt-1 text-xs text-red-500">{errors.dateOfBirth.message}</p>
            )}
          </div>

          {/* Marital Status */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Marital Status <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <Heart size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
              <select
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm outline-none transition-all shadow-xs cursor-pointer appearance-none"
                {...register("maritalStatus")}
              >
                <option value="Never Married">Never Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="Annulled">Annulled</option>
              </select>
            </div>
          </div>

          {/* City / Location */}
          <div className="sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Current City &amp; State <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <MapPin size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. Bangalore, Karnataka or Mumbai, Maharashtra"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm outline-none transition-all shadow-xs"
                {...register("city")}
              />
            </div>
            {errors.city && (
              <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* STEP 3: CONTACT INFORMATION */}
      <div className="pt-4 border-t border-slate-100 space-y-6">
        <h3 className="text-base sm:text-lg font-playfair font-bold text-brand-charcoal flex items-center gap-2">
          <Phone size={18} className="text-brand-gold" />
          Contact &amp; Guardian Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone / WhatsApp */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Phone / WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <Phone size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
              <input
                type="tel"
                placeholder="e.g. +91 9876543210"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm outline-none transition-all shadow-xs"
                {...register("phone")}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative flex items-center">
              <Mail size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-charcoal text-sm outline-none transition-all shadow-xs"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* OPTIONAL TOGGLE: Additional Details & Education */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowOptionalFields(!showOptionalFields)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-gold hover:text-[#1D184C] transition-colors cursor-pointer"
        >
          <span>{showOptionalFields ? "- Hide Extra Background Details" : "+ Add Education, Profession & Partner Preferences (Optional)"}</span>
        </button>

        {showOptionalFields && (
          <div className="mt-4 p-5 sm:p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-4 animate-in fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Highest Education
                </label>
                <div className="relative flex items-center">
                  <GraduationCap size={16} className="absolute left-3 text-brand-gold pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. B.Tech / MBA / Masters"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm outline-none"
                    {...register("highestEducation")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Profession / Job Title
                </label>
                <div className="relative flex items-center">
                  <Briefcase size={16} className="absolute left-3 text-brand-gold pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer / Business"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm outline-none"
                    {...register("profession")}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Brief Introduction or Partner Expectations
              </label>
              <textarea
                rows={3}
                placeholder="Share a few words about yourself, religious outlook, or preferences..."
                className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm outline-none resize-none"
                {...register("shortIntro")}
              />
            </div>
          </div>
        )}
      </div>

      {/* CONSENT CHECKBOX */}
      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-start gap-3 bg-slate-50/90 p-4 rounded-2xl border border-slate-200/80">
          <div className="flex items-center h-5 mt-0.5">
            <input
              id="consent"
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-[#1D184C] focus:ring-brand-gold cursor-pointer"
              {...register("consent")}
            />
          </div>
          <div className="text-xs sm:text-sm">
            <label htmlFor="consent" className="font-semibold text-brand-charcoal cursor-pointer">
              Terms &amp; Privacy Consent <span className="text-red-500">*</span>
            </label>
            <p className="text-slate-500 font-light mt-0.5">
              I confirm that the provided details and attached biodata are genuine and accurate. I agree to HumNikah&apos;s Privacy Policy and verification terms.
            </p>
            {errors.consent && (
              <p className="mt-1 text-xs text-red-500 font-semibold">{errors.consent.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="pt-2 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[260px] inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1D184C] via-[#651514] to-[#1D184C] hover:from-[#141038] hover:to-[#141038] text-white font-bold text-base rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 border border-brand-gold/40 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
        >
          <span>{isSubmitting ? "Submitting Biodata..." : "Submit My Biodata"}</span>
          <ArrowRight size={18} className="text-brand-gold" />
        </button>
      </div>
    </form>
  );
}
