"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left: Refined Luxury AirMix Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none"
            aria-label="AirMix Home"
          >
            <div className="h-10 sm:h-11 w-auto relative flex items-center">
              <Image
                src="/brand/navbar-logo.svg"
                alt="AirMix Audio Engineering"
                width={200}
                height={44}
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Center Links (EXACTLY 4: Home, Services, About, Contact) */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#BDBDBD] hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#E31E24] shadow-[0_0_8px_#E31E24] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E31E24] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_18px_rgba(227,30,36,0.35)] hover:shadow-[0_0_26px_rgba(227,30,36,0.55)] hover:bg-[#c7171d] transition-all duration-200 group active:scale-[0.98]"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-[#BDBDBD] hover:text-white rounded-lg border border-white/10"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-height Mobile Drawer */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
export default Navbar;
