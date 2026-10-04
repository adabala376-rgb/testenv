import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "dark" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "dark",
  className = "",
}: BadgeProps) {
  const styles = {
    red: "bg-[#E31E24]/15 text-[#FF4B4B] border border-[#E31E24]/40 shadow-[0_0_12px_rgba(227,30,36,0.2)]",
    dark: "bg-[#181818] text-[#BDBDBD] border border-white/10",
    outline: "bg-transparent text-white border border-white/20",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${styles} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] animate-pulse" />
      {children}
    </span>
  );
}
