import React from "react";
import { ShieldCheck, Scale, Headphones, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";

export function TrustStrip() {
  const icons = [ShieldCheck, Scale, Headphones, Sparkles];

  return (
    <section className="relative py-12 sm:py-16 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.trustStrip.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Card
                key={item.title}
                className="p-6 flex items-start gap-4 border-white/[0.06] bg-[#121212]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center text-[#E31E24] flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white tracking-tight font-[family-name:var(--font-display)]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#BDBDBD] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
