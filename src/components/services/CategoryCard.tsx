import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ServiceCategory } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { Waveform } from "@/components/ui/Waveform";
import { ConsultationBadge } from "@/components/ui/ConsultationBadge";

interface CategoryCardProps {
  category: ServiceCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card
      className={`h-full flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${
        category.highlight
          ? "border-[#E31E24]/50 shadow-[0_0_30px_rgba(227,30,36,0.18)] bg-gradient-to-b from-[#220B0E] to-[#120809]"
          : "hover:-translate-y-1"
      }`}
    >
      <div>
        {/* Top bar: Number + Waveform decoration */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <span className="text-2xl sm:text-3xl font-bold text-[#E31E24] font-[family-name:var(--font-display)]">
            {category.number}
          </span>
          <Waveform variant="compact" />
        </div>

        {/* Title & Tagline */}
        <div className="mt-5 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
            {category.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#9BA1AD] leading-relaxed">
            {category.tagline}
          </p>
        </div>

        {/* Checklist */}
        <div className="mt-6 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/80">
            {category.checklistTitle}
          </div>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#9BA1AD]"
              >
                <span className="w-4 h-4 rounded-full bg-[#E31E24]/20 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Block: Pricing Summary & Consultation */}
      <div className="mt-8 pt-5 border-t border-white/[0.08] space-y-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-[#9BA1AD] font-medium">Pricing</span>
            <span className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
              {category.pricingDisplay}
            </span>
          </div>
          {category.pricingSubtext && (
            <span className="text-[11px] text-[#BDBDBD]/60 leading-tight">
              {category.pricingSubtext}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <ConsultationBadge duration={category.consultation} />
          <Link
            href={category.pricingLink}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E31E24] hover:text-white transition-colors"
          >
            <span>{category.pricingLink.startsWith("/contact") ? "Get Quote" : "Explore"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
