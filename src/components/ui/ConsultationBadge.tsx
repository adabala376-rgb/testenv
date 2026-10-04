import React from "react";
import { Clock } from "lucide-react";

interface ConsultationBadgeProps {
  duration?: string;
  className?: string;
}

export function ConsultationBadge({
  duration = "Complimentary consultation",
  className = "",
}: ConsultationBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#FF6B6B] text-xs font-medium ${className}`}
    >
      <Clock className="w-3.5 h-3.5 text-[#E31E24]" />
      <span>{duration}</span>
    </div>
  );
}
