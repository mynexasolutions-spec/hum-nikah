"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

export interface ModernSelectProps {
  icon?: React.ReactNode;
  label?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  error?: string;
}

export function ModernSelect({
  icon,
  label,
  placeholder,
  value,
  onChange,
  options,
  error,
}: ModernSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3.5 text-brand-gold pointer-events-none z-10 flex items-center justify-center">
              {icon}
            </span>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full ${
              icon ? "pl-11" : "pl-4"
            } pr-10 py-3 rounded-2xl bg-slate-50/80 hover:bg-white border text-sm transition-all duration-200 flex items-center justify-between outline-none cursor-pointer shadow-xs ${
              error
                ? "border-red-500 ring-2 ring-red-500/20"
                : isOpen
                ? "border-brand-gold ring-2 ring-brand-gold/20 bg-white"
                : "border-slate-200/90 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
            }`}
          >
            <span className={value ? "text-slate-900 font-semibold" : "text-slate-400 font-normal"}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform duration-200 ${
                isOpen ? "rotate-180 text-brand-gold" : ""
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <div className="absolute left-0 right-0 mt-2 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-brand-gold/30 p-2 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 scrollbar-thin">
              {options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-center justify-between cursor-pointer my-0.5 ${
                      isSelected
                        ? "bg-[#062e29] text-white font-semibold shadow-xs"
                        : "text-slate-700 hover:bg-brand-cream/80 hover:text-brand-charcoal"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <CheckCircle size={16} className="text-brand-gold" />}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}
