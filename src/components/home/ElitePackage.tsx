import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ConsultationBadge } from "@/components/ui/ConsultationBadge";

export function ElitePackage() {
  const inclusions = [
    "Music Production",
    "Sound Engineering",
    "Arrangement",
    "Editing",
    "Mixing & Mastering",
    "Unlimited Creative Collaboration",
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#E31E24]/40 bg-gradient-to-br from-[#200B0E] via-[#140809] to-[#0A0A0A] p-8 sm:p-12 lg:p-14 shadow-[0_0_40px_rgba(227,30,36,0.18)]">
          {/* Subtle Ambient Red Glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#E31E24]/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E31E24] text-white shadow-[0_0_12px_rgba(227,30,36,0.5)]">
                  Flagship Solution
                </span>
                <ConsultationBadge duration="Complimentary 20–30 min consultation" />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                  AirMix <span className="text-[#E31E24]">Elite Package</span>
                </h2>
                <p className="text-base sm:text-lg text-[#9BA1AD] mt-2">
                  The complete end-to-end solution for your music and audio projects.
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E31E24]/20 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 columns: Pricing & CTA */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center lg:border-l lg:border-white/10 lg:pl-10 space-y-4">
              <div className="lg:text-right">
                <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#8E929E]">
                  Investment
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight mt-1">
                  Custom Quotation
                </div>
                <p className="text-xs text-[#9BA1AD] mt-1 max-w-xs">
                  Tailored to your creative timeline, instrumentation, and stem scope.
                </p>
              </div>

              <Link
                href="/contact?service=air-mix-elite-package"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#E31E24] text-white text-sm font-semibold tracking-wide shadow-[0_0_24px_rgba(227,30,36,0.4)] hover:bg-[#c7171d] hover:shadow-[0_0_32px_rgba(227,30,36,0.6)] transition-all group"
              >
                <span>Book Elite Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
