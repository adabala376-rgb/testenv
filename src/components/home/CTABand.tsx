import React from "react";
import Link from "next/link";
import { Headphones } from "lucide-react";
import { siteConfig } from "@/data/site";

interface CTABandProps {
  eyebrow?: string;
  whiteTitle?: string;
  redTitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  isExternalSecondary?: boolean;
}

export function CTABand({
  eyebrow = "LET'S CREATE SOMETHING AMAZING",
  whiteTitle = "YOUR SOUND.",
  redTitle = "OUR PASSION.",
  description = "Whether you're an artist, a brand, or a business — AirMix is here to bring your sound to life.",
  primaryButtonText = "Chat on WhatsApp",
  primaryButtonHref,
  secondaryButtonText = "Contact Us",
  secondaryButtonHref = "/contact",
  isExternalSecondary = false,
}: CTABandProps) {
  const targetHref = primaryButtonHref || siteConfig.contact.bookingUrl;
  return (
    <section className="relative py-16 sm:py-20 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#E31E24]/30 bg-gradient-to-r from-[#7A0D11] via-[#38090C] to-[#120406] p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(227,30,36,0.25)]">
          {/* Ambient Headphone Icon Motif / Glow in background */}
          <div className="pointer-events-none absolute -right-12 -bottom-12 w-64 h-64 text-white/[0.04] flex items-center justify-center">
            <Headphones className="w-full h-full stroke-[0.8]" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-[0.18em] font-semibold text-white/90">
              {eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-display)] text-white">
              <span>{whiteTitle} </span>
              <span className="text-[#FF4B4B] drop-shadow-[0_0_20px_rgba(255,75,75,0.6)]">
                {redTitle}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={targetHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 font-semibold rounded-lg text-xs sm:text-sm px-6 py-3.5 bg-white hover:bg-neutral-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all tracking-wide group cursor-pointer border border-transparent"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-black text-black flex-shrink-0 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="text-black font-semibold">
                  {primaryButtonText === "Start Your Project" ? "Chat on WhatsApp" : primaryButtonText}
                </span>
              </a>

              {secondaryButtonText && (
                isExternalSecondary ? (
                  <a
                    href={secondaryButtonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-medium rounded-lg text-xs sm:text-sm px-6 py-3.5 bg-black/40 text-white border border-white/30 hover:border-white hover:bg-black/60 transition-all tracking-wide"
                  >
                    {secondaryButtonText}
                  </a>
                ) : (
                  <Link
                    href={secondaryButtonHref}
                    className="inline-flex items-center justify-center font-medium rounded-lg text-xs sm:text-sm px-6 py-3.5 bg-black/40 text-white border border-white/30 hover:border-white hover:bg-black/60 transition-all tracking-wide"
                  >
                    {secondaryButtonText}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
