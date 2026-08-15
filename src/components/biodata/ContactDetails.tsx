import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { ModernSelect } from '../ui/ModernSelect';
import { Phone, Upload } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  setValue: UseFormSetValue<BiodataFormValues>;
  watch: UseFormWatch<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function ContactDetails({ register, setValue, watch, errors }: Props) {
  const contactMethodValue = watch('contactMethod') || '';
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = React.useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-9 h-9 rounded-xl bg-[#062E29]/10 text-[#062E29] flex items-center justify-center font-bold text-sm border border-[#062E29]/20">
          <Phone size={18} className="text-brand-gold" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-playfair text-brand-charcoal">
          6. Contact Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <Input 
          label="Phone Number" 
          {...register('phone')} 
          error={errors.phone?.message} 
          placeholder="+1 (234) 567-8900" 
        />
        
        <Input 
          label="WhatsApp Number" 
          {...register('whatsapp')} 
          error={errors.whatsapp?.message} 
          placeholder="+1 (234) 567-8900" 
        />
        
        <Input 
          type="email" 
          label="Email Address" 
          {...register('email')} 
          error={errors.email?.message} 
          placeholder="you@example.com" 
        />
        
        <ModernSelect
          label="Preferred Contact Method"
          icon={<Phone size={18} />}
          placeholder="Select Method"
          value={contactMethodValue}
          onChange={(val) => setValue('contactMethod', val as any, { shouldValidate: true })}
          error={errors.contactMethod?.message}
          options={[
            { value: 'WhatsApp', label: 'WhatsApp' },
            { value: 'Phone Call', label: 'Phone Call' },
            { value: 'Email', label: 'Email' },
          ]}
        />
      </div>
      
      {/* Profile Photo Upload Box - Compact Modern */}
      <div className="mt-4 pt-4 border-t border-slate-200">
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
          Profile Photo (Optional)
        </label>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-brand-gold focus-within:ring-2 focus-within:ring-brand-gold/20 transition-all duration-200 cursor-pointer shadow-xs group"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Upload size={16} />
            </div>
            <div className="truncate">
              <p className="text-xs sm:text-sm font-semibold text-brand-charcoal truncate">
                {selectedFileName ? selectedFileName : "Choose a profile photo"}
              </p>
              <p className="text-[11px] text-slate-400 font-light">
                {selectedFileName ? "Click to change photo" : "PNG, JPG, WEBP up to 5MB"}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-xl bg-[#062E29] text-white hover:bg-brand-gold hover:text-brand-charcoal text-xs font-semibold transition-colors shrink-0 cursor-pointer ml-3"
          >
            {selectedFileName ? "Change" : "Browse"}
          </button>
        </div>
      </div>
    </div>
  );
}
