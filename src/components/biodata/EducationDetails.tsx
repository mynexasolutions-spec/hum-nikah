import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { GraduationCap } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function EducationDetails({ register, errors }: Props) {
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-9 h-9 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <GraduationCap size={18} className="text-brand-gold" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-playfair text-brand-charcoal">
          2. Education &amp; Profession
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <Input 
          label="Highest Education" 
          {...register('highestEducation')} 
          error={errors.highestEducation?.message} 
          placeholder="e.g., Masters in Computer Science" 
        />

        <Input 
          label="Field of Study" 
          {...register('fieldOfStudy')} 
          error={errors.fieldOfStudy?.message} 
          placeholder="e.g., Software Engineering" 
        />

        <Input 
          label="Profession" 
          {...register('profession')} 
          error={errors.profession?.message} 
          placeholder="e.g., Software Engineer / Business" 
        />

        <Input 
          label="Company / Organization" 
          {...register('company')} 
          error={errors.company?.message} 
          placeholder="Optional" 
        />

        <Input 
          label="Income Range" 
          {...register('incomeRange')} 
          error={errors.incomeRange?.message} 
          placeholder="Optional, e.g., $50k - $70k" 
        />
      </div>
    </div>
  );
}
