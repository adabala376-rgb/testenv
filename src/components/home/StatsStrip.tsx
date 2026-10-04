import React from "react";
import { siteConfig } from "@/data/site";
import { Award, Users, Globe2, Sparkles } from "lucide-react";

export function StatsStrip() {
  if (!siteConfig.showStats) return null;

  const icons = [Sparkles, Users, Globe2, Award];

  return (
    <section className="relative z-10 w-full border-y border-white/[0.08] bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.stats.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center text-[#E31E24] flex-shrink-0 shadow-[0_0_12px_rgba(227,30,36,0.2)]">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#BDBDBD] font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
