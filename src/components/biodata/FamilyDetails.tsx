import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { ModernSelect } from '../ui/ModernSelect';
import { Home, Users } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  setValue: UseFormSetValue<BiodataFormValues>;
  watch: UseFormWatch<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function FamilyDetails({ register, setValue, watch, errors }: Props) {
  const familyTypeValue = watch('familyType') || '';

  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-9 h-9 rounded-xl bg-[#062E29]/10 text-[#062E29] flex items-center justify-center font-bold text-sm border border-[#062E29]/20">
          <Home size={18} className="text-brand-gold" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-playfair text-brand-charcoal">
          3. Family Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <Input 
          label="Father's Occupation" 
          {...register('fatherOccupation')} 
          error={errors.fatherOccupation?.message} 
          placeholder="e.g., Business / Retired" 
        />
        
        <Input 
          label="Mother's Occupation" 
          {...register('motherOccupation')} 
          error={errors.motherOccupation?.message} 
          placeholder="e.g., Homemaker / Teacher" 
        />
        
        <Input 
          label="Number of Siblings" 
          {...register('siblings')} 
          error={errors.siblings?.message} 
          placeholder="e.g., 2 Brothers, 1 Sister" 
        />
        
        <ModernSelect
          label="Family Type"
          icon={<Users size={18} />}
          placeholder="Select Family Type"
          value={familyTypeValue}
          onChange={(val) => setValue('familyType', val as any, { shouldValidate: true })}
          error={errors.familyType?.message}
          options={[
            { value: 'Nuclear', label: 'Nuclear Family' },
            { value: 'Joint', label: 'Joint Family' },
          ]}
        />

        <Input 
          label="Family Location (City/Country)" 
          {...register('familyLocation')} 
          error={errors.familyLocation?.message} 
          placeholder="e.g., Karachi, Pakistan" 
        />
      </div>
    </div>
  );
}
