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

export function BiodataForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      // API call to submit biodata will go here
      const res = await fetch('/api/biodata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Failed to submit biodata');
      }
    } catch (error) {
      console.error(error);
      alert('There was an error submitting your biodata. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-cream rounded-3xl p-8 md:p-16 text-center max-w-3xl mx-auto shadow-sm border border-brand-beige">
        <div className="w-20 h-20 bg-brand-emerald rounded-full flex items-center justify-center mx-auto mb-6 text-white">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mb-4">
          Your biodata has been submitted successfully.
        </h2>
        <p className="text-brand-secondary text-lg mb-8 max-w-lg mx-auto">
          JazakAllah Khair for trusting HumNikah. Our team will review your submission carefully. You will receive an email once your profile is approved.
        </p>
        <Button onClick={() => window.location.href = '/'} variant="outline">
          Return to Homepage
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <PersonalDetails register={register} setValue={setValue} watch={watch} errors={errors} />
      <EducationDetails register={register} errors={errors} />
      <FamilyDetails register={register} setValue={setValue} watch={watch} errors={errors} />
      <ReligiousDetails register={register} setValue={setValue} watch={watch} errors={errors} />
      <PartnerPreferences register={register} errors={errors} />
      <ContactDetails register={register} setValue={setValue} watch={watch} errors={errors} />
      
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
