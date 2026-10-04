"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VideoModal } from "./VideoModal";
import { StudioConsoleDeck } from "./StudioConsoleDeck";

export function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#08080A] pt-12 pb-20">
        {/* Cinematic Studio Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/studio-console-v2.jpg"
            alt="AirMix Master Audio Control Room"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 scale-105 filter blur-[2px]"
          />
          {/* Deep dark studio gradient masking */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/90 to-[#08080A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-[#08080A]" />
        </div>

        {/* Studio Atmospheric Red Glow Lights */}
        <div className="pointer-events-none absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[#E31E24]/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full bg-[#E31E24]/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content Column (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E31E24] shadow-[0_0_10px_#E31E24] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E31E24]">
                  Professional Audio Production
                </span>
              </div>

              {/* H1 Headline with Sleek Modern Typography */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight leading-[1.02] font-[family-name:var(--font-display)]">
                <span className="text-white block">We Don&apos;t Just</span>
                <span className="text-[#E31E24] block drop-shadow-[0_0_40px_rgba(227,30,36,0.45)]">
                  Mix Sound.
                </span>
              </h1>

              {/* Sub-paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-[#9BA1AD] max-w-xl font-normal leading-relaxed">
                AirMix delivers world-class audio production, sound engineering,
                and AI-powered solutions that bring your ideas to life.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  icon={true}
                  className="font-semibold tracking-wide text-xs sm:text-sm px-7 py-4"
                >
                  Explore Services
                </Button>

                <button
                  onClick={() => setShowVideoModal(true)}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-[#141519]/80 backdrop-blur-md text-white border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all text-xs sm:text-sm font-semibold tracking-wide group"
                >
                  <span className="w-7 h-7 rounded-full bg-[#E31E24]/20 border border-[#E31E24]/60 flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-colors shadow-[0_0_12px_rgba(227,30,36,0.35)]">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Play Showreel</span>
                </button>
              </div>
            </div>

            {/* Right Column: Live Studio Console Deck */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <StudioConsoleDeck />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal triggered by "Play Showreel" */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />
    </>
  );
}
