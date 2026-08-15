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
      <section className="relative bg-[#062E29] text-white py-8 sm:py-12 overflow-hidden border-b border-brand-gold/20">
        {/* Glow Orbs */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

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
            Moments of <span className="text-[#C6A77D] italic">Love &amp; Togetherness</span>
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
                      ? "bg-[#062E29] text-white shadow-md border border-[#062E29]"
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
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-brand-border/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square sm:aspect-[4/3] flex flex-col justify-end"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062E29]/90 via-[#062E29]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Category Pill Tag */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 max-w-[80%]">
                  <span className="block px-1.5 sm:px-2 py-0.5 rounded-md bg-[#062E29]/90 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-semibold tracking-wide border border-white/10 truncate">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#062E29] transition-colors">
                    <Maximize2 size={12} />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-visible max-w-md sm:max-w-lg w-full shadow-2xl border border-brand-gold/30 relative"
            >
              {/* Left Navigation Arrow */}
              <button
                onClick={handlePrevModalItem}
                className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#062E29] hover:bg-brand-gold text-white hover:text-brand-charcoal shadow-2xl flex items-center justify-center transition-all cursor-pointer border-2 border-white hover:scale-110"
                aria-label="Previous Photo"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={handleNextModalItem}
                className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#062E29] hover:bg-brand-gold text-white hover:text-brand-charcoal shadow-2xl flex items-center justify-center transition-all cursor-pointer border-2 border-white hover:scale-110"
                aria-label="Next Photo"
              >
                <ChevronRight size={20} />
              </button>

              {/* Modal Image Wrapper */}
              <div className="relative w-full h-80 sm:h-[450px] bg-[#062E29] rounded-3xl overflow-hidden">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />

                {/* Subtle Top Overlay */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Glassmorphic Close Button */}
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/50 hover:bg-[#062E29] text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>

                {/* Category & Photo Index Badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#062E29]/85 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-[11px] font-semibold tracking-wide">
                    {activeModalItem.category}
                  </span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Islamic Matrimony Quote Banner */}
      <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="bg-gradient-to-r from-[#062E29] via-[#093c35] to-[#062E29] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-brand-gold/30 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart size={32} className="mx-auto text-brand-gold mb-3 animate-pulse" />
            <p className="text-lg sm:text-2xl font-playfair italic leading-relaxed text-slate-100">
              &ldquo;May Allah bless you, and shower His blessings upon you, and join you both in goodness and happiness.&rdquo;
            </p>
            <p className="text-xs sm:text-sm font-semibold text-brand-gold mt-4">
              &mdash; Prophetic Dua for Newlyweds (Sunan Abu Dawood)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
