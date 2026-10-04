"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FastForward } from "lucide-react";

interface IntroSplashProps {
  onIntroComplete?: () => void;
}

export function IntroSplash({ onIntroComplete }: IntroSplashProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [useFallbackAnimation, setUseFallbackAnimation] = useState(false);
  const [isReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  const [isActive, setIsActive] = useState(true);

  const dismissIntro = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsActive(false);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      if (typeof window !== "undefined") {
        sessionStorage.setItem("airmix_intro_seen", "true");
      }
      onIntroComplete?.();
    }, 600);
  }, [onIntroComplete, setIsActive]);

  // Initial session scroll lock and safety timer
  useEffect(() => {
    if (!isActive) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Generous safety timeout so user never gets stuck if video cannot load
    const safetyTimer = setTimeout(() => {
      dismissIntro();
    }, 60000);

    return () => {
      clearTimeout(safetyTimer);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isActive, dismissIntro]);

  // Playback & Autoplay handling
  useEffect(() => {
    if (!isActive || isReducedMotion || useFallbackAnimation) return;

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;

    const startPlay = async () => {
      try {
        video.muted = false;
        await video.play();
      } catch {
        // If browser policy initially blocks unmuted autoplay without user gesture:
        video.muted = true;
        try {
          await video.play();
        } catch {
          setUseFallbackAnimation(true);
        }
      }
    };

    startPlay();

    // Any first click/touch/keydown anywhere immediately unmutes sound
    const handleFirstInteraction = () => {
      if (video && video.muted) {
        video.muted = false;
        video.play().catch(() => {});
      }
    };

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [isActive, isReducedMotion, useFallbackAnimation]);

  // Fallback animation timer: ~4s brand intro then dismiss
  useEffect(() => {
    if (!useFallbackAnimation || !isActive) return;

    const timer = setTimeout(() => {
      dismissIntro();
    }, 4200);

    return () => clearTimeout(timer);
  }, [useFallbackAnimation, isActive, dismissIntro]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  if (!isActive) return null;

  return (
    <aside
      aria-label="AirMix Intro Presentation"
      className={`fixed inset-0 z-50 bg-[#0B0B0B] transition-opacity duration-600 flex items-center justify-center ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ height: "100dvh", width: "100vw" }}
    >
      {/* Top Controls Overlay */}
      <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-end pointer-events-auto">
        {/* Skip button */}
        <button
          onClick={dismissIntro}
          aria-label="Skip intro and view website"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818]/80 backdrop-blur-md border border-white/20 text-white hover:bg-[#E31E24] hover:border-[#E31E24] shadow-[0_0_16px_rgba(227,30,36,0.3)] transition-all text-xs font-bold uppercase tracking-wider group focus-visible:outline-none"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Main Intro Content: Video or Brand Fallback */}
      {!useFallbackAnimation && !isReducedMotion ? (
        <video
          ref={videoRef}
          src="/media/intro.mp4"
          poster="/media/intro-poster.jpg"
          autoPlay
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={dismissIntro}
          onError={() => setUseFallbackAnimation(true)}
          className="w-full h-full object-cover"
        />
      ) : isReducedMotion ? (
        /* Reduced motion: Static branded poster with Continue button */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-[#0B0B0B] text-center space-y-6">
          <div className="w-36 h-36 relative">
            <Image
              src="/brand/logo.svg"
              alt="AirMix"
              width={160}
              height={160}
              priority
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(227,30,36,0.4)]"
            />
          </div>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] tracking-tight text-white">
            AirMix Audio Production
          </h2>
          <button
            onClick={dismissIntro}
            className="px-8 py-3 rounded-lg bg-[#E31E24] text-white font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(227,30,36,0.5)] hover:bg-[#c7171d]"
          >
            Enter Studio
          </button>
        </div>
      ) : (
        /* Dynamic SVG/CSS Brand Intro Fallback (~4s) */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#121212] via-[#0B0B0B] to-[#050505] text-center overflow-hidden">
          {/* Studio glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#E31E24]/15 blur-[120px] pointer-events-none" />

          {/* Logo reveal */}
          <div className="relative z-10 w-32 h-32 sm:w-44 sm:h-44 mb-6 transition-all duration-1000 transform scale-100 animate-pulse">
            <Image
              src="/brand/logo.svg"
              alt="AirMix Logo"
              width={180}
              height={180}
              priority
              className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(227,30,36,0.55)]"
            />
          </div>

          {/* Waveforms animating outward */}
          <div className="relative z-10 flex items-center justify-center gap-1.5 h-12 w-full max-w-sm mb-6">
            <span className="w-1 bg-[#E31E24] rounded-full animate-bounce [animation-delay:0ms] h-4" />
            <span className="w-1 bg-[#E31E24] rounded-full animate-bounce [animation-delay:150ms] h-8" />
            <span className="w-1 bg-[#E31E24] rounded-full animate-bounce [animation-delay:300ms] h-12" />
            <span className="w-1 bg-[#E31E24] rounded-full animate-bounce [animation-delay:100ms] h-6" />
            <span className="w-1.5 bg-white rounded-full h-10 shadow-[0_0_12px_#fff]" />
            <span className="w-1 bg-white/90 rounded-full animate-bounce [animation-delay:200ms] h-7" />
            <span className="w-1 bg-white/80 rounded-full animate-bounce [animation-delay:400ms] h-11" />
            <span className="w-1 bg-white/70 rounded-full animate-bounce [animation-delay:250ms] h-5" />
          </div>

          <p className="relative z-10 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#9BA1AD]">
            Professional Audio Production
          </p>
        </div>
      )}

      {/* Thin Red Progress Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          className="h-full bg-[#E31E24] shadow-[0_0_10px_#E31E24] transition-all duration-150"
          style={{
            width: useFallbackAnimation ? "100%" : `${progress}%`,
            transitionDuration: useFallbackAnimation ? "4200ms" : "150ms",
          }}
        />
      </div>
    </aside>
  );
}
