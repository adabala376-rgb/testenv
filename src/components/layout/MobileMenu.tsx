"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#0B0B0B]/95 backdrop-blur-xl md:hidden transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      ref={drawerRef}
    >
      {/* Top Header inside drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
        <Link href="/" onClick={onClose} className="flex items-center">
          <div className="h-9 w-auto relative">
            <Image
              src="/brand/navbar-logo.svg"
              alt="AirMix Audio Engineering"
              width={170}
              height={38}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#BDBDBD] hover:text-white rounded-lg border border-white/10 hover:border-white/20"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 flex flex-col justify-center px-8 space-y-6">
        {siteConfig.navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`text-2xl font-bold tracking-tight font-[family-name:var(--font-display)] flex items-center justify-between group transition-colors ${
                isActive ? "text-white" : "text-[#BDBDBD] hover:text-white"
              }`}
            >
              <span>{item.name}</span>
              {isActive ? (
                <span className="w-2 h-2 rounded-full bg-[#E31E24] shadow-[0_0_8px_#E31E24]" />
              ) : (
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E31E24]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Drawer Footer CTA */}
      <div className="p-8 border-t border-white/[0.08] space-y-4">
        <Link
          href="/contact"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#E31E24] text-white font-semibold text-sm shadow-[0_0_20px_rgba(227,30,36,0.35)]"
        >
          <span>Let&apos;s Work Together</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-center text-xs text-[#BDBDBD]/60">
          Professional Audio Production & Sound Engineering
        </p>
      </div>
    </div>
  );
}
