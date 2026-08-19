import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { HeartHandshake } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function PartnerPreferences({ register, errors }: Props) {
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-9 h-9 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <HeartHandshake size={18} className="text-brand-gold" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-playfair text-brand-charcoal">
          5. Partner Preferences
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <Input 
          label="Preferred Age Range" 
          {...register('prefAgeRange')} 
          error={errors.prefAgeRange?.message} 
          placeholder="e.g., 25 - 30 years" 
        />
        
        <Input 
          label="Preferred Location" 
          {...register('prefLocation')} 
          error={errors.prefLocation?.message} 
          placeholder="e.g., Must live in USA / Canada" 
        />
        
        <Input 
          label="Education Preference" 
          {...register('prefEducation')} 
          error={errors.prefEducation?.message} 
          placeholder="e.g., Minimum Bachelors" 
        />
        
        <Input 
          label="Profession Preference" 
          {...register('prefProfession')} 
          error={errors.prefProfession?.message} 
          placeholder="e.g., Open / Professional preferred" 
        />
      </div>

      <div className="pt-2">
        <Textarea 
          label="Other Expectations" 
          {...register('prefOther')} 
          error={errors.prefOther?.message} 
          placeholder="Any other specific expectations or requirements..."
          className="min-h-[110px]"
        />
      </div>
    </div>
  );
}
