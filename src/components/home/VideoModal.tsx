"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Volume2, VolumeX } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  useEffect(() => {
    if (isOpen && videoRef.current) {
      setVideoError(false);
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser restricts unmuted, try muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => setVideoError(true));
          }
        });
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="AirMix Showreel Video"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-[#E31E24] text-white transition-colors duration-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
        aria-label="Close video showreel"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Sound toggle button */}
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
          }
        }}
        className="absolute top-6 left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 border border-white/20 focus:outline-none"
        aria-label={isMuted ? "Unmute sound" : "Mute sound"}
      >
        {isMuted ? <VolumeX className="w-6 h-6 text-[#E31E24]" /> : <Volume2 className="w-6 h-6" />}
      </button>

      <div className="relative w-full max-w-5xl aspect-video mx-4 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(227,30,36,0.25)] bg-[#0B0B0B]">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/media/intro.mp4"
            poster="/media/intro-poster.jpg"
            controls
            autoPlay
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          /* High-aesthetic studio fallback when intro.mp4 has not yet been placed in /public/media/ */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#181818] to-[#0A0A0A] text-center space-y-6">
            <div className="w-28 h-28 relative animate-pulse">
              <Image
                src="/brand/logo.svg"
                alt="AirMix Audio Engineering"
                width={120}
                height={120}
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(227,30,36,0.5)]"
              />
            </div>
            <div className="space-y-2 max-w-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] tracking-tight text-white">
                AirMix Showreel
              </h3>
              <p className="text-sm text-[#BDBDBD]">
                High-definition studio showreel video is being synced to <code className="text-[#E31E24] bg-white/5 px-2 py-0.5 rounded">/public/media/intro.mp4</code>.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-[#E31E24] text-white text-sm font-semibold hover:bg-[#c7171d] shadow-[0_0_20px_rgba(227,30,36,0.4)]"
            >
              Back to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
