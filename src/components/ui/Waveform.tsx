import React from "react";

interface WaveformProps {
  variant?: "divider" | "accent" | "compact";
  className?: string;
}

export function Waveform({ variant = "divider", className = "" }: WaveformProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-1 h-5 ${className}`}>
        {/* Left red bars */}
        <div className="flex items-center gap-[2px]">
          <span className="w-[2px] h-2 bg-[#E31E24] rounded-full animate-pulse" />
          <span className="w-[2px] h-3.5 bg-[#E31E24] rounded-full" />
          <span className="w-[2px] h-5 bg-[#E31E24] rounded-full" />
          <span className="w-[2px] h-2.5 bg-[#E31E24] rounded-full" />
        </div>
        {/* Center fader dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
        {/* Right white bars */}
        <div className="flex items-center gap-[2px]">
          <span className="w-[2px] h-3 bg-white/80 rounded-full" />
          <span className="w-[2px] h-5 bg-white/90 rounded-full" />
          <span className="w-[2px] h-4 bg-white/70 rounded-full" />
          <span className="w-[2px] h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <svg
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-36 h-7 opacity-90 ${className}`}
        aria-hidden="true"
      >
        {/* Red side */}
        <path
          d="M10 20 L20 12 L30 26 L40 8 L50 30 L60 14 L70 24 L80 16 L90 20"
          stroke="#E31E24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center separator */}
        <circle cx="100" cy="20" r="3" fill="#FFFFFF" />
        {/* White side */}
        <path
          d="M110 20 L120 15 L130 28 L140 10 L150 25 L160 12 L170 26 L180 18 L190 20"
          stroke="#E5E5EA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.8"
        />
      </svg>
    );
  }

  // Default: divider
  return (
    <div className={`relative flex items-center justify-center my-8 w-full overflow-hidden ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#E31E24]/60 to-[#E31E24] flex-1 max-w-xs" />
      <div className="px-4 flex items-center gap-1.5">
        <span className="w-1 h-3 bg-[#E31E24] rounded-full" />
        <span className="w-1 h-5 bg-[#E31E24] rounded-full" />
        <span className="w-1.5 h-7 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
        <span className="w-1 h-5 bg-white/80 rounded-full" />
        <span className="w-1 h-3 bg-white/60 rounded-full" />
      </div>
      <div className="h-px bg-gradient-to-l from-transparent via-white/40 to-white/80 flex-1 max-w-xs" />
    </div>
  );
}
