"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "HumNikah helped me find a life partner who shares my values and respects my family. Alhamdulillah!",
    name: "Sara Farhan",
    location: "Lahore, Pakistan",
  },
  {
    quote: "Finding a compatible partner with mutual religious goals was so simple. Highly recommend HumNikah!",
    name: "Usman & Zainab",
    location: "Karachi, Pakistan",
  },
  {
    quote: "Alhamdulillah, we found each other here. The platform respects privacy, values, and security.",
    name: "Bilal & Amara",
    location: "Islamabad, Pakistan",
  },
  {
    quote: "Blessed to find my soulmate who is also a doctor. Truly a professional and secure platform!",
    name: "Dr. Ayesha",
    location: "Peshawar, Pakistan",
  },
  {
    quote: "We got married last month. The verified profiles made it easy for our families to connect.",
    name: "Omer & Fatima",
    location: "Rawalpindi, Pakistan",
  },
  {
    quote: "Very transparent and clean environment. Found a perfect match who matches my family's expectations.",
    name: "Yasmin Malik",
    location: "Faisalabad, Pakistan",
  },
  {
    quote: "A wonderful platform that prioritizes Islamic values. We are so happy and grateful.",
    name: "Hamza & Sana",
    location: "Multan, Pakistan",
  },
  {
    quote: "Highly recommend HumNikah. It was simple to filter matches based on religious and cultural values.",
    name: "Zehra & Ali",
    location: "Quetta, Pakistan",
  },
  {
    quote: "We are happily married now. The support and verification process was excellent and respectful!",
    name: "Farhan & Nida",
    location: "Gujranwala, Pakistan",
  },
  {
    quote: "Alhamdulillah, a transparent matchmaking process. Best halal platform for seeking a spouse.",
    name: "Mariam & Bilal",
    location: "Sialkot, Pakistan",
  },
];

export function SuccessStoriesAndProfilesSection() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= 2 * testimonials.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - testimonials.length);
    } else if (currentIndex < testimonials.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + testimonials.length);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  // Autoplay timer (resets when index changes)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex, transitionEnabled]);

  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-12 bg-brand-cream/30 border-t border-[#651514] overflow-hidden">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <ScrollReveal variant="fade-up">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
            OUR SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mt-3">
            Happy Hearts, Successful Nikahs
          </h2>
          <p className="text-brand-secondary text-sm max-w-xl mx-auto mt-3">
            Alhamdulillah! Real stories of beautiful matches found on HumNikah.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative group max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Window */}
        <div className="overflow-hidden py-4">
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% + 16px) / var(--visible-cards)))`,
            }}
            className={`flex gap-4 [--visible-cards:1] md:[--visible-cards:2] lg:[--visible-cards:4] ${
              transitionEnabled ? "transition-transform duration-500 ease-in-out" : "transition-none"
            }`}
          >
            {extendedTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)] bg-brand-cream/80 border border-brand-border rounded-2xl p-6 relative shadow-xs hover:shadow-md hover:border-brand-gold/40 transition-all flex flex-col justify-between"
              >
                <Quote className="text-brand-gold/10 w-8 h-8 absolute top-4 right-4 pointer-events-none" />
                <div className="space-y-4">
                  <div className="flex text-brand-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  <p className="text-brand-charcoal text-sm italic leading-relaxed font-normal">
                    “{testimonial.quote}”
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-brand-border/60">
                  <div className="w-9 h-9 rounded-full bg-[#1D184C]/10 border border-[#1D184C]/20 text-[#1D184C] font-bold text-xs flex items-center justify-center shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-brand-charcoal truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-[11px] text-brand-secondary truncate">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full border border-brand-border bg-white/95 backdrop-blur-md text-brand-charcoal hover:bg-brand-gold hover:text-white transition-all cursor-pointer shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
          aria-label="Previous story"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full border border-brand-border bg-white/95 backdrop-blur-md text-brand-charcoal hover:bg-brand-gold hover:text-white transition-all cursor-pointer shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
          aria-label="Next story"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
