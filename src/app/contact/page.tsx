import { FACTS } from "@/lib/siteFacts";
import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { OFFICE_LOCATIONS } from "@/data/locationsData";

export const metadata: Metadata = buildMetadata({
  title: "Contact HumNikah | Muslim Marriage Bureau Bangalore",
  absoluteTitle: "Contact HumNikah | Muslim Marriage Bureau Bangalore",
  description:
    "Contact HumNikah, a Muslim marriage bureau in Cox Town, Bangalore. Call, WhatsApp or visit by appointment. Free biodata submission.",
  path: "/contact",
});

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  name: "Contact HumNikah",
  url: `${SITE_URL}/contact`,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  // The Cox Town office is defined once, on the Bengaluru page and in the layout.
  about: { "@id": `${SITE_URL}/#bengaluru-office` },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-cream pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      {/* Compact Modern Hero Section (Matches Blog & Gallery page size) */}
      <section className="relative bg-[#1D184C] text-white py-8 sm:py-12 overflow-hidden border-b border-brand-gold/20">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#651514]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={14} className="animate-pulse text-brand-gold" />
            <span>Dedicated Support &amp; Guidance</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white tracking-tight leading-tight">
            Contact <span className="text-[#F3B979] italic">HumNikah</span>
          </h1>

          <p className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base font-light max-w-xl mx-auto leading-relaxed">
            HumNikah is a Muslim marriage bureau in Cox Town, Bangalore. Call us,
            message us on WhatsApp, or visit our office by appointment.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                Direct Channels
              </span>
              <h2 className="text-xl sm:text-3xl font-playfair font-bold text-brand-charcoal mt-1 mb-3">
                Get in Touch Directly
              </h2>
              <p className="text-xs sm:text-sm text-brand-secondary font-light leading-relaxed">
                Reach out via phone, email, or visit our office. We strive to
                respond to all inquiries within 24 hours.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-border/70 hover:shadow-md hover:border-brand-gold/50 transition-all flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 border border-brand-emerald/20">
                  <Phone size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-playfair text-brand-charcoal">
                    Phone &amp; WhatsApp
                  </h3>
                  <div className="text-xs sm:text-sm text-brand-secondary font-medium mt-0.5 flex flex-wrap items-center gap-2">
                    <a 
                      href={FACTS.call.tel} 
                      className="hover:text-brand-gold hover:underline transition-colors"
                    >
                      Call: {FACTS.call.display}
                    </a>
                    <span className="text-slate-300">/</span>
                    <a 
                      href="/whatsapp?src=contact"
                      rel="nofollow noopener"
                      className="text-emerald-700 hover:text-emerald-800 hover:underline font-semibold transition-colors"
                    >
                      WA: +91 90190 82205
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-border/70 hover:shadow-md hover:border-brand-gold/50 transition-all flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 border border-brand-emerald/20">
                  <Mail size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-playfair text-brand-charcoal">
                    Email Support
                  </h3>
                  <a 
                    href="mailto:connect@humnikah.com" 
                    className="text-xs sm:text-sm text-brand-secondary hover:text-brand-gold hover:underline font-medium mt-0.5 inline-block transition-colors"
                  >
                    connect@humnikah.com
                  </a>
                </div>
              </div>

              {/* Office Location Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-border/70 hover:shadow-md hover:border-brand-gold/50 transition-all flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 border border-brand-emerald/20">
                  <MapPin size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-playfair text-brand-charcoal">
                    Main Office
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-secondary font-light mt-0.5 leading-relaxed">
                    Splendid Plaza, No. 6, 2nd Floor
                    <br />
                    Wheeler Road, Cox Town
                    <br />
                    Bengaluru 560005
                  </p>
                  <p className="text-[11px] text-brand-secondary font-light mt-2 leading-relaxed">
                    Please call or message before you visit so that we can set aside time for your family.
                  </p>
                </div>
              </div>
            </div>

            {/* Free biodata + contact number */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-border/70">
              <h2 className="text-sm sm:text-base font-bold font-playfair text-brand-charcoal mb-1">
                Muslim marriage bureau contact number
              </h2>
              <p className="text-xs sm:text-sm text-brand-secondary font-light leading-relaxed">
                If you are looking for a Muslim marriage bureau contact number in Bangalore,
                call {FACTS.call.display} or message us on WhatsApp.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-brand-charcoal font-medium">
                Submitting your biodata to HumNikah is free.
              </p>
              <Link
                href="/submit-biodata"
                className="mt-3 inline-flex items-center px-4 py-2 rounded-lg bg-[#1D184C] text-white text-xs font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
              >
                Submit your biodata
              </Link>
            </div>

            {/* City Landing Pages */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-border/70 hover:shadow-md hover:border-brand-gold/50 transition-all">
              <h3 className="text-sm sm:text-base font-bold font-playfair text-brand-charcoal mb-1">
                Muslim Matrimony by City
              </h3>
              <p className="text-[11px] text-brand-secondary font-light mb-3">
                Our office is in Bengaluru. Families in other cities are served by phone and WhatsApp.
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {OFFICE_LOCATIONS.map((office) => (
                  <Link
                    key={office.id}
                    href={`/muslim-matrimony/${office.city.toLowerCase()}`}
                    className="text-xs font-semibold text-brand-emerald hover:text-brand-gold transition-colors"
                  >
                    {office.city}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick FAQ Helper Box */}
            <div className="bg-gradient-to-r from-[#1D184C] to-[#651514] text-white rounded-2xl p-5 shadow-md border border-brand-gold/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <HelpCircle size={18} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold">
                    Have Quick Questions?
                  </h4>
                  <p className="text-[11px] text-slate-300 font-light">
                    Find instant answers in our FAQ section.
                  </p>
                </div>
              </div>
              <Link
                href="/faq"
                className="px-3 py-1.5 bg-brand-gold text-brand-charcoal hover:bg-white text-xs font-bold rounded-lg transition-colors shrink-0"
              >
                View FAQ
              </Link>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-brand-border/80 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-brand-border/50 pb-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-playfair text-brand-charcoal">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-brand-secondary font-light mt-1">
                      Fill in your details and we will reach out to you
                      promptly.
                    </p>
                  </div>
                  <MessageCircle
                    className="text-brand-gold hidden sm:block"
                    size={24}
                  />
                </div>

                {/* Interactive Contact Form Component */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map Section */}
        <div className="mt-14 sm:mt-18">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                Our Location
              </span>
              <h3 className="text-lg sm:text-2xl font-playfair font-bold text-brand-charcoal">
                Find Us on Map
              </h3>
            </div>
            <span className="text-xs text-brand-secondary bg-white border border-brand-border px-3 py-1 rounded-full font-medium hidden sm:inline-block">
              Bengaluru, India
            </span>
          </div>

          {/* Map Container Frame */}
          <div className="rounded-3xl overflow-hidden border border-brand-border/80 shadow-md h-[380px] sm:h-[480px] lg:h-[520px] w-full relative bg-brand-beige">
            <iframe
              title="HumNikah Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6162142469752!2d77.61515297454692!3d12.99638121433557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17001f2e39cb%3A0x9f5280169fb12338!2sSplendid%20Plaza%20Cox%20Town!5e0!3m2!1sen!2sin!4v1786809446893!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />

            {/* Floating Location Overlay Badge */}
            <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-brand-border max-w-xs hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-emerald text-white flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-charcoal">
                  Wheeler Road
                </p>
                <p className="text-[11px] text-brand-secondary font-light">
                  Cox Town, Bengaluru
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
