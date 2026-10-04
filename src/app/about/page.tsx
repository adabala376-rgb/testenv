import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { CTABand } from "@/components/home/CTABand";
import { Waveform } from "@/components/ui/Waveform";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AirMix: professional audio production and sound engineering company delivering world-class audio solutions across every creative industry.",
};

const whoWeWorkWith = [
  "Musicians & Bands",
  "Content Creators",
  "Filmmakers & Directors",
  "Game Developers",
  "Brands & Commercial Agencies",
  "Businesses & Enterprises",
  "Podcasters & Broadcasters",
  "Educators & Academies",
  "Digital Media Creators",
];

const whatWeDo = [
  "Music Production",
  "Mixing",
  "Mastering",
  "Sound Design",
  "Podcast Editing",
  "Voice Enhancement",
  "Audio Restoration",
  "Background Scores",
  "Advertising Jingles",
  "Game Audio",
  "Dialogue Editing",
  "Custom Audio Production",
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#08080A] text-white">
      {/* Header with Studio Showcase */}
      <section className="relative pt-12 pb-16 bg-[#08080A] bg-console-pattern border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#9BA1AD]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E31E24]" />
            <span className="text-white font-medium">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E31E24]">
                Company Overview
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                About <span className="text-[#E31E24]">AirMix</span>
              </h1>
              <p className="text-base sm:text-lg text-[#9BA1AD] font-normal leading-relaxed max-w-xl">
                Dedicated to delivering high-quality music and audio solutions
                across every creative industry with technical precision and passion.
              </p>
            </div>

            {/* Official Brand Lockup Emblem Display */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm p-8 rounded-2xl bg-gradient-to-b from-[#141519] to-[#0E0F12] border border-white/10 shadow-[0_0_35px_rgba(227,30,36,0.25)] flex flex-col items-center justify-center">
                <Image
                  src="/brand/logo.svg"
                  alt="AirMix Audio Engineering"
                  width={220}
                  height={240}
                  priority
                  className="w-48 h-auto object-contain drop-shadow-[0_0_20px_rgba(227,30,36,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chips: Who We Work With & What We Do */}
      <section className="py-12 bg-[#0C0D10] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Who we work with */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#E31E24]">
              Who We Work With
            </span>
            <div className="flex flex-wrap gap-2.5">
              {whoWeWorkWith.map((partner) => (
                <span
                  key={partner}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#141519] border border-white/10 text-white/90 hover:border-[#E31E24]/50 transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* What we do */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-white/80">
              What We Do
            </span>
            <div className="flex flex-wrap gap-2.5">
              {whatWeDo.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.03] border border-white/[0.08] text-[#9BA1AD] hover:text-white hover:border-white/20 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative: 3 Verbatim Sections with 2-column layout */}
      <section className="py-20 sm:py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* 1. About AirMix Section */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#E31E24]">
                01 / Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                About AirMix
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-[#9BA1AD] leading-relaxed">
                AirMix is a professional audio production and sound engineering
                company dedicated to delivering high-quality music and audio solutions
                across every creative industry. We collaborate with musicians,
                content creators, filmmakers, game developers, brands, agencies,
                businesses, podcasters, educators, and digital creators to produce
                exceptional audio experiences.
              </p>
              <p className="text-base sm:text-lg text-[#9BA1AD] leading-relaxed">
                Our services include music production, audio mixing, mastering,
                sound design, podcast editing, voice enhancement, audio restoration,
                background scores, advertising jingles, game audio, dialogue
                editing, custom audio production, and creative sound solutions for
                digital media. Every project is approached with technical
                precision, creativity, and a commitment to delivering audio that
                enhances storytelling and leaves a lasting impression.
              </p>

              {/* Red Pull-Quote */}
              <blockquote className="border-l-2 border-[#E31E24] pl-4 sm:pl-6 py-3 my-6 bg-gradient-to-r from-[#E31E24]/10 to-transparent rounded-r-lg">
                <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
                  &ldquo;As AirMix continues to grow, our vision is to integrate advanced artificial intelligence into professional audio production, developing innovative tools and workflows that redefine the future of music and sound creation while maintaining the highest standards of quality and creativity.&rdquo;
                </p>
              </blockquote>
            </div>
          </article>

          {/* Waveform Divider */}
          <Waveform variant="divider" />

          {/* 2. Our Mission Section */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#E31E24]">
                02 / Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                Our Mission <span className="text-sm font-normal text-[#9BA1AD] block">(Purpose)</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-[#9BA1AD] leading-relaxed">
                At AirMix, our mission is to deliver exceptional audio production
                and sound engineering solutions that empower creators, businesses,
                brands, and storytellers across every industry. We are committed
                to transforming ideas into high-quality audio experiences through
                creativity, technical precision, innovation, and a client-first
                approach.
              </p>

              {/* Red Pull-Quote */}
              <blockquote className="border-l-2 border-[#E31E24] pl-4 sm:pl-6 py-3 my-6 bg-gradient-to-r from-[#E31E24]/10 to-transparent rounded-r-lg">
                <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
                  &ldquo;Whether it&apos;s music production, podcast editing, sound design, game audio, advertising, voice enhancement, or custom audio solutions, our purpose is to provide professional sound that elevates every project and leaves a lasting impact.&rdquo;
                </p>
              </blockquote>
            </div>
          </article>

          {/* Waveform Divider */}
          <Waveform variant="divider" />

          {/* 3. Our Vision Section */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#E31E24]">
                03 / Future
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                Our Vision <span className="text-sm font-normal text-[#9BA1AD] block">(Why AirMix)</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-[#9BA1AD] leading-relaxed">
                Our vision is to build AirMix into a globally recognized audio
                technology and creative company that redefines the future of
                sound. We aspire to combine world-class sound engineering with
                emerging artificial intelligence to create innovative tools,
                intelligent workflows, and next-generation audio solutions that
                empower creators, businesses, and industries worldwide.
              </p>

              {/* Red Pull-Quote */}
              <blockquote className="border-l-2 border-[#E31E24] pl-4 sm:pl-6 py-3 my-6 bg-gradient-to-r from-[#E31E24]/10 to-transparent rounded-r-lg">
                <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
                  &ldquo;AirMix exists to push the boundaries of creativity, technology, and innovation—shaping the future of how music and audio are created, experienced, and shared.&rdquo;
                </p>
              </blockquote>
            </div>
          </article>
        </div>
      </section>

      {/* Acoustic Excellence Studio Environment Spotlight */}
      <section className="py-16 bg-[#0E0F12] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121316] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E31E24]">
                  Acoustic Integrity
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                  Engineered in a Calibrated Studio Environment
                </h3>
                <p className="text-sm sm:text-base text-[#9BA1AD] leading-relaxed">
                  Every mix, master, and audio enhancement passes through our reference-grade monitoring system, calibrated acoustic treatment, and professional-tier converters to ensure flawless translation on AirPods, car stereos, club sound systems, and streaming platforms.
                </p>
              </div>
              <div className="lg:col-span-6 relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/sound-design-studio.png"
                  alt="AirMix Audio Interface and Post-Production Suite"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        eyebrow="Work With AirMix"
        whiteTitle="Ready To Transform"
        redTitle="Your Sound?"
        description="Whether you're an artist, brand, or content creator, let's turn your vision into an exceptional audio experience."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}
