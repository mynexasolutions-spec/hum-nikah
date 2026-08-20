"use client";

import React from "react";
import { Calendar } from "lucide-react";

export interface ModernDatePickerProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  isDob?: boolean;
  name?: string;
}

export function ModernDatePicker({
  label,
  value,
  onChange,
  placeholder = "Select Date",
  error,
  isDob = true,
  name,
}: ModernDatePickerProps) {
  const currentYear = new Date().getFullYear();
  const maxDate = isDob ? `${currentYear - 16}-12-31` : undefined;
  const minDate = isDob ? `${currentYear - 80}-01-01` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <span className="absolute left-3.5 text-brand-gold pointer-events-none z-10 flex items-center justify-center">
          <Calendar size={18} />
        </span>
        <input
          type="date"
          name={name}
          value={value || ""}
          max={maxDate}
          min={minDate}
          onChange={(e) => onChange(e.target.value)}
          className={`flex h-12 w-full rounded-2xl border border-slate-200/90 bg-slate-50/80 hover:bg-white pl-11 pr-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all duration-200 shadow-xs cursor-pointer ${
            error ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""
          } ${!value ? "text-slate-400" : "font-medium"}`}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}
