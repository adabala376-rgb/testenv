import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndividualService } from "@/data/services";
import { Card } from "@/components/ui/Card";

interface IndividualServiceCardProps {
  service: IndividualService;
}

export function IndividualServiceCard({ service }: IndividualServiceCardProps) {
  return (
    <div id={service.slug} className="scroll-mt-28">
      <Card className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-white/[0.08] hover:border-[#E31E24]/60">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center text-[#E31E24] text-xs font-bold font-mono">
              0{service.number}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
              {service.title}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-[#9BA1AD] leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="flex-shrink-0 pt-2 md:pt-0">
          <Link
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#141519] border border-white/15 text-white hover:border-[#E31E24] hover:bg-[#E31E24] hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] transition-all text-xs font-semibold tracking-wide group"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
