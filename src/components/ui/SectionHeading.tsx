import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subtitleTop?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  subtitleTop,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      {subtitleTop && (
        <span className="block text-sm font-bold tracking-widest text-brand-emerald uppercase mb-3">
          {subtitleTop}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-brand-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
