"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import {
  Headphones, Mic, Radio, Play, Music, Waves,
  Pause, Volume2, SlidersHorizontal, Disc3, Zap,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════
   TYPES & CONSTANTS
══════════════════════════════════════════════════════════ */
interface Ripple { id: number; x: number; y: number }

const EQ_CFG = [
  { freq: "63", min: 20, max: 74 },
  { freq: "125", min: 32, max: 88 },
  { freq: "250", min: 14, max: 96 },
  { freq: "500", min: 42, max: 100 },
  { freq: "1k", min: 24, max: 84 },
  { freq: "2k", min: 36, max: 78 },
  { freq: "4k", min: 16, max: 92 },
  { freq: "8k", min: 28, max: 68 },
  { freq: "16k", min: 10, max: 54 },
];
const BAR_MAX = 148;

const ICON_DEFS = [
  { id: 0, Icon: Headphones, label: "Headphones", x: "4%", y: "10%", dur: 5.2, del: 0, sz: 30, fa: 18 },
  { id: 1, Icon: Mic, label: "Microphone", x: "91%", y: "8%", dur: 6.8, del: 1.2, sz: 26, fa: 14 },
  { id: 2, Icon: Radio, label: "Radio", x: "2%", y: "72%", dur: 5.9, del: 0.7, sz: 28, fa: 22 },
  { id: 3, Icon: SlidersHorizontal, label: "Mixer", x: "90%", y: "66%", dur: 7.1, del: 2.1, sz: 24, fa: 16 },
  { id: 4, Icon: Music, label: "Music Note", x: "6%", y: "43%", dur: 6.3, del: 1.6, sz: 22, fa: 20 },
  { id: 5, Icon: Waves, label: "Soundwave", x: "87%", y: "36%", dur: 5.5, del: 0.4, sz: 26, fa: 12 },
  { id: 6, Icon: Volume2, label: "Volume", x: "44%", y: "2%", dur: 6.6, del: 3.0, sz: 20, fa: 18 },
  { id: 7, Icon: Disc3, label: "Vinyl", x: "44%", y: "93%", dur: 5.1, del: 1.8, sz: 24, fa: 14 },
  { id: 8, Icon: Zap, label: "Signal", x: "95%", y: "48%", dur: 4.8, del: 0.9, sz: 18, fa: 20 },
];

/* ══════════════════════════════════════════════════════════
   AIR MIX LOGO — exact uploaded brand image
══════════════════════════════════════════════════════════ */
function AirMixLogo({ size = 150 }: { size?: number }) {
  return (
    <Image
      src="/airmix-logo.jpg"
      alt="Air Mix logo"
      width={size}
      height={size}
      priority
      className="w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[150px] object-contain rounded-xl select-none pointer-events-none drop-shadow-[0_0_20px_rgba(227,30,36,0.35)]"
    />
  );
}

/* ══════════════════════════════════════════════════════════
   CURSOR GLOW — smooth spring-tracked spotlight
══════════════════════════════════════════════════════════ */
function CursorGlow() {
  const rawX = useMotionValue(-600);
  const rawY = useMotionValue(-600);
  const x = useSpring(rawX, { stiffness: 65, damping: 20 });
  const y = useSpring(rawY, { stiffness: 65, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 rounded-full"
      style={{
        width: 520, height: 520, x, y,
        translateX: "-50%", translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(227,30,36,0.07) 0%, rgba(227,30,36,0.03) 45%, transparent 72%)",
      }}
    />
  );
}

