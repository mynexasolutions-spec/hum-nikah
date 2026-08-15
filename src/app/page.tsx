import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MatchAndFilterSection } from "@/components/home/MatchAndFilterSection";
import { StatsSection } from "@/components/home/StatsSection";
import { SuccessStoriesAndProfilesSection } from "@/components/home/SuccessStoriesAndProfilesSection";
import { ValuesBlogGallerySection } from "@/components/home/ValuesBlogGallerySection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream overflow-hidden">
      <HeroSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <MatchAndFilterSection />
      <StatsSection />
      <SuccessStoriesAndProfilesSection />
      <ValuesBlogGallerySection />
      <FaqSection />
      <CtaBannerSection />
    </main>
  );
}
