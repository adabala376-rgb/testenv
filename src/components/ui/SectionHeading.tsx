import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  whiteTitle: string;
  redTitle: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  whiteTitle,
  redTitle,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          {isCenter && <div className="h-px w-6 bg-[#E31E24]/60" />}
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E31E24]">
            {eyebrow}
          </span>
          {isCenter && <div className="h-px w-6 bg-[#E31E24]/60" />}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] font-[family-name:var(--font-display)]">
        <span className="text-white block sm:inline">{whiteTitle} </span>
        <span className="text-[#E31E24] block sm:inline">{redTitle}</span>
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-[#9BA1AD] font-normal leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
}
