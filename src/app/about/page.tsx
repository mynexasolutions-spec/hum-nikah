"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  CheckCircle2,
  Users,
  Lock,
  Heart,
  Headphones,
  Check,
  Star,
  Quote,
  Sparkles,
  HeartHandshake,
  UserCheck,
  X,
} from "lucide-react";

import { SocialInitiativeSection } from "@/components/about/SocialInitiativeSection";
import { LocationsSection } from "@/components/about/LocationsSection";

export default function AboutPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'reach' | 'values'>('mission');

  return (
    <main className="min-h-screen bg-brand-cream overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION                                      */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-brand-cream">
        {/* Subtle Ornamental Floral SVG Accent (Top-Left Background) */}
        <div className="absolute -left-10 -top-10 w-72 h-72 pointer-events-none opacity-25 z-0">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-brand-gold drop-shadow-sm opacity-60 transition-all duration-1000 hover:rotate-12 hover:opacity-90"
          >
            {/* Elegant Floral Center (Mandala / Rose) */}
            <path
              d="M200 120 C 230 120, 250 160, 200 200 C 150 160, 170 120, 200 120 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.05"
            />
            <path
              d="M280 200 C 280 230, 240 250, 200 200 C 240 150, 280 170, 280 200 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.05"
            />
            <path
              d="M200 280 C 170 280, 150 240, 200 200 C 250 240, 230 280, 200 280 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.05"
            />
            <path
              d="M120 200 C 120 170, 160 150, 200 200 C 160 250, 120 230, 120 200 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.05"
            />

            {/* Intricate Botanical Vines & Leaves */}
            <path d="M200 40 Q 250 100, 230 150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M200 40 Q 150 100, 170 150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M360 200 Q 300 250, 250 230" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M360 200 Q 300 150, 250 170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M200 360 Q 150 300, 170 250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M200 360 Q 250 300, 230 250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M40 200 Q 100 150, 150 170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M40 200 Q 100 250, 150 230" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Delicate Leaf Details */}
            <path d="M220 80 C 240 70, 250 80, 230 100" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
            <path d="M180 80 C 160 70, 150 80, 170 100" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
            
            <path d="M320 220 C 330 240, 320 250, 300 230" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
            <path d="M320 180 C 330 160, 320 150, 300 170" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />

            <path d="M180 320 C 160 330, 150 320, 170 300" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
            <path d="M220 320 C 240 330, 250 320, 230 300" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />

            <path d="M80 180 C 70 160, 80 150, 100 170" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
            <path d="M80 220 C 70 240, 80 250, 100 230" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />

            {/* Premium Inner Geometric Ring framing the flower */}
            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.8" />
            
            {/* Center pistil / star detail */}
            <circle cx="200" cy="200" r="12" fill="currentColor" fillOpacity="0.2" />
            <circle cx="200" cy="200" r="4" fill="currentColor" />
            <path d="M190 190 L210 210 M190 210 L210 190" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </div>

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-playfair font-bold text-brand-charcoal leading-tight">
                  About <span className="text-brand-charcoal">Hum</span>
                  <span className="text-brand-gold font-serif">Nikah</span>
                </h1>
                
                <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-brand-emerald">
                  Where Faith Meets Forever
                </h2>
              </div>

              {/* Description */}
              <p className="text-brand-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                HumNikah is a trusted Muslim marriage platform that helps Muslims find their perfect life partner with trust, respect, and complete privacy.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#our-purpose"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-emerald hover:bg-brand-emerald-hover text-white font-medium text-base rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 group"
                >
                  <span>Our Mission</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-brand-light-cream text-brand-charcoal border border-brand-border font-medium text-base rounded-xl transition-all shadow-sm hover:shadow active:scale-95 group"
                >
                  <span>How It Works</span>
                  <span className="w-6 h-6 rounded-full bg-brand-light-cream flex items-center justify-center text-brand-charcoal group-hover:text-brand-emerald transition-colors border border-brand-border">
                    <Play size={11} className="fill-brand-charcoal translate-x-0.5 group-hover:fill-brand-emerald" />
                  </span>
                </button>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                
                {/* Decorative Frame */}
                <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-brand-beige aspect-[4/3.2] sm:aspect-[4/2.8]">
                  <Image
                    src="/images/about/about_hero_couple.jpg"
                    alt="Muslim couple in wedding attire - HumNikah"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle soft glow gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. TABS NAVIGATION & CONTENT                         */}
      {/* ---------------------------------------------------- */}
      <section className="py-10 lg:py-16 bg-white relative min-h-[600px]">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0" id="our-purpose">
            <div className="inline-flex bg-white/70 backdrop-blur-md rounded-full p-2 border border-brand-border shadow-md min-w-max">
              {['mission', 'reach', 'values'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'mission' | 'reach' | 'values')}
                  className={`min-w-[120px] sm:min-w-[160px] py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-brand-emerald text-white shadow-lg scale-105'
                      : 'text-brand-secondary hover:text-brand-charcoal hover:bg-brand-cream/80'
                  }`}
                >
                  {tab === 'mission' && 'Our Mission'}
                  {tab === 'reach' && 'Our Reach'}
                  {tab === 'values' && 'Our Values'}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-in fade-in duration-500">
            {activeTab === 'mission' && (
              <div className="text-center max-w-5xl mx-auto">
                <div className="inline-block px-5 py-2 rounded-full bg-brand-emerald text-white text-xs font-semibold mb-6 tracking-wider uppercase shadow-sm">
                  Our Mission
                </div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mb-4">
                  Driven by <span className="text-brand-emerald">Faith & Responsibility</span>
                </h2>
                <p className="text-brand-secondary text-base sm:text-lg mb-8">
                  We believe Nikah completes half of deen. Our role is to fulfill this amanah with sincerity.
                </p>
                
                <div className="bg-brand-light-cream border-l-4 border-brand-emerald p-6 sm:p-8 rounded-r-2xl mb-12 text-left shadow-sm max-w-4xl mx-auto">
                  <p className="text-brand-charcoal italic text-lg sm:text-xl font-medium font-playfair">
                    &quot;When a man marries, he has completed half of his religion.&quot;
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Cards */}
                  {[
                    { title: "100% Halal", desc: "Shariah-compliant matchmaking." },
                    { title: "Manual Verification", desc: "No fake profiles." },
                    { title: "Relationship Managers", desc: "Real human guidance." },
                    { title: "Walk-In Offices", desc: "Personal family meetings." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm hover:shadow-md hover:border-brand-emerald/30 transition-all text-center">
                      <h3 className="text-brand-emerald font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-brand-secondary text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reach' && (
              <div className="text-center max-w-5xl mx-auto">
                <div className="text-xs font-semibold tracking-widest text-brand-emerald uppercase mb-4">
                  GLOBAL PRESENCE
                </div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mb-4">
                  Our Reach
                </h2>
                <p className="text-brand-secondary text-base sm:text-lg mb-12">
                  Serving Muslim families across continents with trust, experience, and care.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-sm hover:shadow-md hover:border-brand-emerald/30 transition-all text-center">
                    <div className="text-3xl font-bold font-serif mb-4 text-brand-charcoal">IN</div>
                    <h3 className="text-xl font-bold text-brand-charcoal mb-4">Across India</h3>
                    <p className="text-brand-secondary text-sm leading-relaxed">
                      Deep roots across South, North, West, and Northeast India — from Bangalore to every major Muslim community nationwide.
                    </p>
                  </div>

                  <div className="bg-brand-light-cream rounded-3xl p-8 border border-brand-emerald/20 shadow-sm hover:shadow-md transition-all text-center">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="text-xl font-bold text-brand-emerald mb-4">Gulf & Middle East</h3>
                    <p className="text-brand-secondary text-sm leading-relaxed">
                      Trusted by Indian Muslims across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman — managing cross-border matches seamlessly.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-sm hover:shadow-md hover:border-brand-emerald/30 transition-all text-center">
                    <div className="text-4xl mb-4">✈️</div>
                    <h3 className="text-xl font-bold text-brand-charcoal mb-4">Western World</h3>
                    <p className="text-brand-secondary text-sm leading-relaxed">
                      Connecting diaspora Muslims in the UK, USA, Canada, Europe, Australia, Malaysia, and Singapore with verified global profiles.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mb-12">
                  Our Core <span className="text-brand-emerald font-serif">Values</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* Card 1: Faith */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#651514] shadow-sm hover:shadow-xl hover:border-brand-emerald/40 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light-cream group-hover:bg-brand-light-cream text-brand-emerald flex items-center justify-center mb-4 transition-colors">
                      <HeartHandshake size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold font-playfair text-brand-charcoal mb-2">Faith</h3>
                    <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">We put Allah at the center of every connection.</p>
                  </div>

                  {/* Card 2: Respect */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#651514] shadow-sm hover:shadow-xl hover:border-brand-emerald/40 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light-cream group-hover:bg-brand-light-cream text-brand-emerald flex items-center justify-center mb-4 transition-colors">
                      <Heart size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold font-playfair text-brand-charcoal mb-2">Respect</h3>
                    <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">We treat every member with dignity and respect.</p>
                  </div>

                  {/* Card 3: Trust */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#651514] shadow-sm hover:shadow-xl hover:border-brand-emerald/40 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light-cream group-hover:bg-brand-light-cream text-brand-emerald flex items-center justify-center mb-4 transition-colors">
                      <ShieldCheck size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold font-playfair text-brand-charcoal mb-2">Trust</h3>
                    <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">We ensure transparency, honesty and reliability.</p>
                  </div>

                  {/* Card 4: Family */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#651514] shadow-sm hover:shadow-xl hover:border-brand-emerald/40 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light-cream group-hover:bg-brand-light-cream text-brand-emerald flex items-center justify-center mb-4 transition-colors">
                      <Users size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold font-playfair text-brand-charcoal mb-2">Family</h3>
                    <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">We believe families should be part of the journey.</p>
                  </div>

                  {/* Card 5: Excellence */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#651514] shadow-sm hover:shadow-xl hover:border-brand-emerald/40 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light-cream group-hover:bg-brand-light-cream text-brand-emerald flex items-center justify-center mb-4 transition-colors">
                      <Star size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold font-playfair text-brand-charcoal mb-2">Excellence</h3>
                    <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">We continuously improve to serve you better.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
      {/* ---------------------------------------------------- */}
      {/* 5. CHARITY & DIFFERENCE ABLED SOCIAL INITIATIVE     */}
      {/* ---------------------------------------------------- */}
      <SocialInitiativeSection />

      {/* ---------------------------------------------------- */}
      {/* 6. MULTIPLE LOCATIONS & OFFICES                      */}
      {/* ---------------------------------------------------- */}
      <LocationsSection />

      {/* ---------------------------------------------------- */}
      {/* 6. READY TO START YOUR JOURNEY? (CTA BANNER)         */}
      {/* ---------------------------------------------------- */}
      <section className="py-6 sm:py-14 bg-brand-cream overflow-hidden">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#1D184C] text-white overflow-hidden shadow-2xl border border-[#C58D5F]/30 min-h-[340px] sm:min-h-[380px] lg:min-h-[400px] flex items-center">
            
            {/* Right Image Overlay with smooth fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 md:w-3/5 lg:w-1/2 h-full pointer-events-none">
              <Image
                src="/images/about/about_cta_couple.jpg"
                alt="Muslim Couple Nikah Journey - HumNikah"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[75%_20%] sm:object-[center_20%] opacity-65 sm:opacity-80 lg:opacity-90"
              />
              {/* Dark gradient fade over the image so text on left is 100% crisp & readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D184C] via-[#1D184C]/95 sm:via-[#1D184C]/80 lg:via-[#1D184C]/60 to-transparent" />
            </div>

            {/* Left Floral Gold Vector Artwork */}
            <div className="absolute left-0 top-0 bottom-0 h-full pointer-events-none opacity-30 sm:opacity-50 lg:opacity-75 z-10 flex items-center">
              <svg
                width="280"
                height="380"
                viewBox="0 0 280 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto text-[#C58D5F]"
              >
                <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="70" cy="130" r="16" strokeWidth="1.2" />
                  <circle cx="70" cy="130" r="7" fill="currentColor" fillOpacity="0.3" />
                  <path d="M70 98 C64 112, 76 112, 70 98 Z M70 162 C64 148, 76 148, 70 162 Z M38 130 C52 124, 52 136, 38 130 Z M102 130 C88 124, 88 136, 102 130 Z" />
                  <path d="M47 107 C59 107, 59 119, 47 107 Z M93 153 C81 153, 81 141, 93 153 Z M93 107 C81 107, 81 119, 93 107 Z M47 153 C59 153, 59 141, 47 153 Z" />
                  <path d="M70 162 Q70 240 135 300 T200 370" strokeWidth="1.5" />
                  <path d="M70 98 Q60 45 15 15" strokeWidth="1.5" />
                  <path d="M88 195 C110 185, 120 205, 88 195 Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M58 220 C35 210, 25 230, 58 220 Z" fill="currentColor" fillOpacity="0.2" />
                  <circle cx="145" cy="260" r="11" strokeWidth="1" />
                  <path d="M145 238 C140 248, 150 248, 145 238 Z M145 282 C140 272, 150 272, 145 282 Z M123 260 C133 255, 133 265, 123 260 Z M167 260 C157 255, 157 265, 167 260 Z" />
                  <circle cx="25" cy="90" r="2" fill="currentColor" />
                  <circle cx="40" cy="55" r="1.5" fill="currentColor" />
                  <circle cx="105" cy="165" r="2" fill="currentColor" />
                  <circle cx="170" cy="240" r="1.5" fill="currentColor" />
                  <circle cx="120" cy="325" r="2" fill="currentColor" />
                </g>
              </svg>
            </div>

            {/* Content Block */}
            <div className="relative z-20 w-full max-w-xl lg:max-w-2xl px-6 sm:px-10 lg:px-14 py-12 sm:py-16 my-auto text-center sm:text-left mx-auto sm:ml-20 lg:ml-40">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white leading-tight tracking-tight drop-shadow-md">
                Ready to Start{" "}
                <span className="text-[#F3B979]">Your Journey?</span>
              </h2>

              <p className="mt-3 sm:mt-4 text-slate-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-lg mx-auto sm:mx-0">
                Join thousands of Muslims finding their perfect match.
              </p>

              <div className="mt-6 sm:mt-8">
                <Link
                  href="/submit-biodata"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#651514] hover:bg-[#4D0F0E] text-white font-medium text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 group border border-[#C58D5F]/40"
                >
                  <span>Create Your Profile Today</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* HOW IT WORKS MODAL POPUP                             */}
      {/* ---------------------------------------------------- */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-brand-border">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-light-cream">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center">
                  <Play size={14} className="fill-white translate-x-0.5" />
                </div>
                <h3 className="font-playfair font-bold text-lg text-brand-charcoal">
                  How HumNikah Works
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-brand-beige/50 text-brand-secondary hover:text-brand-charcoal transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body / Guide */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-border/60">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold font-montserrat mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-bold text-brand-charcoal text-base mb-1">Create Profile</h4>
                  <p className="text-xs text-brand-secondary">Submit your details with halal preferences and privacy controls.</p>
                </div>

                <div className="p-4 rounded-xl bg-brand-cream border border-brand-border/60">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold font-montserrat mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-bold text-brand-charcoal text-base mb-1">Get Verified</h4>
                  <p className="text-xs text-brand-secondary">Our team verifies your biodata to keep the platform genuine &amp; secure.</p>
                </div>

                <div className="p-4 rounded-xl bg-brand-cream border border-brand-border/60">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold font-montserrat mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-bold text-brand-charcoal text-base mb-1">Connect with Trust</h4>
                  <p className="text-xs text-brand-secondary">Engage with matched families with respect, dignity, and confidence.</p>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <Link
                  href="/submit-biodata"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-emerald hover:bg-brand-emerald-hover text-white font-medium rounded-xl transition-all shadow-md"
                >
                  <span>Start Your Biodata Now</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
