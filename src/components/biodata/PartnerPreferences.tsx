import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { HeartHandshake } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function PartnerPreferences({ register, errors }: Props) {
  return (
    <div className="space-y-5 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <HeartHandshake size={16} className="text-brand-gold" />
        </div>
        <h3 className="text-base sm:text-lg font-bold font-playfair text-brand-charcoal">
          5. Partner Preferences
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        <Input 
          label="Preferred Age Range" 
          {...register('prefAgeRange')} 
          error={errors.prefAgeRange?.message} 
          placeholder="e.g. 23 - 28 years" 
        />
        
        <Input 
          label="Preferred Location" 
          {...register('prefLocation')} 
          error={errors.prefLocation?.message} 
          placeholder="e.g. Bangalore / Karnataka / Any" 
        />
        
        <Input 
          label="Education / Profession Preference" 
          {...register('prefEducation')} 
          error={errors.prefEducation?.message} 
          placeholder="e.g. Graduate / Engineer / Open" 
        />
      </div>
    </div>
  );
}
