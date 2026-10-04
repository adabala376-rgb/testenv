import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#E31E24] text-white hover:bg-[#c7171d] shadow-[0_0_20px_rgba(227,30,36,0.35)] hover:shadow-[0_0_28px_rgba(227,30,36,0.55)] border border-[#ff3b41]/30",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/[0.04]",
    outline:
      "bg-[#181818] text-white border border-white/10 hover:border-[#E31E24]/60 hover:shadow-[0_0_16px_rgba(227,30,36,0.25)]",
    ghost:
      "bg-transparent text-[#BDBDBD] hover:text-white hover:bg-white/[0.06]",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 text-current" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
