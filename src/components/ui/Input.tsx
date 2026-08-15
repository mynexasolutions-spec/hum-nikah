import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`flex h-12 w-full rounded-2xl border border-slate-200/90 bg-slate-50/80 hover:bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold text-brand-charcoal disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-xs ${
            error ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