/* ══════════════════════════════════════════════════════════
   PARALLAX GRID
══════════════════════════════════════════════════════════ */
function AmbientGrid({ mx, my }: { mx: number; my: number }) {
  const sx = useSpring(0, { stiffness: 26, damping: 14 });
  const sy = useSpring(0, { stiffness: 26, damping: 14 });
  useEffect(() => { sx.set((mx - 0.5) * -24); }, [mx, sx]);
  useEffect(() => { sy.set((my - 0.5) * -24); }, [my, sy]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-[-6%] w-[112%] h-[112%] z-0"
      style={{ x: sx, y: sy }}
    >
      <svg className="w-full h-full opacity-[0.048]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pg" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E31E24" strokeWidth="0.55" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 48% at 50% 52%, rgba(227,30,36,0.09) 0%, transparent 68%)",
        }}
      />
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE RIPPLES
══════════════════════════════════════════════════════════ */
function PageRipples({ ripples }: { ripples: Ripple[] }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {ripples.map(r => (
          <motion.div
            key={r.id}
            className="absolute rounded-full border"
            style={{
              left: r.x - 5, top: r.y - 5, width: 10, height: 10,
              borderColor: "rgba(227,30,36,0.6)",
            }}
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 22, opacity: 0 }}
            exit={{}}
            transition={{ duration: 1.15, ease: [0.18, 0.89, 0.32, 1.0] }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   OSCILLOSCOPE — canvas, GPU-accelerated
══════════════════════════════════════════════════════════ */
function Oscilloscope({
  isPlaying,
  mouseY,
  volume = 1,
}: {
  isPlaying: boolean;
  mouseY: number;
  volume?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ t: 0, playing: isPlaying, my: mouseY, vol: volume });
  useEffect(() => { stateRef.current.playing = isPlaying; }, [isPlaying]);
  useEffect(() => { stateRef.current.my = mouseY; }, [mouseY]);
  useEffect(() => { stateRef.current.vol = volume; }, [volume]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = 560, H = 96;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d")!;
    let frame: number;

    const draw = () => {
      const { playing, my, t, vol } = stateRef.current;
      stateRef.current.t = t + (playing ? 0.048 : 0.006);
      const tt = stateRef.current.t;

      ctx.clearRect(0, 0, W, H);

      const fade = ctx.createLinearGradient(0, 0, W, 0);
      fade.addColorStop(0, "rgba(0,0,0,0)");
      fade.addColorStop(0.08, "rgba(10,10,10,0.9)");
      fade.addColorStop(0.92, "rgba(10,10,10,0.9)");
      fade.addColorStop(1, "rgba(0,0,0,0)");

      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 0.6;
      ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();

      const amp = playing ? H * (0.24 + (1 - my) * 0.2) * Math.max(0.12, vol) : H * 0.03;

      const buildPath = () => {
        ctx.beginPath();
        for (let px = 0; px <= W; px += 2) {
          const p = px / W;
          const yv =
            H / 2
            + Math.sin(p * Math.PI * 3.9 + tt) * amp
            + Math.sin(p * Math.PI * 8.1 + tt * 1.3) * amp * 0.36
            + Math.sin(p * Math.PI * 13.4 + tt * 0.6) * amp * 0.16;
          if (px === 0) {
            ctx.moveTo(px, yv);
          } else {
            ctx.lineTo(px, yv);
          }
        }
      };

      if (playing) {
        buildPath();
        ctx.strokeStyle = "rgba(227,30,36,0.28)";
        ctx.lineWidth = 6;
        ctx.shadowColor = "#E31E24";
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      buildPath();
      ctx.strokeStyle = playing ? "#E31E24" : "rgba(189,189,189,0.18)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, W, H);

      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden" style={{ background: "rgba(0,0,0,0.45)" }}>
      <canvas ref={canvasRef} className="w-full" style={{ height: 48, display: "block" }} />
      <div
        className="absolute inset-x-0 bottom-0 h-[1px]"
        style={{ background: "linear-gradient(to right,transparent,rgba(227,30,36,0.25),transparent)" }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   VINYL DISC
══════════════════════════════════════════════════════════ */
function VinylDisc({ isPlaying, onToggle }: { isPlaying: boolean; onToggle: () => void }) {
  const rotate = useMotionValue(0);
  const [scratching, setScratching] = useState(false);
  const spinRef = useRef<number>(0);
  const lastRef = useRef<number>(0);

  useEffect(() => {
    if (isPlaying && !scratching) {
      const spin = (now: number) => {
        const dt = lastRef.current ? now - lastRef.current : 0;
        lastRef.current = now;
        rotate.set(rotate.get() + dt * 0.042);
        spinRef.current = requestAnimationFrame(spin);
      };
      spinRef.current = requestAnimationFrame(spin);
    } else {
      lastRef.current = 0;
      cancelAnimationFrame(spinRef.current);
    }
    return () => cancelAnimationFrame(spinRef.current);
  }, [isPlaying, scratching, rotate]);

  return (
    <div className="relative select-none" style={{ width: 116, height: 116 }}>
      <motion.div
        className="absolute inset-0 rounded-full cursor-grab active:cursor-grabbing"
        style={{ rotate }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.1}
        onDragStart={() => setScratching(true)}
        onDrag={(_, i) => rotate.set(rotate.get() + i.delta.x * 1.1 - i.delta.y * 0.3)}
        onDragEnd={() => setScratching(false)}
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
      >
        <svg viewBox="0 0 116 116" width="116" height="116">
          <defs>
            <radialGradient id="vDisc" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </radialGradient>
          </defs>
          <circle cx="58" cy="58" r="56" fill="url(#vDisc)" stroke="#242424" strokeWidth="0.8" />
          {[50, 43, 36, 29, 22].map(r => (
            <circle key={r} cx="58" cy="58" r={r} fill="none" stroke="#181818" strokeWidth="0.7" />
          ))}
          <ellipse cx="40" cy="30" rx="15" ry="8" fill="rgba(255,255,255,0.045)" transform="rotate(-38 40 30)" />
          <circle cx="58" cy="58" r="17.5" fill="#141414" stroke="#E31E24" strokeWidth="0.9" />
          <circle cx="58" cy="58" r="13" fill="#1C1C1C" />
          {[0, 1, 2, 3, 4].map(i => {
            const hs = [4, 7, 10, 7, 4];
            return (
              <rect
                key={i} x={51 + i * 3.8} y={58 - hs[i] / 2}
                width="2.4" height={hs[i]} rx="0.6"
                fill={i === 2 ? "#E31E24" : "#444"}
              />
            );
          })}
          <circle cx="58" cy="58" r="2.4" fill="#E31E24" />
        </svg>
      </motion.div>
      <motion.p
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center whitespace-nowrap font-mono text-[7.5px] tracking-widest uppercase"
        style={{ color: "rgba(189,189,189,0.32)" }}
        animate={{ opacity: [0.32, 0.65, 0.32] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {scratching ? "scratching…" : isPlaying ? "drag · scratch" : "click · play"}
      </motion.p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   VU METER
══════════════════════════════════════════════════════════ */
function VUMeter({ isPlaying, level }: { isPlaying: boolean; level: number }) {
  const SEGS = 14;
  return (
    <div className="flex flex-col gap-[2px]">
      {Array.from({ length: SEGS }).map((_, i) => {
        const idx = SEGS - 1 - i;
        const lit = isPlaying && idx < Math.round(level * SEGS);
        const bg = lit
          ? idx >= SEGS - 2 ? "#E31E24" : idx >= SEGS - 4 ? "#FFAA00" : "#22C55E"
          : "rgba(255,255,255,0.06)";
        return (
          <div
            key={i}
            style={{ width: 9, height: 3, borderRadius: 1, backgroundColor: bg, transition: "background-color 55ms" }}
          />
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   VOLUME KNOB
══════════════════════════════════════════════════════════ */
function VolumeKnob({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const dragging = useRef(false);
  const startY = useRef(0);
  const startVal = useRef(0);
  const [hov, setHov] = useState(false);

  const clamp = (v: number) => Math.max(0, Math.min(1, v));

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    startY.current = e.clientY;
    startVal.current = value;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    onChange(clamp(startVal.current + (startY.current - e.clientY) * 0.007));
  };
  const onPointerUp = () => { dragging.current = false; };
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    onChange(clamp(value - e.deltaY * 0.001));
  };

  const angle = -140 + value * 280;
  const rad = ((angle - 90) * Math.PI) / 180;
  const C = 24, R_IND = 17, R_TRACK = 19;
  const dotX = C + Math.cos(rad) * R_IND;
  const dotY = C + Math.sin(rad) * R_IND;

  const trackCirc = 2 * Math.PI * R_TRACK;
  const trackDash = trackCirc * (280 / 360);

  const startRad = ((-140 - 90) * Math.PI) / 180;
  const ax1 = C + Math.cos(startRad) * R_TRACK;
  const ay1 = C + Math.sin(startRad) * R_TRACK;
  const ax2 = C + Math.cos(rad) * R_TRACK;
  const ay2 = C + Math.sin(rad) * R_TRACK;
  const lg = value > 0.5 ? 1 : 0;

  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        className="cursor-ns-resize select-none touch-none"
        animate={{ scale: hov ? 1.1 : 1 }}
        transition={{ duration: 0.15 }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onWheel={onWheel}
      >
        <svg width="48" height="48" viewBox="0 0 48 48">
          <defs>
            <radialGradient id="kBody" cx="38%" cy="32%" r="62%">
              <stop offset="0%" stopColor="#282828" />
              <stop offset="100%" stopColor="#111" />
            </radialGradient>
          </defs>
          <circle
            cx={C} cy={C} r={R_TRACK} fill="none"
            stroke="rgba(255,255,255,0.08)" strokeWidth="2.8" strokeLinecap="round"
            strokeDasharray={`${trackDash} 999`}
            strokeDashoffset={`${-trackCirc * (40 / 360)}`}
            transform={`rotate(${-140 - 90} ${C} ${C})`}
          />
          {value > 0.01 && (
            <path
              d={`M ${ax1} ${ay1} A ${R_TRACK} ${R_TRACK} 0 ${lg} 1 ${ax2} ${ay2}`}
              fill="none" stroke="#E31E24" strokeWidth="2.8" strokeLinecap="round"
            />
          )}
          <circle cx={C} cy={C} r="13" fill="url(#kBody)" stroke="#2E2E2E" strokeWidth="1" />
          <circle cx={C} cy={C} r="9" fill="#1A1A1A" />
          <ellipse cx={C - 3} cy={C - 4} rx="4.5" ry="2.8" fill="rgba(255,255,255,0.06)" transform={`rotate(-25 ${C - 3} ${C - 4})`} />
          <circle cx={dotX} cy={dotY} r="2.6" fill="#E31E24" />
          {hov && <circle cx={dotX} cy={dotY} r="5" fill="rgba(227,30,36,0.22)" />}
        </svg>
      </motion.div>
      <span className="text-[7px] tracking-widest text-silver-gray/28 uppercase font-mono">
        {Math.round(value * 100)}%
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   FREQUENCY DISPLAY + BEAT DOTS
══════════════════════════════════════════════════════════ */
function FreqDisplay({ isPlaying, beat }: { isPlaying: boolean; beat: number }) {
  const [freq, setFreq] = useState(88.5);
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setFreq(f => +Math.max(87.2, Math.min(90.8, f + (Math.random() - 0.5) * 0.22)).toFixed(1));
    }, 650);
    return () => clearInterval(id);
  }, [isPlaying]);

  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg border border-silver-gray/10 bg-black/45 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <span className="font-mono text-laser-red text-[18px] font-bold tracking-tight leading-none tabular-nums">
          {freq.toFixed(1)}
        </span>
        <span className="text-[6.5px] text-silver-gray/38 tracking-widest uppercase font-mono">MHz</span>
      </div>
      <div className="w-[1px] h-5 bg-silver-gray/12" />
      <div className="flex flex-col items-center">
        <span className="font-mono text-stark-white text-[18px] font-bold tracking-tight leading-none">128</span>
        <span className="text-[6.5px] text-silver-gray/38 tracking-widest uppercase font-mono">BPM</span>
      </div>
      <div className="w-[1px] h-5 bg-silver-gray/12" />
      <div className="flex gap-[5px] items-center">
        {[0, 1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="rounded-full"
            style={{ width: 6, height: 6 }}
            animate={
              isPlaying && beat % 4 === i
                ? { scale: [1.7, 1], backgroundColor: "#E31E24" }
                : { scale: 1, backgroundColor: "rgba(189,189,189,0.14)" }
            }
            transition={{ duration: 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   RECORD TIMER
══════════════════════════════════════════════════════════ */
function RecordTimer({ isPlaying }: { isPlaying: boolean }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => setT(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [isPlaying]);
  const mm = Math.floor(t / 60).toString().padStart(2, "0");
  const ss = (t % 60).toString().padStart(2, "0");
  return (
    <div className="flex items-center gap-1.5">
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-laser-red"
        animate={isPlaying ? { opacity: [1, 0.1, 1] } : { opacity: 0.25 }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="font-mono text-silver-gray/45 text-xs tabular-nums">{mm}:{ss}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   EQ SECTION
══════════════════════════════════════════════════════════ */
function EqSection({
  isPlaying,
  beat,
  volume = 1,
}: {
  isPlaying: boolean;
  beat: number;
  volume?: number;
}) {
  const [heights, setHeights] = useState(() => EQ_CFG.map(c => c.min));
  const [hovBar, setHovBar] = useState<number | null>(null);
  const [clkBar, setClkBar] = useState<number | null>(null);
  const [ripples, setRipples] = useState<Record<number, number[]>>({});
  const hovRef = useRef<number | null>(null);

  useEffect(() => {
    hovRef.current = hovBar;
  }, [hovBar]);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setHeights(prev =>
        prev.map((h, i) => {
          if (i === hovRef.current) return h;
          const { min, max } = EQ_CFG[i];
          const target = min + Math.random() * (max - min);
          return h + (target - h) * 0.55;
        })
      );
    }, 88);
    return () => clearInterval(id);
  }, [isPlaying]);

  const handleClick = (i: number) => {
    setClkBar(i);
    setRipples(r => ({ ...r, [i]: [...(r[i] ?? []), Date.now()] }));
    setTimeout(() => setClkBar(null), 480);
    setTimeout(() => setRipples(r => { const n = { ...r }; n[i] = (n[i] ?? []).slice(1); return n; }), 850);
  };

  return (
    <div className="flex items-end gap-[4px] sm:gap-[5px]">
      {EQ_CFG.map(({ freq }, i) => {
        const active = hovBar === i || clkBar === i;
        const baseHeight = isPlaying ? heights[i] * Math.max(0.2, volume) : EQ_CFG[i].min;
        const h = active ? BAR_MAX : baseHeight;
        const col = active
          ? "#E31E24"
          : (beat % 2 === i % 2 ? "#E2E2E2" : "#CACACA");
        const shadow = active
          ? "0 0 20px 6px rgba(227,30,36,0.72), 0 0 44px 12px rgba(227,30,36,0.26)"
          : "none";
        return (
          <div
            key={i}
            className="relative flex flex-col items-center cursor-crosshair select-none"
            style={{ width: 22 }}
            onMouseEnter={() => { setHovBar(i); hovRef.current = i; }}
            onMouseLeave={() => { setHovBar(null); hovRef.current = null; }}
            onTouchStart={() => { setHovBar(i); hovRef.current = i; }}
            onTouchEnd={() => { setHovBar(null); hovRef.current = null; }}
            onClick={() => handleClick(i)}
          >
            <span className="text-[6.5px] text-silver-gray/30 font-mono mb-1 leading-none">{freq}</span>
            <div
              className="relative rounded-sm overflow-hidden flex items-end justify-center"
              style={{ width: 22, height: BAR_MAX, background: "rgba(255,255,255,0.022)" }}
            >
              <div
                className="w-full rounded-t-[2px] origin-bottom"
                style={{
                  height: h,
                  backgroundColor: col,
                  boxShadow: shadow,
                  transition: active
                    ? "height 0.07s ease-out, background-color 0.09s, box-shadow 0.09s"
                    : "height 0.092s ease-in-out, background-color 0.18s",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 46%)" }}
              />
              <AnimatePresence>
                {(ripples[i] ?? []).map(k => (
                  <motion.div
                    key={k}
                    className="absolute rounded-full border border-laser-red/70 pointer-events-none"
                    style={{ width: 6, height: 6, bottom: 4, left: "50%", x: "-50%" }}
                    initial={{ scale: 1, opacity: 0.9 }}
                    animate={{ scale: 5.5, opacity: 0 }}
                    exit={{}}
                    transition={{ duration: 0.58, ease: "easeOut" }}
                  />
                ))}
              </AnimatePresence>
            </div>
            <div
              className="w-full h-[2px] mt-[2px] rounded-full"
              style={{
                backgroundColor: active ? "#E31E24" : "rgba(227,30,36,0.32)",
                transition: "background-color 0.1s",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   FLOATING ICON
══════════════════════════════════════════════════════════ */
type FIDef = typeof ICON_DEFS[0];
function FloatIcon({ Icon, label, x, y, dur, del, sz, fa }: FIDef) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      className="absolute z-20"
      style={{ left: x, top: y }}
      animate={{ y: [0, -fa, 0] }}
      transition={{ duration: dur, delay: del, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="cursor-pointer relative"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        animate={hov
          ? { scale: 1.55, color: "#E31E24", rotate: [0, -12, 12, 0] }
          : { scale: 1, color: "rgba(189,189,189,0.16)", rotate: 0 }
        }
        whileTap={{ scale: 1.9 }}
        transition={{ duration: 0.22 }}
      >
        <Icon size={sz} strokeWidth={1.15} />
      </motion.div>
      <AnimatePresence>
        {hov && (
          <motion.span
            className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[7.5px] font-mono text-stark-white bg-laser-red whitespace-nowrap"
            initial={{ opacity: 0, y: 5, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            transition={{ duration: 0.14 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   SCROLLING TICKER
══════════════════════════════════════════════════════════ */
function Ticker() {
  const txt =
    "AIR MIX · AUDIO ENGINEER · MIXING · MASTERING · FOLEY · MUSIC PRODUCTION · SOUND DESIGN · PRECISION AUDIO · ";
  return (
    <div className="relative overflow-hidden w-full border-t border-b border-silver-gray/[0.07] py-[7px]">
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-studio-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-studio-black to-transparent z-10" />
      <motion.div
        className="flex whitespace-nowrap text-[8.5px] tracking-[0.28em] text-silver-gray/22 font-mono"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span>{txt}{txt}{txt}{txt}</span>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export default function ComingSoonPage() {
  const [mouseNorm, setMouseNorm] = useState({ x: 0.5, y: 0.5 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [beat, setBeat] = useState(0);
  const [vuLevel, setVuLevel] = useState(0.65);
  const [volume, setVolume] = useState(0.8);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouseNorm({ x: e.clientX / r.width, y: e.clientY / r.height });
  }, []);

  const onPageClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const t = e.target as HTMLElement;
    if (t.closest("button,[data-nodipple],canvas")) return;
    const rip: Ripple = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
    setRipples(p => [...p, rip]);
    setTimeout(() => setRipples(p => p.filter(r => r.id !== rip.id)), 1350);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setBeat(b => b + 1);
      setVuLevel(0.28 + Math.random() * 0.62);
    }, 165);
    return () => clearInterval(id);
  }, [isPlaying]);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.22 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-studio-black flex flex-col items-center justify-center"
      onMouseMove={onMouseMove}
      onClick={onPageClick}
    >
      {/* ── Fixed ambient layers ── */}
      <CursorGlow />
      <AmbientGrid mx={mouseNorm.x} my={mouseNorm.y} />
      <PageRipples ripples={ripples} />

      {/* ── Film grain ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Floating icons ── */}
      {ICON_DEFS.map(ic => <FloatIcon key={ic.id} {...ic} />)}

      {/* ── Top red accent ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-laser-red/55 to-transparent z-10"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* ════════════════════ CONTENT ════════════════════ */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-5 md:gap-7 px-4 py-8 w-full max-w-[680px]"
        variants={container} initial="hidden" animate="show"
      >

        {/* ── LOGO ── */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-1">
          <motion.div
            data-nodipple
            className="cursor-pointer"
            whileHover={{
              scale: 1.06,
              filter: "drop-shadow(0 0 24px rgba(227,30,36,0.55))",
            }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.25 }}
          >
            <AirMixLogo size={220} />
          </motion.div>
          <p className="text-silver-gray/35 text-[7px] tracking-[0.52em] uppercase font-mono">
            Audio Engineer
          </p>
        </motion.div>

        {/* ── HEADLINE ── */}
        <motion.div variants={fadeUp} className="text-center px-2">
          <h1 className="text-[clamp(2rem,7vw,3.4rem)] font-bold tracking-tight leading-tight">
            <span className="text-laser-red">Tuning</span>{" "}
            <span className="text-stark-white">the Studio.</span>
          </h1>
          <p className="text-silver-gray/60 text-sm mt-2 max-w-xs mx-auto leading-relaxed">
            Mixing, mastering &amp; engineering a new digital experience.{" "}
            <span className="text-stark-white/50">Launch incoming.</span>
          </p>
        </motion.div>

        {/* ── STUDIO CONSOLE ── */}
        <motion.div variants={fadeUp} className="w-full">
          <div
            className="relative rounded-2xl border border-silver-gray/[0.09] bg-surface-gray/30 backdrop-blur-lg p-4 md:p-6"
            style={{ boxShadow: "0 0 90px rgba(0,0,0,0.75), inset 0 0 0 0.5px rgba(255,255,255,0.04)" }}
          >
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-silver-gray/18 to-transparent" />

            {/* Row 1 — controls bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <FreqDisplay isPlaying={isPlaying} beat={beat} />
              <div className="flex items-center gap-3">
                <RecordTimer isPlaying={isPlaying} />
                <motion.button
                  data-nodipple
                  className="w-9 h-9 rounded-full bg-laser-red flex items-center justify-center"
                  whileHover={{ scale: 1.14, boxShadow: "0 0 20px 6px rgba(227,30,36,0.55)" }}
                  whileTap={{ scale: 0.88 }}
                  onClick={e => { e.stopPropagation(); setIsPlaying(p => !p); }}
                  transition={{ duration: 0.12 }}
                >
                  <AnimatePresence mode="wait">
                    {isPlaying
                      ? <motion.span key="pause" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Pause size={14} className="text-white" />
                      </motion.span>
                      : <motion.span key="play" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Play size={14} className="text-white fill-white" />
                      </motion.span>
                    }
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Row 2 — vinyl + EQ + VU/Knob */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-4">

              {/* Vinyl */}
              <div className="flex-shrink-0 pb-6 sm:pb-0">
                <VinylDisc isPlaying={isPlaying} onToggle={() => setIsPlaying(p => !p)} />
              </div>

              {/* EQ */}
              <div className="flex-1 flex flex-col items-center gap-2 min-w-0 w-full sm:w-auto">
                <div className="flex items-center gap-2 text-[7.5px] text-silver-gray/32 uppercase font-mono tracking-[0.28em]">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-laser-red"
                    animate={isPlaying ? { opacity: [1, 0.18, 1] } : { opacity: 0.18 }}
                    transition={{ duration: 0.82, repeat: Infinity }}
                  />
                  Equalizer
                  <span className="text-silver-gray/18 lowercase normal-case">· hover or tap</span>
                </div>
                <div className="overflow-x-auto w-full flex justify-center pb-1">
                  <EqSection isPlaying={isPlaying} beat={beat} volume={volume} />
                </div>
              </div>

              {/* VU + Knob */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="flex gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <VUMeter isPlaying={isPlaying} level={vuLevel * volume} />
                    <span className="text-[6px] text-silver-gray/22 font-mono">L</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <VUMeter isPlaying={isPlaying} level={Math.min(1, (vuLevel * 0.88 + 0.07) * volume)} />
                    <span className="text-[6px] text-silver-gray/22 font-mono">R</span>
                  </div>
                </div>
                <VolumeKnob value={volume} onChange={setVolume} />
              </div>
            </div>

            {/* Row 3 — Oscilloscope */}
            <div className="mt-4">
              <div className="flex items-center gap-2 text-[7px] text-silver-gray/28 uppercase font-mono tracking-[0.28em] mb-1.5">
                <div className="w-3 h-[1px] bg-silver-gray/20" />
                Scope — move mouse ↕ to control amplitude
                <div className="w-3 h-[1px] bg-silver-gray/20" />
              </div>
              <Oscilloscope isPlaying={isPlaying} mouseY={mouseNorm.y} volume={volume} />
            </div>

            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-silver-gray/[0.07] to-transparent" />
          </div>
        </motion.div>

        {/* ── Ticker ── */}
        <motion.div variants={fadeUp} className="w-full">
          <Ticker />
        </motion.div>

        {/* ── Interaction hint ── */}
        <motion.p
          variants={fadeUp}
          className="text-silver-gray/18 text-[7.5px] tracking-[0.35em] uppercase font-mono text-center"
        >
          click anywhere · drag the vinyl · play the eq · turn the knob
        </motion.p>
      </motion.div>

      {/* ── Bottom red line ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-laser-red to-transparent z-10"
        initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 1.6, ease: "easeOut" }}
      />
    </div>
  );
}
