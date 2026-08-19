"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

import { BLOG_POSTS } from "@/data/blogsData";

const galleryPhotos = [
  "/images/hero/img_01.webp",
  "/images/hero/img_02.webp",
  "/images/hero/img_03.webp",
  "/images/hero/img_04.webp",
  "/images/hero/img_05.webp",
  "/images/hero/img_06.webp",
];

export function ValuesBlogGallerySection() {
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 bg-brand-cream border-t border-[#651514] overflow-hidden">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" staggerChildren={0.15} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: OUR VALUES */}
          <ScrollRevealItem variant="fade-up" className="lg:col-span-4 h-full">
            <motion.div
              whileHover={{ y: -4 }}
              className="space-y-5 bg-white pt-6 sm:pt-8 px-6 sm:px-8 pb-4 sm:pb-5 rounded-2xl border border-brand-border/60 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full"
            >
              <div>
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                  OUR VALUES
                </span>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mt-2 leading-tight">
                  Guided by Islamic Values, Built for Lasting Relationships
                </h2>
                <p className="text-brand-secondary text-xs sm:text-sm mt-3 leading-relaxed">
                  Our mission is to help Muslims find their life partner in a halal, respectful and trustworthy environment.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Halal & Respectful",
                    "Simplicity in Process",
                    "Family Involvement",
                    "Long-term Commitment",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-brand-charcoal group">
                      <div className="p-1 rounded-full bg-[#651514]/10 text-[#651514] group-hover:bg-[#651514] group-hover:text-white transition-colors">
                        <Check size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollRevealItem>

          {/* Column 2: LATEST BLOGS */}
          <ScrollRevealItem variant="fade-up" className="lg:col-span-4 h-full">
            <motion.div
              whileHover={{ y: -4 }}
              className="space-y-5 bg-white pt-6 sm:pt-8 px-6 sm:px-8 pb-4 sm:pb-5 rounded-2xl border border-brand-border/60 shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                      LATEST BLOGS
                    </span>
                    <h3 className="text-xl font-playfair font-bold text-brand-charcoal mt-1">
                      Insights & Articles
                    </h3>
                  </div>
                  <Link
                    href="/blog"
                    className="text-xs font-semibold text-brand-emerald hover:underline flex items-center gap-1 group"
                  >
                    View All Blogs <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {latestBlogs.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-brand-cream transition-colors group"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal group-hover:text-brand-emerald line-clamp-2 leading-snug transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-[11px] text-brand-secondary mt-1">
                          {post.publishedAt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollRevealItem>

          {/* Column 3: GALLERY */}
          <ScrollRevealItem variant="fade-up" className="lg:col-span-4 h-full">
            <motion.div
              whileHover={{ y: -4 }}
              className="space-y-5 bg-white pt-6 sm:pt-8 px-6 sm:px-8 pb-4 sm:pb-5 rounded-2xl border border-brand-border/60 shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                      GALLERY
                    </span>
                    <h3 className="text-xl font-playfair font-bold text-brand-charcoal mt-1">
                      Moments of Union
                    </h3>
                  </div>
                  <Link
                    href="/gallery"
                    className="text-xs font-semibold text-brand-emerald hover:underline flex items-center gap-1 group"
                  >
                    View Gallery <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* 6 Grid Photos */}
                <div className="grid grid-cols-3 gap-2.5">
                  {galleryPhotos.map((photo, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square rounded-lg overflow-hidden bg-brand-beige cursor-pointer"
                    >
                      <img
                        src={photo}
                        alt={`Gallery thumbnail ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-115 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollRevealItem>

        </ScrollReveal>
      </div>
    </section>
  );
}

