import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function Card({
  children,
  className = "",
  glowOnHover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`relative rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#1C1C1C] to-[#121212] p-6 transition-all duration-300 ${
        glowOnHover
          ? "hover:border-[#E31E24]/60 hover:shadow-[0_0_24px_-4px_rgba(227,30,36,0.3)]"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
