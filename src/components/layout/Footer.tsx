import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

// Clean social platform SVG icons
function SocialIcon({ platform }: { platform: string }) {
  if (platform === "instagram") {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  if (platform === "youtube") {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
  }
  if (platform === "linkedin") {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    );
  }
  if (platform === "spotify") {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.218.358-.683.472-1.041.254-2.855-1.745-6.449-2.14-10.683-1.173-.41.093-.815-.164-.908-.573-.093-.41.164-.816.574-.909 4.636-1.06 8.604-.613 11.804 1.346.358.217.472.683.254 1.055zm1.468-3.262c-.274.446-.86.587-1.306.313-3.268-2.008-8.25-2.59-12.115-1.417-.497.15-1.026-.135-1.177-.633-.15-.498.136-1.026.634-1.177 4.417-1.341 9.912-.693 13.65 1.608.447.274.588.86.314 1.306zm.126-3.41c-3.918-2.327-10.375-2.541-14.112-1.406-.601.183-1.241-.166-1.424-.767-.183-.601.166-1.242.767-1.425 4.3-1.306 11.433-1.054 15.932 1.616.541.321.718 1.02.397 1.562-.32.541-1.02.719-1.56.398l-.001.022z"/>
      </svg>
    );
  }
  // X (Twitter)
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const serviceLinks = [
  { name: "Podcast Cleaning", href: "/services#podcast-cleaning" },
  { name: "Sound Design", href: "/services#sound-design" },
  { name: "Custom Instrumentals", href: "/services#custom-instrumentals" },
  { name: "Vocal Tuning", href: "/services#vocal-tuning" },
  { name: "Stem Separation", href: "/services#stem-separation" },
  { name: "Custom Jingles", href: "/services#custom-jingles" },
  { name: "Ad Scoring", href: "/services#ad-scoring" },
];

export function Footer() {
  const activeSocials = siteConfig.socials.filter((s) => Boolean(s.href));

  return (
    <footer className="w-full bg-[#080808] border-t border-white/[0.08] text-white">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="w-52 h-11 relative">
                <Image
                  src="/brand/navbar-logo.svg"
                  alt="AirMix Audio Engineering"
                  width={220}
                  height={44}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <p className="text-sm text-[#BDBDBD] leading-relaxed">
              AirMix is a professional audio production and sound engineering
              company delivering world-class audio solutions across every
              creative industry.
            </p>

            {/* Social Icons */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {activeSocials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit AirMix on ${social.name}`}
                    className="w-9 h-9 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-center text-[#BDBDBD] hover:text-[#E31E24] hover:border-[#E31E24]/50 hover:shadow-[0_0_12px_rgba(227,30,36,0.25)] transition-all duration-200"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.16em] font-bold text-white font-[family-name:var(--font-display)]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#BDBDBD] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E31E24]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (deep-linked) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.16em] font-bold text-white font-[family-name:var(--font-display)]">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-[#BDBDBD] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Start a Project */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.16em] font-bold text-white font-[family-name:var(--font-display)]">
              Start A Project
            </h3>
            <p className="text-sm text-[#BDBDBD] leading-relaxed">
              Ready to elevate your sound? Contact our engineering team for a
              custom quote or consultation.
            </p>

            <div className="space-y-2.5 text-sm text-[#BDBDBD]">
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E31E24]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}
              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E31E24]" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              )}
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E31E24] text-white text-xs font-semibold tracking-wide shadow-[0_0_18px_rgba(227,30,36,0.35)] hover:shadow-[0_0_24px_rgba(227,30,36,0.55)] hover:bg-[#c7171d] transition-all duration-200 group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright only */}
      <div className="border-t border-white/[0.06] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BDBDBD]/60">
          <p>© 2026 AirMix. All rights reserved.</p>
          <p className="tracking-wider uppercase font-semibold text-[#8E929E]">
            PRECISION SOUND ENGINEERING
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
