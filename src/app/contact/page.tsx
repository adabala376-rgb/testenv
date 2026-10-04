import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Headphones, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ContactCards } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact AirMix | Start Your Audio Project",
  description:
    "Get in touch with AirMix sound engineers for music production, mixing, mastering, podcast editing, and custom audio solutions. Every project starts with a complimentary consultation.",
};

// Social icon helper
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
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function ContactPage() {
  const activeSocials = siteConfig.socials.filter((s) => Boolean(s.href));

  return (
    <main className="w-full bg-[#08080A] text-white">
      {/* Header & Studio Mic Visual */}
      <section className="relative pt-12 pb-16 bg-[#08080A] bg-console-pattern border-b border-white/[0.08] overflow-hidden">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full bg-[#E31E24]/15 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#9BA1AD]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E31E24]" />
            <span className="text-white font-medium">Contact</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 8 columns */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E31E24]">
                Contact AirMix
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)] leading-[1.05]">
                <span>Let&apos;s Create </span>
                <span className="block sm:inline">Something Amazing </span>
                <span className="text-[#E31E24] drop-shadow-[0_0_25px_rgba(227,30,36,0.45)]">
                  Together.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#9BA1AD] max-w-2xl leading-relaxed">
                Have a project in mind or want to discuss your ideas? We&apos;d love to
                hear from you. Let&apos;s turn your vision into exceptional sound.
              </p>
            </div>

            {/* Right 4 columns: Studio Mic Image Showcase */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_40px_rgba(227,30,36,0.3)] bg-[#0C0D10] group">
                <Image
                  src="/images/studio-mic.png"
                  alt="AirMix Recording Studio Microphone"
                  fill
                  priority
                  sizes="(max-width: 1024px) 250px, 300px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-center">
                  <span className="text-xs font-semibold tracking-wide text-white font-[family-name:var(--font-display)] block">
                    Recording Live Suite
                  </span>
                  <span className="text-[10px] text-[#E31E24] uppercase tracking-wider font-medium">
                    Discovery Session Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Cards (Left) vs Message Form (Right) */}
      <section className="py-20 sm:py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Cards & Socials (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#E31E24]">
                  Direct Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
                  Reach Our Studio Team
                </h2>
                <p className="text-sm text-[#9BA1AD]">
                  Connect with our audio engineers directly via email, phone, or instant WhatsApp messaging.
                </p>
              </div>

              {/* Dynamic Contact Cards */}
              <ContactCards />

              {/* Other Ways to Connect */}
              {activeSocials.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#9BA1AD] block">
                    Other Ways to Connect
                  </span>
                  <div className="flex items-center gap-3">
                    {activeSocials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect on ${social.name}`}
                        className="w-10 h-10 rounded-lg bg-[#141519] border border-white/10 flex items-center justify-center text-[#9BA1AD] hover:text-[#E31E24] hover:border-[#E31E24]/60 hover:shadow-[0_0_12px_rgba(227,30,36,0.3)] transition-all"
                      >
                        <SocialIcon platform={social.platform} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-8 rounded-xl bg-[#141519] border border-white/10 text-center text-[#9BA1AD]">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="py-16 bg-[#0E0F12] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#141519] via-[#101114] to-[#1C0D0E] border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
                <Headphones className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
                  Ready to Bring Your Sound to Life?
                </h3>
                <p className="text-xs sm:text-sm text-[#9BA1AD] max-w-xl">
                  Whether you&apos;re an artist, a brand, or a business, AirMix is here to
                  turn ideas into powerful audio experiences.
                </p>
              </div>
            </div>

            <a
              href="#name"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#E31E24] text-white text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(227,30,36,0.35)] hover:bg-[#c7171d] transition-all flex-shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
