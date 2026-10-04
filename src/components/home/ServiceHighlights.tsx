import React from "react";
import Link from "next/link";
import {
  Music,
  Sliders,
  Mic,
  Activity,
  Sparkles,
  Radio,
  ArrowRight,
} from "lucide-react";
import { homeServiceHighlights } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function ServiceHighlights() {
  const iconMap = {
    music: Music,
    sliders: Sliders,
    mic: Mic,
    waveform: Activity,
    sparkles: Sparkles,
    radio: Radio,
  };

  return (
    <section className="relative py-20 sm:py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Our Services"
            whiteTitle="Complete Audio Solutions For"
            redTitle="Every Need"
            description="End-to-end sound engineering, bespoke composition, and precision post-production for artists, creators, and brands."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:text-[#ff454c] tracking-wide group flex-shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServiceHighlights.map((svc) => {
            const Icon = iconMap[svc.iconName] || Music;
            return (
              <Link
                key={svc.slug}
                href={`/services#${svc.slug}`}
                className="group block"
              >
                <Card className="h-full flex flex-col justify-between p-6 sm:p-7 group-hover:-translate-y-1 transition-all duration-200">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-[0_0_16px_rgba(227,30,36,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white font-[family-name:var(--font-display)] group-hover:text-[#E31E24] transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-[#9BA1AD] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-[#E31E24] transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E31E24] transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
