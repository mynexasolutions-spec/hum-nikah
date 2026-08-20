import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { ModernSelect } from '../ui/ModernSelect';
import { ModernDatePicker } from '../ui/ModernDatePicker';
import { Users, HeartHandshake, User } from 'lucide-react';

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
    <div className="space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <User size={16} className="text-brand-gold" />
        </div>
        <h3 className="text-base sm:text-lg font-bold font-playfair text-brand-charcoal">
          1. Personal Details
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <Input 
          label="Full Name" 
          {...register('fullName')} 
          error={errors.fullName?.message} 
          placeholder="Enter your full name" 
        />

        <ModernSelect
          label="Gender"
          icon={<Users size={16} />}
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
          icon={<HeartHandshake size={16} />}
          placeholder="Select Status"
          value={maritalStatusValue}
          onChange={(val) => setValue('maritalStatus', val as any, { shouldValidate: true })}
          error={errors.maritalStatus?.message}
          options={[
            { value: 'Never Married', label: 'Never Married' },
            { value: 'Divorced', label: 'Divorced' },
            { value: 'Widowed', label: 'Widowed' },
            { value: 'Separated', label: 'Separated' },
          ]}
        />

        <Input 
          label="Height (e.g. 5'8&quot;)" 
          {...register('height')} 
          error={errors.height?.message} 
          placeholder="e.g. 5'8&quot;" 
        />

        <Input 
          label="City / State" 
          {...register('city')} 
          error={errors.city?.message} 
          placeholder="e.g. Bangalore, Karnataka" 
        />
      </div>
    </div>
  );
}
