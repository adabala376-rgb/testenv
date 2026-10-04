"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";

const PROJECT_TYPES = [
  "Podcast Cleaning",
  "Sound Design",
  "Custom Instrumentals",
  "Vocal Tuning",
  "Stem Separation",
  "Custom Jingles",
  "Ad Scoring",
  "Music Production",
  "Mixing & Mastering",
  "AIR MIX Elite Package",
  "Other",
];

// Mapping from slug in query to display project type
const SLUG_TO_PROJECT_MAP: Record<string, string> = {
  "podcast-cleaning": "Podcast Cleaning",
  "podcast-sound-design": "Podcast Cleaning",
  "sound-design": "Sound Design",
  "custom-instrumentals": "Custom Instrumentals",
  "vocal-tuning": "Vocal Tuning",
  "vocal-stem": "Vocal Tuning",
  "stem-separation": "Stem Separation",
  "custom-jingles": "Custom Jingles",
  "ad-scoring": "Ad Scoring",
  "ad-jingles": "Ad Scoring",
  "music-production": "Music Production",
  "sound-engineering": "Mixing & Mastering",
  "full-production": "Music Production",
  "air-mix-elite-package": "AIR MIX Elite Package",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const initialProjectType =
    serviceParam && SLUG_TO_PROJECT_MAP[serviceParam]
      ? SLUG_TO_PROJECT_MAP[serviceParam]
      : PROJECT_TYPES[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: initialProjectType,
    message: "",
    referenceLink: "",
    company_fax_website: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [showFallbackWhatsApp, setShowFallbackWhatsApp] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setShowFallbackWhatsApp(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.missingConfig) {
          setShowFallbackWhatsApp(true);
        }
        throw new Error(
          data.error || data.message || "Failed to submit inquiry. Please try again."
        );
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: PROJECT_TYPES[0],
        message: "",
        referenceLink: "",
        company_fax_website: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try WhatsApp or email.";
      setErrorMessage(message);
    }
  };

  return (
    <Card className="p-6 sm:p-8 border-white/[0.08] shadow-[0_0_40px_rgba(0,0,0,0.4)]">
      <div className="space-y-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
          Send Us a Message
        </h3>
        <p className="text-xs sm:text-sm text-[#9BA1AD]">
          Fill out the form and we&apos;ll get back to you within 24 hours.
        </p>
        <p className="text-xs text-[#E31E24] font-medium pt-1">
          ✦ Every project starts with a complimentary consultation.
        </p>
      </div>

      {/* ARIA Live status notification */}
      <div aria-live="polite" className="mb-4">
        {status === "success" && (
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/40 text-green-300 flex items-center gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
            <span>Thanks! We&apos;ll get back to you within 24 hours.</span>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/40 text-[#FF6B6B] space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#E31E24]" />
              <span>{errorMessage}</span>
            </div>
            {showFallbackWhatsApp && (
              <div className="pt-2 border-t border-white/10">
                <a
                  href={siteConfig.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white underline hover:text-[#E31E24] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#E31E24]" />
                  <span>Prefer to chat? Message us directly on WhatsApp.</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field (hidden from real users, filled by bots) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_fax_website">Leave this field blank</label>
          <input
            id="company_fax_website"
            name="company_fax_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_fax_website}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Your Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-wider text-[#BDBDBD] block"
            >
              Your Name <span className="text-[#E31E24]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Alex Rivers"
              className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#BDBDBD]/40 text-sm focus:border-[#E31E24] focus:outline-none focus:ring-1 focus:ring-[#E31E24] transition-colors"
            />
          </div>

          {/* Your Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wider text-[#BDBDBD] block"
            >
              Your Email <span className="text-[#E31E24]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#BDBDBD]/40 text-sm focus:border-[#E31E24] focus:outline-none focus:ring-1 focus:ring-[#E31E24] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone / WhatsApp */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="text-xs font-semibold uppercase tracking-wider text-[#BDBDBD] block"
            >
              Phone / WhatsApp <span className="text-white/40 text-[10px] lowercase">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#BDBDBD]/40 text-sm focus:border-[#E31E24] focus:outline-none focus:ring-1 focus:ring-[#E31E24] transition-colors"
            />
          </div>

          {/* Project Type */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectType"
              className="text-xs font-semibold uppercase tracking-wider text-[#BDBDBD] block"
            >
              Project Type <span className="text-[#E31E24]">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white text-sm focus:border-[#E31E24] focus:outline-none focus:ring-1 focus:ring-[#E31E24] transition-colors"
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type} className="bg-[#181818] text-white">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reference Link */}
        <div className="space-y-1.5">
          <label
            htmlFor="referenceLink"
            className="text-xs font-semibold uppercase tracking-wider text-[#BDBDBD] block"
          >
            Reference Link <span className="text-white/40 text-[10px] lowercase">(Drive / YouTube / SoundCloud)</span>
          </label>
          <input
            id="referenceLink"
            name="referenceLink"
            type="url"
            value={formData.referenceLink}
            onChange={handleChange}
            placeholder="https://drive.google.com/..."
            className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#BDBDBD]/40 text-sm focus:border-[#E31E24] focus:outline-none focus:ring-1 focus:ring-[#E31E24] transition-colors"
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-wider text-[#BDBDBD] block"
          >
            Message <span className="text-[#E31E24]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your audio project, timeline, and requirements..."
            className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#BDBDBD]/40 text-sm focus:border-[#E31E24] focus:outline-none focus:ring-1 focus:ring-[#E31E24] transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#E31E24] text-white text-sm font-semibold tracking-wide shadow-[0_0_24px_rgba(227,30,36,0.45)] hover:bg-[#c7171d] hover:shadow-[0_0_30px_rgba(227,30,36,0.6)] transition-all disabled:opacity-50 group"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </Card>
  );
}
