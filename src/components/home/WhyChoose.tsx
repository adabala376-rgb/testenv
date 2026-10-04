import React from "react";
import {
  ShieldCheck,
  Clock,
  UserCheck,
  Cpu,
  HeartHandshake,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function WhyChoose() {
  const icons = [
    ShieldCheck,
    Clock,
    UserCheck,
    Cpu,
    HeartHandshake,
    Globe,
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose AirMix"
          whiteTitle="Built for Creators."
          redTitle="Engineered for Excellence."
          description="We combine meticulous studio craftsmanship with modern audio science to guarantee flawless sound."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Card
                key={item.title}
                className="p-6 sm:p-7 flex flex-col justify-start space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center text-[#E31E24] shadow-[0_0_16px_rgba(227,30,36,0.2)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9BA1AD] leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
