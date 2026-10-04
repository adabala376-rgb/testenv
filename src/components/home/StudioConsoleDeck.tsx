"use client";

import React, { useState, useRef } from "react";
import { Headphones, Mic, Music, Waves, Sparkles, Disc, Volume2 } from "lucide-react";

interface Instrument {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  note: string;
  freqs: number[];
  type: OscillatorType;
}

const instruments: Instrument[] = [
  {
    id: "headphones",
    name: "Headphones",
    subtitle: "Stereo Monitoring",
    icon: Headphones,
    color: "#E31E24",
    note: "3D Spatial Audio",
    freqs: [440, 554.37, 659.25], // A major chord
    type: "sine",
  },
  {
    id: "piano",
    name: "Piano & Keys",
    subtitle: "Melody & Chords",
    icon: Music,
    color: "#FF5C61",
    note: "Grand Piano C4-E4-G4",
    freqs: [261.63, 329.63, 392.0], // C major
    type: "triangle",
  },
  {
    id: "harmony",
    name: "Harmony",
    subtitle: "Vocal Layering",
    icon: Waves,
    color: "#E31E24",
    note: "Harmonic Resonance",
    freqs: [329.63, 392.0, 493.88, 587.33], // Em7
    type: "sine",
  },
  {
    id: "mic",
    name: "Studio Mic",
    subtitle: "Vocal Clarity",
    icon: Mic,
    color: "#FF4B4B",
    note: "Tuned Lead Vocals",
    freqs: [220, 440, 660], // Vocal harmonic series
    type: "sawtooth",
  },
  {
    id: "beat",
    name: "Beat & Rhythm",
    subtitle: "Transient Punch",
    icon: Disc,
    color: "#E31E24",
    note: "Kick & Percussion",
    freqs: [65, 130], // Deep punch
    type: "sine",
  },
  {
    id: "master",
    name: "Master Polish",
    subtitle: "Analog Limiter",
    icon: Sparkles,
    color: "#FF7377",
    note: "+2.4 dB Air Shimmer",
    freqs: [523.25, 659.25, 783.99, 1046.5], // High chime
    type: "triangle",
  },
];

export function StudioConsoleDeck() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lastPlayed, setLastPlayed] = useState<string>("Tap any instrument to play sound");
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playInstrument = (inst: Instrument) => {
    setActiveId(inst.id);
    setLastPlayed(`${inst.name} · ${inst.note}`);

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioCtx();
      audioCtxRef.current = ctx;

      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      masterGain.connect(ctx.destination);

      inst.freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = inst.type;
        osc.frequency.setValueAtTime(freq, now);

        // Subtle detune for rich analog chorus
        if (idx > 0) {
          osc.detune.setValueAtTime((idx % 2 === 0 ? 5 : -5), now);
        }

        // Lowpass filter for warm analog feel
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(inst.id === "beat" ? 180 : 1800, now);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 1.2);
      });
    } catch {
      // Audio fallback without crashing
    }

    setTimeout(() => {
      setActiveId((current) => (current === inst.id ? null : current));
    }, 700);
  };

  return (
    <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] p-6 sm:p-7 shadow-[0_0_50px_rgba(227,30,36,0.22)]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#E31E24]/15 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[#E31E24]/10 blur-[80px]" />

      <div className="relative z-10 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] shadow-[0_0_10px_#E31E24] animate-pulse" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-[family-name:var(--font-display)]">
                AirMix Studio Lab
              </h3>
              <p className="text-[11px] text-white/50">
                Tap an instrument to hear the signature sound
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-white/70 font-mono">
            <Volume2 className="w-3 h-3 text-[#E31E24]" />
            <span>Interactive</span>
          </div>
        </div>

        {/* 6 Interactive Instrument Pads (2 columns x 3 rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {instruments.map((inst) => {
            const Icon = inst.icon;
            const isActive = activeId === inst.id;

            return (
              <button
                key={inst.id}
                onClick={() => playInstrument(inst)}
                className={`relative group p-4 rounded-xl border text-left transition-all duration-200 select-none cursor-pointer flex flex-col justify-between h-28 ${
                  isActive
                    ? "bg-[#E31E24]/20 border-[#E31E24] shadow-[0_0_24px_rgba(227,30,36,0.45)] scale-[1.03]"
                    : "bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-0.5"
                }`}
              >
                {/* Active ripple dot */}
                {isActive && (
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#E31E24] animate-ping" />
                )}

                {/* Icon */}
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#E31E24] text-white shadow-[0_0_16px_rgba(227,30,36,0.6)]"
                      : "bg-white/[0.06] text-white/80 group-hover:text-white group-hover:bg-[#E31E24]/20 group-hover:text-[#FF5C61]"
                  }`}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </div>

                {/* Texts */}
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white tracking-tight font-[family-name:var(--font-display)]">
                    {inst.name}
                  </div>
                  <div className="text-[10px] text-white/50 leading-tight">
                    {inst.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Waveform / Status Bar */}
        <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                activeId ? "bg-[#E31E24] animate-ping" : "bg-white/30"
              }`}
            />
            <span className="text-xs font-mono text-white/80 truncate">
              {lastPlayed}
            </span>
          </div>

          {/* Mini Wave Bars */}
          <div className="flex items-end gap-1 h-4 flex-shrink-0">
            {[40, 75, 100, 60, 90, 45, 80].map((h, i) => (
              <span
                key={i}
                className={`w-0.5 rounded-full transition-all duration-200 ${
                  activeId
                    ? "bg-[#E31E24] animate-pulse"
                    : "bg-white/20"
                }`}
                style={{
                  height: activeId ? `${h}%` : "30%",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
