import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Textarea } from '../ui/Textarea';
import { ModernSelect } from '../ui/ModernSelect';
import { BookOpen, Sparkles } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  setValue: UseFormSetValue<BiodataFormValues>;
  watch: UseFormWatch<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function ReligiousDetails({ register, setValue, watch, errors }: Props) {
  const religiousPracticeValue = watch('religiousPractice') || '';
  const prayerPracticeValue = watch('prayerPractice') || '';

  return (
    <div className="space-y-5 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <BookOpen size={16} className="text-brand-gold" />
        </div>
        <h3 className="text-base sm:text-lg font-bold font-playfair text-brand-charcoal">
          4. Religious &amp; Personal Background
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <ModernSelect
          label="Religious Practice"
          icon={<BookOpen size={16} />}
          placeholder="Select Level"
          value={religiousPracticeValue}
          onChange={(val) => setValue('religiousPractice', val as any, { shouldValidate: true })}
          error={errors.religiousPractice?.message}
          options={[
            { value: 'Very Practicing', label: 'Very Practicing' },
            { value: 'Practicing', label: 'Practicing' },
            { value: 'Moderately Practicing', label: 'Moderately Practicing' },
          ]}
        />

        <ModernSelect
          label="Prayer Practice"
          icon={<Sparkles size={16} />}
          placeholder="Select Prayer Practice"
          value={prayerPracticeValue}
          onChange={(val) => setValue('prayerPractice', val as any, { shouldValidate: true })}
          error={errors.prayerPractice?.message}
          options={[
            { value: 'Always Pray (5 Times Daily)', label: 'Always Pray (5 Times Daily)' },
            { value: 'Sometimes Pray', label: 'Sometimes Pray' },
            { value: 'Trying to be regular', label: 'Trying to be regular' },
          ]}
        />
      </div>

      <div className="pt-1">
        <Textarea 
          label="About Yourself &amp; Family (Brief Intro) / Interests &amp; Hobbies" 
          {...register('shortIntro')} 
          error={errors.shortIntro?.message} 
          placeholder="Write a few lines about your nature, values, hobbies, and family background..."
          className="min-h-[90px]"
        />
      </div>
    </div>
  );
}
