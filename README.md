# AirMix — Professional Audio Production & Sound Engineering

Premium marketing website for **AirMix**, a sound engineering and audio production company specializing in music production, mixing & mastering, podcast cleaning, sound design, vocal tuning, stem separation, and commercial ad scoring.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Deployed on **Vercel** with GoDaddy DNS.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or bun

### 2. Installation
```bash
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Content Management (`src/data/`)

All site copy, prices, contact details, and links are decoupled from UI components. Update data in one place:

- **`src/data/site.ts`**:
  - Studio contact info (Email, Phone, WhatsApp number, Studio Location).
  - Social channel URLs (Instagram, YouTube, LinkedIn, Spotify, X).
  - Navigation links (exactly 4: Home, Services, About, Contact).
  - Studio statistics and `showStats` boolean toggle.
  - Core "Why Choose AirMix" value propositions.
  - *Items needing client confirmation are tagged with `// TODO(client)`*.

- **`src/data/services.ts`**:
  - 6 core service categories (from `REF-SERVICES`).
  - 7 individual services in the exact client order (`Ad Scoring` → `Podcast Cleaning` → `Sound Design` → `Custom Jingles` → `Custom Instrumentals` → `Vocal Tuning` → `Stem Separation`).
  - Home service highlight cards.

- **`src/data/pricing.ts`**:
  - Detailed pricing groups for all audio lengths and packages with Indian numbering (`₹999`, `₹1,499`, `₹2,399`, etc.).
  - Strikethrough regular prices vs. limited-time offer prices.

---

## 🎥 Intro Video & Image Assets

### Intro Video (`public/media/`)
- Place `intro.mp4` (H.264, 1080p or 720p, under 15MB) and `intro-poster.jpg` into `public/media/`.
- If the file is not yet provided, an animated brand waveform sequence automatically runs as a fallback so the site never stalls.
- To compress an existing video with ffmpeg:
  ```bash
  ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset slow -acodec aac -b:a 192k -movflags +faststart public/media/intro.mp4
  ```

### Imagery (`public/images/`)
- `hero-console.jpg`: Studio mixing console in red light for the Hero monitor.
- `contact-mic.jpg`: Studio microphone in red ambient lighting for Contact.
- `cta-headphones.png`: Over-ear monitoring headphones transparent PNG for CTA bands.
*(High-aesthetic SVG/CSS studio lighting effects act as fallbacks until photos are dropped in).*

### Brand Assets (`public/brand/`)
- `logo.svg`: Full brand lockup.
- `icon-mark.svg`: Compact icon mark for the navigation bar and favicon.
- `logo-wordmark.svg`: AIR MIX wordmark with red 'X'.
- `logo.jpg`: High-resolution source logo.

---

## 📧 Contact Form Backend & Environment Variables

The contact form validates inputs using **Zod**, includes a honeypot field, in-memory rate limiting, and dispatches notification emails via **Resend**.

Add these environment variables in your Vercel project (**Settings → Environment Variables**) or local `.env.local`:

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_TO_EMAIL=hello@airmix.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

*Note: If `RESEND_API_KEY` is not yet configured, the contact form gracefully provides users with an instant 1-click WhatsApp messaging link.*

---

## 🌐 Pages & Deep Links

- **`/`**: Home (Intro video presentation, Hero with showreel modal, Stats strip, Services highlights, Elite package, Pricing teaser, About teaser, Why Choose AirMix, CTA band).
- **`/services`**: Services & Pricing (6 Categories, 7 Individual services `#ad-scoring`, `#podcast-cleaning`, `#sound-design`, `#custom-jingles`, `#custom-instrumentals`, `#vocal-tuning`, `#stem-separation`, 5 Pricing groups `#pricing`, Consultation notes, Trust strip).
- **`/about`**: About AirMix (Verbatim client story, Mission, Vision, Who We Work With, What We Do, Waveform dividers).
- **`/contact`**: Contact Studio (Contact cards, Direct WhatsApp pre-fill, Contact Form with `?service=` preselection, Direct booking CTA).

---

## 🔒 License
© 2026 AirMix. All rights reserved.
