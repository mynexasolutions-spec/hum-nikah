"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, CheckCircle2, Lock, Headphones, Sparkles } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const HERO_SLIDER_IMAGES = [
  "/images/hero/hero_image.png",
  "/images/hero/img_01.webp",
  "/images/hero/img_02.webp",
  "/images/hero/img_03.webp",
  "/images/hero/img_04.webp",
  "/images/hero/img_05.webp",
  "/images/hero/img_06.webp",
  "/images/about/about_hero_couple.jpg",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgesVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const badgeItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1D184C] via-[#2A1636] to-[#651514] text-white py-10 lg:py-16 border-b border-brand-gold/30">
      
      {/* Semi-Transparent Hero Background Dynamic Image Backdrop (Synchronized with Right Slider) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={HERO_SLIDER_IMAGES[currentImageIndex]}
            src={HERO_SLIDER_IMAGES[currentImageIndex]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Soft atmospheric gradient tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D184C]/85 via-[#1D184C]/50 to-[#651514]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Background Decorative Ambient Circles */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-gold/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#651514]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D184C]/70 border border-brand-gold/50 text-xs font-semibold text-brand-gold uppercase tracking-wider shadow-sm">
                <Sparkles size={14} className="text-brand-gold animate-pulse" />
                A TRUSTED HALAL SERVICE
                <Sparkles size={14} className="text-brand-gold animate-pulse" />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight"
            >
              Matrimonial Site  <br className="hidden sm:inline" />
              in <span className="text-brand-gold italic relative inline-block">
                Bangalore
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-1 left-0 right-0 h-1 bg-brand-gold/40 rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              HumNikah helps Muslims find their perfect life partner with trust, respect and complete privacy.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/submit-biodata"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-4 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#651514] via-[#801B1A] to-[#651514] hover:from-[#4D0F0E] hover:to-[#4D0F0E] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-xl border border-brand-gold/40 sm:hover:scale-105"
                >
                  <span>Submit Your Biodata</span>
                  <ArrowRight size={18} className="text-brand-gold shrink-0" />
                </Link>
              </motion.div>
              
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/#submit-biodata"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-3 sm:px-7 sm:py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium text-sm sm:text-base rounded-xl transition-all shadow-xs"
                >
                  <span>Find Your Match</span>
                  <Heart size={18} className="text-brand-gold fill-brand-gold/20 shrink-0" />
                </Link>
              </motion.div>
            </motion.div>

            {/* 4 Core Value Badges */}
            <motion.div
              variants={badgesVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/20"
            >
              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-white/10 text-brand-gold group-hover:scale-110 transition-transform">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-medium text-slate-200 leading-tight">100% Privacy Protected</span>
              </motion.div>
              
              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-white/10 text-brand-gold group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs font-medium text-slate-200 leading-tight">Verified &amp; Genuine Profiles</span>
              </motion.div>

              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-white/10 text-brand-gold group-hover:scale-110 transition-transform">
                  <Lock size={18} />
                </div>
                <span className="text-xs font-medium text-slate-200 leading-tight">Safe &amp; Secure Platform</span>
              </motion.div>

              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-white/10 text-brand-gold group-hover:scale-110 transition-transform">
                  <Headphones size={18} />
                </div>
                <span className="text-xs font-medium text-slate-200 leading-tight">Dedicated Support</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Infinite Image Slideshow with Arch Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Frame Container */}
              <div className="relative rounded-[24px] overflow-hidden border-2 border-brand-gold/50 shadow-2xl bg-brand-charcoal h-[310px] sm:h-[390px] lg:h-[430px] group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={HERO_SLIDER_IMAGES[currentImageIndex]}
                    src={HERO_SLIDER_IMAGES[currentImageIndex]}
                    alt="Muslim couple nikah proposals"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Dots Navigation Overlay */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {HERO_SLIDER_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentImageIndex ? "w-5 bg-brand-gold" : "w-2 bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Match Counter Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-4 sm:-bottom-6 left-0 right-0 mx-auto w-[90%] sm:w-auto min-w-[250px] max-w-[330px] bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl border border-brand-gold/40 flex items-center justify-center gap-3.5 cursor-pointer z-10"
              >
                <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="/images/profiles/3.png"
                    alt="User avatar"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="/images/profiles/4.png"
                    alt="User avatar"
                  />
                </div>
                <div className="text-left">
                  <div className="text-base sm:text-lg font-bold text-brand-charcoal leading-none">
                    25,000+
                  </div>
                  <div className="text-xs text-brand-secondary font-medium mt-0.5">
                    Successful Matches
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

