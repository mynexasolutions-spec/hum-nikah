"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Heart } from "lucide-react";
import { BLOG_CATEGORIES } from "@/lib/blog-utils";
import type { BlogRecord } from "@/lib/blogs";
import { BlogCard } from "@/components/blog/BlogCard";

export default function BlogClient({ blogs }: { blogs: BlogRecord[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-brand-cream pb-20">
      {/* Hero Section */}
      <section className="relative bg-[#1D184C] text-white py-8 sm:py-12 overflow-hidden border-b border-brand-gold/20">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#651514]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles size={14} className="animate-pulse text-brand-gold" />
            <span>Islamic Nikah Guidance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white tracking-tight leading-tight"
          >
            Nikah &amp; Islamic Marriage <span className="text-[#F3B979] italic">Guidance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base font-light max-w-lg mx-auto leading-relaxed"
          >
            Authentic Islamic advice &amp; Sunnah guidelines for your matrimonial journey.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 sm:mt-6 max-w-md mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 z-10 text-brand-gold pointer-events-none" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Nikah advice, Sunnah, Mahr..."
                className="w-full pl-10 pr-16 py-2.5 sm:py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/15 transition-all"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-slate-300 hover:text-white text-xs bg-white/10 px-2 py-0.5 rounded-md transition-colors"
                >
                  Clear
                </button>
              ) : (
                <div className="absolute right-3 text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 font-mono hidden sm:block pointer-events-none">
                  Search
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs Section */}
      <section className="sticky top-0 z-30 bg-brand-cream/90 backdrop-blur-md border-b border-brand-border/60 py-3 sm:py-4">
        <div className="max-w-wrap mx-auto">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth px-4 sm:px-6 lg:px-8 w-full">
            {BLOG_CATEGORIES.map((category) => {
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

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">

        {/* Blog Grid Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal">
            {selectedCategory === "All" ? "Latest Guidance & Articles" : `${selectedCategory} Articles`}
          </h2>
          <span className="text-xs font-semibold text-brand-secondary bg-brand-beige px-3 py-1 rounded-full">
            {filteredPosts.length} {filteredPosts.length === 1 ? "Article" : "Articles"}
          </span>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-border/60 p-8">
            <Heart size={40} className="mx-auto text-brand-gold/40 mb-3" />
            <h3 className="text-lg font-bold text-brand-charcoal">No Articles Found</h3>
            <p className="text-xs sm:text-sm text-brand-secondary mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any Nikah articles matching &quot;{searchQuery}&quot;. Try searching with different terms or select another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-5 px-5 py-2.5 bg-brand-emerald text-white text-xs font-semibold rounded-xl hover:bg-brand-emerald-hover transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
