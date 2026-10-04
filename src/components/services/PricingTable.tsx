"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { pricingGroups, PricingGroup } from "@/data/pricing";
import { Card } from "@/components/ui/Card";
import { ConsultationBadge } from "@/components/ui/ConsultationBadge";
import { PriceTag } from "@/components/ui/PriceTag";

export function PricingTable() {
  const [activeTab, setActiveTab] = useState<string>(pricingGroups[0].id);

  const selectedGroup: PricingGroup =
    pricingGroups.find((g) => g.id === activeTab) || pricingGroups[0];

  return (
    <div id="pricing" className="scroll-mt-28 space-y-8">
      {/* Group Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/[0.08]">
        {pricingGroups.map((group) => {
          const isActive = group.id === activeTab;
          return (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-4 sm:px-6 py-3 rounded-t-lg text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all border-b-2 font-[family-name:var(--font-display)] ${
                isActive
                  ? "bg-[#141519] text-white border-[#E31E24] shadow-[0_-4px_16px_rgba(227,30,36,0.15)]"
                  : "bg-transparent text-[#9BA1AD] border-transparent hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              {group.title}
            </button>
          );
        })}
      </div>

      {/* Selected Group Content */}
      <div className="space-y-6">
        {/* Group Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-xl bg-[#121316] border border-white/[0.08]">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
              {selectedGroup.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#9BA1AD]">
              {selectedGroup.subtitle}
            </p>
          </div>
          {selectedGroup.consultationNote && (
            <ConsultationBadge
              duration={selectedGroup.consultationNote}
              className="flex-shrink-0"
            />
          )}
        </div>

        {/* Pricing Tiers Table / Card Layout */}
        <Card className="p-0 overflow-hidden border-white/[0.08]">
          {selectedGroup.packageType === "custom" ? (
            /* Custom Commercial / Production Package */
            <div className="p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#FF4B4B] text-xs font-semibold uppercase tracking-wider">
                Bespoke Production
              </div>

              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
                  {selectedGroup.tiers[0].offerPrice}
                </div>
                <p className="text-sm text-[#9BA1AD]">
                  {selectedGroup.details}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/contact?service=${selectedGroup.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#E31E24] text-white text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(227,30,36,0.4)] hover:bg-[#c7171d] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Standard / Fixed Duration Tier Table */
            <div className="divide-y divide-white/[0.06]">
              {/* Desktop Table Header */}
              <div className="hidden sm:grid sm:grid-cols-12 px-6 py-4 bg-[#0E0F12] text-xs font-semibold uppercase tracking-wider text-[#9BA1AD] font-[family-name:var(--font-display)]">
                <div className="sm:col-span-6">Duration / Track Length</div>
                <div className="sm:col-span-4">Rate & Limited Offer</div>
                <div className="sm:col-span-2 text-right">Action</div>
              </div>

              {/* Rows */}
              {selectedGroup.tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-12 items-center p-6 gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  {/* Duration */}
                  <div className="sm:col-span-6">
                    <span className="text-base sm:text-lg font-semibold text-white font-[family-name:var(--font-display)] tracking-tight">
                      {tier.duration}
                    </span>
                  </div>

                  {/* Pricing with strike-through and offer */}
                  <div className="sm:col-span-4">
                    <PriceTag
                      regularPrice={tier.regularPrice}
                      offerPrice={tier.offerPrice}
                      isCustom={tier.isCustom}
                    />
                  </div>

                  {/* Button */}
                  <div className="sm:col-span-2 sm:text-right">
                    <Link
                      href={`/contact?service=${selectedGroup.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white/[0.05] border border-white/10 hover:border-[#E31E24] hover:bg-[#E31E24] text-white text-xs font-semibold tracking-wide transition-all"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
