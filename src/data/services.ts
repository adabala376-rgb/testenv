/**
 * AirMix Services Data
 * Sourced directly from REF-SERVICES and client specifications.
 */

export interface ServiceCategory {
  number: string;
  title: string;
  tagline: string;
  checklistTitle: "Services Included" | "Includes";
  items: string[];
  pricingDisplay: string;
  pricingSubtext?: string;
  consultation: string;
  pricingLink: string;
  highlight?: boolean;
}

export interface IndividualService {
  number: number;
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
}

export interface HomeHighlightService {
  title: string;
  slug: string;
  description: string;
  iconName: "music" | "sliders" | "mic" | "waveform" | "sparkles" | "radio";
}

// 8.1 Six service categories (from REF-SERVICES)
export const serviceCategories: ServiceCategory[] = [
  {
    number: "01",
    title: "Podcast Services",
    tagline: "Perfect for podcasters, YouTubers, streamers, and content creators.",
    checklistTitle: "Services Included",
    items: [
      "Podcast Cleaning",
      "Noise Reduction",
      "Dialogue Enhancement",
      "Audio Restoration",
      "Loudness Optimization",
      "Broadcast Mastering",
    ],
    pricingDisplay: "Custom Quotation",
    pricingSubtext: "Tailored to your audio length & project scope",
    consultation: "10–15 min consultation",
    pricingLink: "/services#individual-services",
  },
  {
    number: "02",
    title: "Creative Audio Services",
    tagline: "Designed for brands, filmmakers, creators, and businesses.",
    checklistTitle: "Services Included",
    items: [
      "Sound Design",
      "Custom Jingles",
      "Ad Scoring",
      "Foley Production",
      "Sonic Branding",
    ],
    pricingDisplay: "Custom Quotation",
    pricingSubtext:
      "Pricing depends on: Project complexity, Number of revisions, Delivery timeline, Licensing requirements",
    consultation: "Complimentary consultation",
    pricingLink: "/services#individual-services",
  },
  {
    number: "03",
    title: "Artist Services",
    tagline: "Created for singers, musicians, and independent artists.",
    checklistTitle: "Services Included",
    items: [
      "Vocal Tuning",
      "Stem Separation",
      "Vocal Editing",
      "Custom Instrumentals",
      "Pitch Correction",
    ],
    pricingDisplay: "Custom Quotation",
    pricingSubtext: "Tailored to your project scope & instrumentation",
    consultation: "10–15 min consultation",
    pricingLink: "/services#individual-services",
  },
  {
    number: "04",
    title: "Music Production",
    tagline: "From concept to composition, we build your sound from the ground up.",
    checklistTitle: "Includes",
    items: [
      "Composition & Melody",
      "Arrangement",
      "MIDI Programming",
      "Recording Guidance",
      "Instrument Programming",
    ],
    pricingDisplay: "Custom Quotation",
    pricingSubtext: "Full end-to-end bespoke production package",
    consultation: "20–30 min consultation",
    pricingLink: "/contact?service=music-production",
  },
  {
    number: "05",
    title: "Sound Engineering",
    tagline: "Professional mixing and mastering to bring your music to life.",
    checklistTitle: "Includes",
    items: [
      "Editing",
      "Mixing",
      "Mastering",
      "Stereo Enhancement",
      "Loudness Optimization",
    ],
    pricingDisplay: "Custom Quotation",
    pricingSubtext: "Industry standard broadcast & streaming ready",
    consultation: "20–30 min consultation",
    pricingLink: "/contact?service=sound-engineering",
  },
  {
    number: "06",
    title: "AIR MIX Elite Package",
    tagline: "The complete end-to-end solution for your music and audio projects.",
    checklistTitle: "Includes",
    items: [
      "Music Production",
      "Sound Engineering",
      "Arrangement",
      "Editing",
      "Mixing & Mastering",
      "Unlimited Creative Collaboration",
    ],
    pricingDisplay: "Custom Quotation",
    pricingSubtext: "All-in-one premier artist & enterprise package",
    consultation: "20–30 min consultation",
    pricingLink: "/contact?service=air-mix-elite-package",
    highlight: true,
  },
];

