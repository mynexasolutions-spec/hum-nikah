import React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`appearance-none flex h-12 w-full rounded-2xl border border-slate-200/90 bg-slate-50/80 hover:bg-white px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold text-brand-charcoal disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-xs cursor-pointer ${
              error ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""
            } ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
            <ChevronDown size={18} />
          </div>
        </div>
        {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
