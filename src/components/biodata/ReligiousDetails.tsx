import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { ModernSelect } from '../ui/ModernSelect';
import { BookOpen, Sparkles, CheckCircle, Heart } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  setValue: UseFormSetValue<BiodataFormValues>;
  watch: UseFormWatch<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function ReligiousDetails({ register, setValue, watch, errors }: Props) {
  const religiousPracticeValue = watch('religiousPractice') || '';
  const prayerPracticeValue = watch('prayerPractice') || '';
  const hijabValue = watch('hijab') || '';

  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-9 h-9 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <BookOpen size={18} className="text-brand-gold" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-playfair text-brand-charcoal">
          4. Religious &amp; Personal Traits
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <ModernSelect
          label="Religious Practice"
          icon={<BookOpen size={18} />}
          placeholder="Select Level"
          value={religiousPracticeValue}
          onChange={(val) => setValue('religiousPractice', val as any, { shouldValidate: true })}
          error={errors.religiousPractice?.message}
          options={[
            { value: 'Very Practicing', label: 'Very Practicing' },
            { value: 'Practicing', label: 'Practicing' },
            { value: 'Moderately Practicing', label: 'Moderately Practicing' },
            { value: 'Not Practicing', label: 'Not Practicing' },
          ]}
        />

        <Input 
          label="Sect / School of Thought" 
          {...register('sect')} 
          error={errors.sect?.message} 
          placeholder="e.g., Sunni, Hanafi" 
        />

        <ModernSelect
          label="Prayer Practice"
          icon={<Sparkles size={18} />}
          placeholder="Select Frequency"
          value={prayerPracticeValue}
          onChange={(val) => setValue('prayerPractice', val as any, { shouldValidate: true })}
          error={errors.prayerPractice?.message}
          options={[
            { value: 'Always Pray', label: 'Always Pray (5 Times Daily)' },
            { value: 'Sometimes Pray', label: 'Sometimes Pray' },
            { value: 'Rarely Pray', label: 'Rarely Pray' },
            { value: 'Never Pray', label: 'Never Pray' },
          ]}
        />

        <ModernSelect
          label="Hijab / Beard Preference"
          icon={<CheckCircle size={18} />}
          placeholder="Select Option"
          value={hijabValue}
          onChange={(val) => setValue('hijab', val as any, { shouldValidate: true })}
          error={errors.hijab?.message}
          options={[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
            { value: 'Sometimes', label: 'Sometimes' },
            { value: 'Not Applicable', label: 'Not Applicable' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 pt-2">
        <Textarea 
          label="Short Introduction" 
          {...register('shortIntro')} 
          error={errors.shortIntro?.message} 
          placeholder="Write a brief introduction about yourself..."
          className="min-h-[110px]"
        />
        <Textarea 
          label="Your Personality" 
          {...register('personality')} 
          error={errors.personality?.message} 
          placeholder="How would you describe your personality?"
          className="min-h-[100px]"
        />
        <Textarea 
          label="Interests &amp; Hobbies" 
          {...register('interests')} 
          error={errors.interests?.message} 
          placeholder="What do you like to do in your free time?"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}
