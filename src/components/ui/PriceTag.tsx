import React from "react";

interface PriceTagProps {
  regularPrice?: string;
  offerPrice: string;
  badge?: string;
  isCustom?: boolean;
  className?: string;
}

export function PriceTag({
  regularPrice,
  offerPrice,
  badge = "Limited-time offer",
  isCustom = false,
  className = "",
}: PriceTagProps) {
  if (isCustom) {
    return (
      <div className={`space-y-1 ${className}`}>
        <div className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
          {offerPrice}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex items-baseline gap-2.5 flex-wrap">
        {regularPrice && (
          <span className="text-sm sm:text-base text-[#BDBDBD]/60 line-through decoration-[#BDBDBD]/70 font-medium">
            {regularPrice}
          </span>
        )}
        <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-display)]">
          {offerPrice}
        </span>
        {badge && (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#E31E24]/20 border border-[#E31E24]/50 text-[#FF4B4B]">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
