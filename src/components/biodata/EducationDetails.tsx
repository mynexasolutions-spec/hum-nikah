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
    <div className="space-y-5 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <GraduationCap size={16} className="text-brand-gold" />
        </div>
        <h3 className="text-base sm:text-lg font-bold font-playfair text-brand-charcoal">
          2. Education &amp; Career
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <Input 
          label="Highest Education" 
          {...register('highestEducation')} 
          error={errors.highestEducation?.message} 
          placeholder="e.g. B.Tech, MBA, MBBS, Graduate" 
        />

        <Input 
          label="Profession / Occupation" 
          {...register('profession')} 
          error={errors.profession?.message} 
          placeholder="e.g. Software Engineer, Doctor, Business" 
        />

        <div className="md:col-span-2">
          <Input 
            label="Annual Income / Income Range (Optional)" 
            {...register('incomeRange')} 
            error={errors.incomeRange?.message} 
            placeholder="e.g. ₹6 - 10 Lakhs / ₹15+ Lakhs / $60k+" 
          />
        </div>
      </div>
    </div>
  );
}
