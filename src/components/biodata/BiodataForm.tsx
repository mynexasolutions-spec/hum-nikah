"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { biodataSchema, BiodataFormValues } from '@/lib/validations';
import { PersonalDetails } from './PersonalDetails';
import { EducationDetails } from './EducationDetails';
import { FamilyDetails } from './FamilyDetails';
import { ReligiousDetails } from './ReligiousDetails';
import { PartnerPreferences } from './PartnerPreferences';
import { ContactDetails } from './ContactDetails';
import { Button } from '../ui/Button';
import { uploadImage } from '@/app/admin/blogs/actions';

export function BiodataForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BiodataFormValues>({
    resolver: zodResolver(biodataSchema),
  });

  const onSubmit = async (data: BiodataFormValues) => {
    setIsSubmitting(true);
    try {
      let profileImageUrl = "";

      if (profileImageFile) {
        const formData = new FormData();
        formData.append("file", profileImageFile);
        profileImageUrl = (await uploadImage(formData)) as string;
      }

      const submissionData = {
        ...data,
        profileImageUrl: profileImageUrl || undefined
      };

      // API call to submit biodata will go here
      const res = await fetch('/api/biodata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        throw new Error(errorData?.error || 'Failed to submit biodata');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Please try again.';
      alert(`There was an error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center max-w-2xl mx-auto border border-brand-border/60 shadow-[0_4px_20px_rgba(6,46,41,0.03)]">
        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-[#062e29] to-[#0a4d44] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white shadow-lg shadow-[#062e29]/20">
          <svg className="w-7 h-7 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-3 sm:mb-4">
          Biodata Submitted Successfully!
        </h2>
        <p className="text-xs sm:text-base text-slate-500 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
          JazakAllah Khair for trusting HumNikah. Our team will review your submission carefully and contact you soon.
        </p>
        <button 
          onClick={() => window.location.href = '/'} 
          className="inline-flex items-center justify-center font-medium border text-xs sm:text-sm px-6 sm:px-8 py-2 sm:py-2.5 rounded-xl border-brand-border/80 text-brand-charcoal hover:text-black hover:border-brand-charcoal transition-colors bg-white"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Header Badge inside card (Now hidden on success) */}
      <div className="text-center mb-8 pb-6 border-b border-slate-100">
        <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal">
          Biodata Registration Form
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">
          Complete all sections below to generate your official HumNikah profile.
        </p>
      </div>

      <PersonalDetails register={register} setValue={setValue} watch={watch} errors={errors} />
      <EducationDetails register={register} errors={errors} />
      <FamilyDetails register={register} setValue={setValue} watch={watch} errors={errors} />
      <ReligiousDetails register={register} setValue={setValue} watch={watch} errors={errors} />
      <PartnerPreferences register={register} errors={errors} />
      <ContactDetails register={register} setValue={setValue} watch={watch} errors={errors} onImageSelect={setProfileImageFile} />
      
      {/* Consent Section */}
      <div className="pt-8 border-t border-slate-200">
        <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
          <div className="flex items-center h-5 mt-0.5">
            <input
              id="consent"
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-[#062E29] focus:ring-brand-gold cursor-pointer"
              {...register('consent')}
            />
          </div>
          <div className="text-xs sm:text-sm">
            <label htmlFor="consent" className="font-semibold text-brand-charcoal cursor-pointer">
              Terms &amp; Privacy Consent
            </label>
            <p className="text-slate-500 font-light mt-0.5">
              I confirm that all information provided is genuine and accurate. I agree to HumNikah&apos;s Privacy Policy and Terms &amp; Conditions.
            </p>
            {errors.consent && (
              <p className="mt-1 text-red-500 font-semibold">{errors.consent.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Centered Luxury Submit Button */}
      <div className="pt-4 flex justify-center">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#062e29] via-[#0b4840] to-[#062e29] hover:from-[#083b34] hover:to-[#083b34] text-white font-semibold text-base rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 border border-brand-gold/30 cursor-pointer"
        >
          <span>{isSubmitting ? "Submitting Biodata..." : "Submit My Biodata"}</span>
        </button>
      </div>
    </form>
  );
}
