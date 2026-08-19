"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";

export interface ModernDatePickerProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
}

export function ModernDatePicker({
  label,
  value,
  onChange,
  placeholder = "Select Date",
  error,
  isDob = false,
  name
}: ModernDatePickerProps & { isDob?: boolean; name?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const initialDate = value ? new Date(value) : (isDob ? new Date(1998, 0, 1) : new Date());
  const [viewYear, setViewYear] = useState(
    isNaN(initialDate.getFullYear()) ? (isDob ? 1998 : new Date().getFullYear()) : initialDate.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(
    isNaN(initialDate.getMonth()) ? 0 : initialDate.getMonth()
  );

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const yearOptions = isDob 
    ? Array.from({ length: 75 }, (_, i) => currentYear - 16 - i)
    : Array.from({ length: 30 }, (_, i) => currentYear + 5 - i);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const handleSelectDay = (day: number) => {
    const formattedMonth = String(viewMonth + 1).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");
    const dateStr = `${viewYear}-${formattedMonth}-${formattedDay}`;
    onChange(dateStr);
    setIsOpen(false);
  };

  const formattedDisplay = value
    ? new Date(value).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : placeholder;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      {name && <input type="hidden" name={name} value={value} />}
      <div className="relative">
        <div className="relative flex items-center">
          <Calendar size={18} className="absolute left-3.5 text-brand-gold pointer-events-none z-10" />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50/80 hover:bg-white border text-sm transition-all duration-200 flex items-center justify-between outline-none cursor-pointer shadow-xs ${
              error
                ? "border-red-500 ring-2 ring-red-500/20"
                : isOpen
                ? "border-[#b3854d] ring-2 ring-[#b3854d]/20 bg-white"
                : "border-brand-border/80 focus:border-[#b3854d] focus:ring-2 focus:ring-[#b3854d]/20"
            }`}
          >
            <span className={value ? "text-slate-900 font-semibold" : "text-slate-400 font-normal"}>
              {formattedDisplay}
            </span>
          </button>
        </div>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <div className="absolute left-0 sm:left-auto right-0 sm:right-auto mt-2 z-50 w-72 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-brand-gold/30 p-4 animate-in fade-in zoom-in-95">
              {/* Header: Month & Year Selectors */}
              <div className="flex items-center justify-between mb-3 gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                <select
                  value={viewMonth}
                  onChange={(e) => setViewMonth(Number(e.target.value))}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold bg-white text-slate-800 outline-none cursor-pointer shadow-xs"
                >
                  {months.map((m, idx) => (
                    <option key={m} value={idx}>{m}</option>
                  ))}
                </select>

                <select
                  value={viewYear}
                  onChange={(e) => setViewYear(Number(e.target.value))}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold bg-white text-slate-800 outline-none cursor-pointer shadow-xs"
                >
                  {yearOptions.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 text-center mb-1">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <span key={day} className="text-[11px] font-bold text-slate-400 py-1">
                    {day}
                  </span>
                ))}
              </div>

              {/* Calendar Days Grid */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const formattedMonth = String(viewMonth + 1).padStart(2, "0");
                  const formattedDay = String(day).padStart(2, "0");
                  const dateStr = `${viewYear}-${formattedMonth}-${formattedDay}`;
                  const isSelected = value === dateStr;

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleSelectDay(day)}
                      className={`h-8 w-8 rounded-full text-xs font-medium flex items-center justify-center transition-all cursor-pointer mx-auto ${
                        isSelected
                          ? "bg-brand-emerald text-white font-bold shadow-md scale-105"
                          : "hover:bg-brand-gold/20 text-slate-700 hover:text-brand-gold"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Footer Buttons */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => {
                    onChange("");
                    setIsOpen(false);
                  }}
                  className="text-slate-400 hover:text-slate-600 font-medium cursor-pointer"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-brand-emerald font-bold hover:underline cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}
