"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, CheckCircle2, Lock, Headphones, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
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
    <section className="relative overflow-hidden bg-brand-cream py-10 lg:py-16">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

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
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-beige/70 border border-brand-gold/40 text-xs font-semibold text-brand-gold uppercase tracking-wider shadow-xs">
                <Sparkles size={14} className="text-brand-gold animate-pulse" />
                A TRUSTED HALAL SERVICE
                <Sparkles size={14} className="text-brand-gold animate-pulse" />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-brand-charcoal leading-tight"
            >
              Where Faith <br className="hidden sm:inline" />
              Meets <span className="text-brand-gold italic relative inline-block">
                Forever
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-1 left-0 right-0 h-1 bg-brand-gold/30 rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-brand-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              HumNikah helps Muslims find their perfect life partner with trust, respect and complete privacy.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/submit-biodata"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-brand-emerald hover:bg-brand-emerald-hover text-white font-medium text-base rounded-lg transition-all shadow-md hover:shadow-xl"
                >
                  Submit Your Biodata
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/#explore-matches"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/80 hover:bg-white border border-brand-charcoal/20 hover:border-brand-emerald text-brand-charcoal hover:text-brand-emerald font-medium text-base rounded-lg transition-all shadow-xs hover:shadow-md"
                >
                  Find Your Match
                  <Heart size={18} className="text-brand-gold fill-brand-gold/20" />
                </Link>
              </motion.div>
            </motion.div>

            {/* 4 Core Value Badges */}
            <motion.div
              variants={badgesVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-brand-border/60"
            >
              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-brand-light-cream text-brand-gold group-hover:scale-110 transition-transform">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-medium text-brand-charcoal leading-tight">100% Privacy Protected</span>
              </motion.div>
              
              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-brand-light-cream text-brand-gold group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs font-medium text-brand-charcoal leading-tight">Verified & Genuine Profiles</span>
              </motion.div>

              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-brand-light-cream text-brand-gold group-hover:scale-110 transition-transform">
                  <Lock size={18} />
                </div>
                <span className="text-xs font-medium text-brand-charcoal leading-tight">Safe & Secure Platform</span>
              </motion.div>

              <motion.div variants={badgeItemVariants} className="flex items-center gap-2 text-left group">
                <div className="p-1.5 rounded-full bg-brand-light-cream text-brand-gold group-hover:scale-110 transition-transform">
                  <Headphones size={18} />
                </div>
                <span className="text-xs font-medium text-brand-charcoal leading-tight">Dedicated Support</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image with Arch Frame & Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow/Arch Outline */}
              <div className="relative rounded-[20px] overflow-hidden border-2 border-white shadow-2xl bg-brand-beige group">
                <Image
                  src="/images/hero/hero_image.png"
                  alt="Muslim couple in wedding attire"
                  width={600}
                  height={650}
                  className="w-full object-cover h-[340px] sm:h-auto sm:min-h-[420px] max-h-[580px] object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
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
                className="absolute bottom-4 sm:-bottom-6 left-0 right-0 mx-auto w-[92%] sm:w-[280px] min-w-[260px] max-w-[340px] bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl border border-brand-border flex items-center justify-center gap-4 cursor-pointer z-10"
              >
                <div className="flex -space-x-2.5 overflow-hidden">
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
                <div>
                  <div className="text-base font-bold text-brand-charcoal leading-none">25,000+</div>
                  <div className="text-xs text-brand-secondary font-medium mt-0.5">Successful Matches</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
