"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/data/galleryData";

export default function GalleryClient({ initialItems }: { initialItems: GalleryItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return initialItems;
    return initialItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, initialItems]);

  const handlePrevModalItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveModalItem(filteredItems[prevIndex]);
  };

  const handleNextModalItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveModalItem(filteredItems[nextIndex]);
  };

  return (
    <main className="min-h-screen bg-brand-cream pb-20">
      {/* Compact Modern Hero Section */}
      <section className="relative bg-[#1D184C] text-white py-8 sm:py-12 overflow-hidden border-b border-brand-gold/20">
        {/* Glow Orbs */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#651514]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles size={14} className="animate-pulse text-brand-gold" />
            <span>Nikah &amp; Matrimonial Moments</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white tracking-tight leading-tight"
          >
            Moments of <span className="text-[#F3B979] italic">Love &amp; Togetherness</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base font-light max-w-md mx-auto leading-relaxed"
          >
            Glimpses into sacred Nikah celebrations and heartwarming halal unions.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs Bar */}
      <section className="sticky top-0 z-30 bg-brand-cream/90 backdrop-blur-md border-b border-brand-border/60 py-3 sm:py-4">
        <div className="max-w-wrap mx-auto">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth px-4 sm:px-6 lg:px-8 w-full">
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-brand-emerald text-white shadow-md border border-brand-emerald"
                      : "bg-white text-brand-charcoal hover:bg-brand-beige border border-brand-border/80"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Gallery Grid Section */}
      <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Category Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal">
            {selectedCategory === "All" ? "All Celebration Moments" : selectedCategory}
          </h2>
          <span className="text-xs font-semibold text-brand-secondary bg-brand-beige px-3 py-1 rounded-full">
            {filteredItems.length} {filteredItems.length === 1 ? "Photo" : "Photos"}
          </span>
        </div>

        {/* Responsive Photo Grid (4 images per row on desktop) */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => setActiveModalItem(item)}
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-brand-border/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/5] flex flex-col justify-end"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D184C]/90 via-[#1D184C]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Category Pill Tag */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 max-w-[80%]">
                  <span className="block px-1.5 sm:px-2 py-0.5 rounded-md bg-[#1D184C]/90 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-semibold tracking-wide border border-white/10 truncate">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-brand-emerald transition-colors">
                    <Maximize2 size={12} />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Preview Modal - Ultra Modern & Responsive */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-5 lg:p-8"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-[#1D184C] via-[#141038] to-[#0D0B24] rounded-2xl sm:rounded-3xl overflow-hidden max-w-lg sm:max-w-xl lg:max-w-2xl w-full shadow-2xl border border-brand-gold/40 relative flex flex-col max-h-[82vh] sm:max-h-[92vh]"
            >
              {/* Modern Top Header Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 sm:px-6 sm:py-3.5 border-b border-white/10 bg-white/5 backdrop-blur-md">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-xs">
                    <Sparkles size={12} className="text-brand-gold animate-pulse" />
                    <span>{activeModalItem.category}</span>
                  </span>
                  <span className="text-slate-400 text-[11px] sm:text-xs font-medium">
                    Photo {filteredItems.findIndex((i) => i.id === activeModalItem.id) + 1} of {filteredItems.length}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-charcoal flex items-center justify-center transition-all duration-200 border border-white/15 cursor-pointer hover:rotate-90 shadow-md"
                  aria-label="Close Preview"
                >
                  <X size={15} className="sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Main Image Area with Floating Controls (Mobile compact height) */}
              <div className="relative w-full flex-1 min-h-[180px] sm:min-h-[340px] lg:min-h-[420px] max-h-[46vh] sm:max-h-[66vh] bg-black/40 flex items-center justify-center p-2 sm:p-5 overflow-hidden">
                
                {/* Left Navigation Arrow */}
                <button
                  onClick={handlePrevModalItem}
                  className="absolute left-2 sm:left-4 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#1D184C]/90 hover:bg-brand-gold text-white hover:text-brand-charcoal shadow-2xl backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-110 active:scale-95"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={handleNextModalItem}
                  className="absolute right-2 sm:right-4 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#1D184C]/90 hover:bg-brand-gold text-white hover:text-brand-charcoal shadow-2xl backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-110 active:scale-95"
                  aria-label="Next Photo"
                >
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>

                {/* The Photo Itself */}
                <img
                  key={activeModalItem.image}
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="max-w-full max-h-[43vh] sm:max-h-[62vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300 border border-white/10"
                />
              </div>

              {/* Modern Bottom Caption Strip */}
              <div className="px-3.5 py-2.5 sm:px-7 sm:py-4 bg-gradient-to-t from-black/70 to-transparent border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-sm sm:text-xl font-playfair font-bold text-white tracking-tight">
                    {activeModalItem.title}
                  </h3>
                  {activeModalItem.description && (
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 font-light leading-snug line-clamp-2 sm:line-clamp-none max-w-xl">
                      {activeModalItem.description}
                    </p>
                  )}
                </div>

                {activeModalItem.location && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-[10px] sm:text-xs text-brand-gold font-medium shrink-0 self-start sm:self-auto">
                    <MapPin size={12} className="text-brand-gold shrink-0" />
                    <span>{activeModalItem.location}</span>
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Islamic Matrimony Quote Banner */}
      <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="bg-gradient-to-r from-[#1D184C] via-[#651514] to-[#1D184C] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-brand-gold/30 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart size={32} className="mx-auto text-[#F3B979] mb-3 animate-pulse" />
            <p className="text-lg sm:text-2xl font-playfair italic leading-relaxed text-slate-100">
              &ldquo;May Allah bless you, and shower His blessings upon you, and join you both in goodness and happiness.&rdquo;
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#F3B979] mt-4">
              &mdash; Prophetic Dua for Newlyweds (Sunan Abu Dawood)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
