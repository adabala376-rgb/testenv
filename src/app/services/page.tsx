import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Headphones, ChevronRight } from "lucide-react";
import { serviceCategories, individualServices } from "@/data/services";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/services/CategoryCard";
import { IndividualServiceCard } from "@/components/services/IndividualServiceCard";
import { TrustStrip } from "@/components/services/TrustStrip";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CTABand } from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "Audio Production Services | AirMix",
  description:
    "Explore AirMix audio services: podcast cleaning, sound design, custom instrumentals, vocal tuning, stem separation, ad scoring, and full music production.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#0B0B0B] text-white">
      {/* A. Page Header & Breadcrumb */}
      <section className="relative pt-14 pb-20 bg-[#08080A] border-b border-white/[0.08] overflow-hidden">
        {/* Ambient Creative Audio Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
          <Image
            src="/images/sound-design-studio.png"
            alt="AirMix Creative Sound Design Studio"
            fill
            sizes="100vw"
            className="object-cover object-center filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/90 to-[#08080A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-[#08080A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#BDBDBD]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E31E24]" />
            <span className="text-white font-medium">Services</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E31E24]">
                Precision Audio Engineering
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                Our <span className="text-[#E31E24]">Services</span>
              </h1>
              <p className="text-base sm:text-lg text-[#9BA1AD] font-normal leading-relaxed">
                Professional audio solutions for every need. From podcast restoration
                and vocal tuning to broadcast ad scoring and full music production.
              </p>
            </div>

            {/* Right-side Badge Block */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#141519] border border-white/10 shadow-[0_0_20px_rgba(227,30,36,0.15)] flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-[#E31E24]/20 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24]">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-white/90 leading-snug">
                <span className="text-white block font-bold font-[family-name:var(--font-display)] tracking-wide">
                  AirMix Standard
                </span>
                <span className="text-[#9BA1AD]">
                  Premium Quality · Professional Sound · Global Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. Six Service Category Cards (3x2 on desktop, 1 col mobile) */}
      <section className="py-20 sm:py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Service Categories"
            whiteTitle="Choose Your"
            redTitle="Studio Path"
            description="Our specialized production suites are tailored for creators, recording artists, and commercial media producers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <CategoryCard key={cat.number} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* C. Individual Services in Exact Order (#individual-services) */}
      {/* 1) Ad Scoring, 2) Podcast Cleaning, 3) Sound Design, 4) Custom Jingles, 5) Custom Instrumentals, 6) Vocal Tuning, 7) Stem Separation */}
      <section id="individual-services" className="py-20 bg-[#0E0F12] border-t border-white/[0.08] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Individual Capabilities"
            whiteTitle="Targeted"
            redTitle="Audio Solutions"
            description="Select an individual engineering task to get a custom quote and begin your project."
          />

          <div className="space-y-4">
            {individualServices.map((svc) => (
              <IndividualServiceCard key={svc.slug} service={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* D. Why Choose AirMix (6 points) */}
      <WhyChoose />

      {/* G. CTA Band */}
      <CTABand
        eyebrow="Consultation Call"
        whiteTitle="Let's Create Something"
        redTitle="Extraordinary Together."
        description="Not sure which service is right for you? Book a complimentary consultation call and let's discuss your project in detail."
        primaryButtonText="DM to Book"
        primaryButtonHref={siteConfig.contact.bookingUrl}
        secondaryButtonText="Contact Form"
        secondaryButtonHref="/contact"
        isExternalSecondary={false}
      />

      {/* H. Trust Strip */}
      <TrustStrip />
    </main>
  );
}