// 8.2 Seven individual services (exact client order and exact copy)
// Order specified: "7,3,4,6,1,2,5" -> Ad Scoring, Podcast Cleaning, Sound Design, Custom Jingles, Custom Instrumentals, Vocal Tuning, Stem Separation
export const individualServices: IndividualService[] = [
  {
    number: 1,
    slug: "ad-scoring",
    title: "Ad Scoring",
    description:
      "High-impact commercial music and sound design crafted to capture attention and boost brand engagement. Optimized for social media ad campaigns, TV commercials, and promotional video content.",
    categorySlug: "creative-audio",
  },
  {
    number: 2,
    slug: "podcast-cleaning",
    title: "Podcast Cleaning",
    description:
      "Comprehensive audio restoration to eliminate background noise, room echo, hums, and vocal pops. Ensure your podcast dialogues are crystal-clear, balanced, and broadcast-ready for all major streaming platforms.",
    categorySlug: "podcast-services",
  },
  {
    number: 3,
    slug: "sound-design",
    title: "Sound Design",
    description:
      "Custom atmospheric sounds, Foley effects, and sonic elements tailored to elevate visual content. Designed to make videos, social media reels, and short films more engaging and immersive for your audience.",
    categorySlug: "creative-audio",
  },
  {
    number: 4,
    slug: "custom-jingles",
    title: "Custom Jingles",
    description:
      "Memorable sonic logos and short musical themes crafted to build instant brand recognition. Designed specifically for creators, podcasters, and channels looking for a distinct audio signature.",
    categorySlug: "creative-audio",
  },
  {
    number: 5,
    slug: "custom-instrumentals",
    title: "Custom Instrumentals",
    description:
      "Tailored backing tracks and instrumental arrangements built specifically to match your vocal range and style. Perfect for cover artists, original songwriters, and vocalists seeking a professional studio foundation.",
    categorySlug: "artist-services",
  },
  {
    number: 6,
    slug: "vocal-tuning",
    title: "Vocal Tuning",
    description:
      "Precision pitch correction and timing alignment to make your vocal tracks sound flawless and polished. We retain the natural emotion of your voice while delivering studio-grade clarity and stability.",
    categorySlug: "artist-services",
  },
  {
    number: 7,
    slug: "stem-separation",
    title: "Stem Separation",
    description:
      "Advanced audio extraction to isolate or remove vocals, drums, bass, and individual instruments from any track. Ideal for vocalists needing clean backing tracks, remixers, and content creators working with mixed audio.",
    categorySlug: "artist-services",
  },
];

// Home page service highlights (6 items)
export const homeServiceHighlights: HomeHighlightService[] = [
  {
    title: "Music Production",
    slug: "music-production",
    description: "From concept to composition, we build your sound from the ground up.",
    iconName: "music",
  },
  {
    title: "Mixing & Mastering",
    slug: "sound-engineering",
    description: "Professional mixing and mastering to bring your music to life.",
    iconName: "sliders",
  },
  {
    title: "Podcast Cleaning",
    slug: "podcast-cleaning",
    description: "Crystal-clear, broadcast-ready podcast audio.",
    iconName: "mic",
  },
  {
    title: "Sound Design",
    slug: "sound-design",
    description: "Custom atmospheric sounds, Foley effects, and sonic elements for visual content.",
    iconName: "waveform",
  },
  {
    title: "Vocal Tuning & Stem Separation",
    slug: "vocal-tuning",
    description: "Precision pitch correction and clean stem isolation.",
    iconName: "sparkles",
  },
  {
    title: "Ad Scoring & Custom Jingles",
    slug: "ad-scoring",
    description: "High-impact commercial music and sonic logos for brands.",
    iconName: "radio",
  },
];
