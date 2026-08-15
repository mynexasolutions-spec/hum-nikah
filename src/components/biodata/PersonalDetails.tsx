import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { ModernSelect } from '../ui/ModernSelect';
import { ModernDatePicker } from '../ui/ModernDatePicker';
import { Users, HeartHandshake, User, MapPin, Globe, Compass } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  setValue: UseFormSetValue<BiodataFormValues>;
  watch: UseFormWatch<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function PersonalDetails({ register, setValue, watch, errors }: Props) {
  const genderValue = watch('gender') || '';
  const maritalStatusValue = watch('maritalStatus') || '';
  const dobValue = watch('dateOfBirth') || '';

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-9 h-9 rounded-xl bg-[#062E29]/10 text-[#062E29] flex items-center justify-center font-bold text-sm border border-[#062E29]/20">
          <User size={18} className="text-brand-gold" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-playfair text-brand-charcoal">
          1. Personal Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <Input 
          label="Full Name" 
          {...register('fullName')} 
          error={errors.fullName?.message} 
          placeholder="Enter your full name" 
        />

        <ModernSelect
          label="Gender"
          icon={<Users size={18} />}
          placeholder="Select Gender"
          value={genderValue}
          onChange={(val) => setValue('gender', val as any, { shouldValidate: true })}
          error={errors.gender?.message}
          options={[
            { value: 'Male', label: 'Male (Groom)' },
            { value: 'Female', label: 'Female (Bride)' },
          ]}
        />

        <ModernDatePicker
          label="Date of Birth"
          value={dobValue}
          onChange={(val) => setValue('dateOfBirth', val, { shouldValidate: true })}
          placeholder="Select Date of Birth"
          error={errors.dateOfBirth?.message}
        />

        <ModernSelect
          label="Marital Status"
          icon={<HeartHandshake size={18} />}
          placeholder="Select Status"
          value={maritalStatusValue}
          onChange={(val) => setValue('maritalStatus', val as any, { shouldValidate: true })}
          error={errors.maritalStatus?.message}
          options={[
            { value: 'Never Married', label: 'Never Married' },
            { value: 'Divorced', label: 'Divorced' },
            { value: 'Widowed', label: 'Widowed' },
            { value: 'Separated', label: 'Separated' },
            { value: 'Annulled', label: 'Annulled' },
          ]}
        />

        <Input 
          label="Height (e.g., 5'8&quot;)" 
          {...register('height')} 
          error={errors.height?.message} 
          placeholder="e.g., 5'8&quot;" 
        />

        <Input 
          label="City" 
          {...register('city')} 
          error={errors.city?.message} 
          placeholder="Current city" 
        />

        <Input 
          label="State / Province" 
          {...register('state')} 
          error={errors.state?.message} 
          placeholder="Current state" 
        />

        <Input 
          label="Country" 
          {...register('country')} 
          error={errors.country?.message} 
          placeholder="Current country" 
        />
      </div>
    </div>
  );
}
