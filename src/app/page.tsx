import React from "react";
import { IntroSplash } from "@/components/home/IntroSplash";
import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { ElitePackage } from "@/components/home/ElitePackage";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CTABand } from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      {/* Intro Video Presentation Overlay (Client Component, first session load only) */}
      <IntroSplash />

      {/* Main Home Page Sections */}
      <main id="main-content" className="w-full">
        {/* 1. Hero with studio mixing console & showreel trigger */}
        <Hero />

        {/* 2. Stats strip */}
        <StatsStrip />

        {/* 3. Service highlights (6 cards linking to /services#slug) */}
        <ServiceHighlights />

        {/* 4. AIR MIX Elite Package banner */}
        <ElitePackage />

        {/* 5. About teaser */}
        <AboutTeaser />

        {/* 7. Why choose AirMix */}
        <WhyChoose />

        {/* 8. Call to Action Band */}
        <CTABand />
      </main>
    </>
  );
}
