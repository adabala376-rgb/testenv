import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePricingTeasers } from "@/data/pricing";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingTeaser() {
  return (
    <section className="relative py-20 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="TRANSPARENT PRICING"
            whiteTitle="PREMIUM QUALITY."
            redTitle="HONEST RATES."
            description="Clear studio pricing tiers with no hidden fees or surprise revision charges."
          />
          <Link
            href="/services#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:text-[#ff454c] tracking-wide group flex-shrink-0"
          >
            <span>See Full Pricing & Tiers</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homePricingTeasers.map((tier) => (
            <Link
              key={tier.slug}
              href="/services#pricing"
              className="group block"
            >
              <Card className="h-full flex flex-col justify-between p-6 group-hover:-translate-y-1 transition-all duration-200">
                <div className="space-y-3">
                  {tier.badge && (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#9BA1AD] group-hover:border-[#E31E24]/40 group-hover:text-white transition-colors">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-[#9BA1AD] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] mt-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#9BA1AD]/80 block font-medium">
                      Starting at
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#E31E24] font-[family-name:var(--font-display)] tracking-tight">
                      {tier.startingPrice}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9BA1AD] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
