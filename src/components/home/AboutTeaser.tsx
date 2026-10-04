import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutTeaser() {
  return (
    <section className="relative py-20 bg-[#0E0E0E] border-y border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Lockup */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 p-6 rounded-2xl bg-gradient-to-b from-[#1C1C1C] to-[#101010] border border-white/10 shadow-[0_0_40px_rgba(227,30,36,0.15)] flex items-center justify-center">
              <div className="w-48 h-48 relative">
                <Image
                  src="/brand/logo.svg"
                  alt="AirMix Audio Engineering"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(227,30,36,0.35)]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Verbatim text from About */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="About AirMix"
              whiteTitle="Precision Sound Engineering."
              redTitle="World-Class Results."
            />

            <p className="text-base sm:text-lg text-[#BDBDBD] leading-relaxed">
              AirMix is a professional audio production and sound engineering
              company dedicated to delivering high-quality music and audio
              solutions across every creative industry. We collaborate with
              musicians, content creators, filmmakers, game developers, brands,
              and agencies to produce exceptional audio experiences.
            </p>

            <p className="text-sm sm:text-base text-[#BDBDBD]/80 leading-relaxed">
              Every project is approached with technical precision, creativity,
              and a commitment to delivering audio that enhances storytelling and
              leaves a lasting impression.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:text-[#ff454c] tracking-wide group"
              >
                <span>Learn more about AirMix</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
