/**
 * AirMix Pricing Data
 * Source of truth: REF-PRICING text reference document.
 * 
 * // TODO(client): infographic and price list disagree, price list used
 */

export interface PricingRow {
  duration: string;
  regularPrice?: string;
  offerPrice: string;
  isCustom?: boolean;
}

export interface PricingGroup {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  tiers: PricingRow[];
  consultationNote?: string;
  packageType?: "fixed" | "custom";
  details?: string;
}

export interface PricingTeaserCard {
  title: string;
  startingPrice: string;
  slug: string;
  badge?: string;
  description: string;
}

// 8.3 Pricing groups with exact numbers and strike-through support
// TODO(client): infographic and price list disagree, price list used
export const pricingGroups: PricingGroup[] = [
  {
    id: "group-1",
    title: "Podcast Cleaning & Sound Design",
    slug: "podcast-sound-design",
    subtitle: "Tailored for podcasters, vloggers, and audio/video content creators.",
    consultationNote: "Includes complimentary 10–15 minute consultation",
    packageType: "fixed",
    tiers: [
      { duration: "5 – 10 Minutes", regularPrice: "₹1,100", offerPrice: "₹999" },
      { duration: "10 – 15 Minutes", regularPrice: "₹1,600", offerPrice: "₹1,499" },
      { duration: "15 – 30 Minutes", regularPrice: "₹2,600", offerPrice: "₹2,399" },
      { duration: "30 – 45 Minutes", regularPrice: "₹3,800", offerPrice: "₹3,499" },
      { duration: "45 – 60 Minutes (1 Hour)", regularPrice: "₹5,000", offerPrice: "₹4,499" },
      { duration: "60 – 90 Minutes (1.5 Hours)", regularPrice: "₹7,200", offerPrice: "₹6,499" },
      { duration: "90 – 120 Minutes (2 Hours)", regularPrice: "₹9,500", offerPrice: "₹8,499" },
      { duration: "Above 2 Hours (Extended Audio)", offerPrice: "Custom pricing — DM for Quote", isCustom: true },
    ],
  },
  {
    id: "group-2",
    title: "Custom Instrumentals",
    slug: "custom-instrumentals",
    subtitle: "Tailored backing tracks and instrumental arrangements built specifically to match your vocal range and style.",
    consultationNote: "Includes complimentary 10–15 minute consultation",
    packageType: "fixed",
    tiers: [
      { duration: "Short Track / Teaser (1 – 2 Minutes)", regularPrice: "₹599", offerPrice: "₹499" },
      { duration: "Standard Cover Song (2 – 5 Minutes)", regularPrice: "₹1,100", offerPrice: "₹999" },
      { duration: "Extended Arrangement (Above 5 Minutes)", regularPrice: "₹1,999", offerPrice: "₹1,799" },
    ],
  },
  {
    id: "group-3",
    title: "Vocal Tuning & Stem Separation",
    slug: "vocal-stem",
    subtitle: "Precision pitch/time correction and advanced AI/manual stem isolation for clean backing tracks.",
    consultationNote: "Includes complimentary 10–15 minute consultation",
    packageType: "fixed",
    tiers: [
      { duration: "Short Track / Teaser (1 – 2 Minutes)", regularPrice: "₹399", offerPrice: "₹299" },
      { duration: "Standard Track (2 – 5 Minutes)", regularPrice: "₹799", offerPrice: "₹699" },
      { duration: "Extended Track (Above 5 Minutes)", regularPrice: "₹1,299", offerPrice: "₹1,099" },
    ],
  },
  {
    id: "group-4",
    title: "Ad Scoring & Custom Jingles",
    slug: "ad-jingles",
    subtitle: "High-impact commercial music, sonic logos, and bespoke brand themes.",
    consultationNote: "Complimentary consultation call included",
    packageType: "custom",
    details: "Rates depend on project scope, duration, and licensing/commercial rights.",
    tiers: [
      {
        duration: "Custom Commercial Package",
        offerPrice: "DM for Quote",
        isCustom: true,
      },
    ],
  },
  {
    id: "group-5",
    title: "Full Music Production & Sound Engineering Combo",
    slug: "full-production",
    subtitle: "Complete end-to-end song production, arrangement, multi-track mixing, and commercial mastering.",
    consultationNote: "Complimentary 20–30 Minute Discovery Call to map out your full project vision, production plan, and custom bundle pricing.",
    packageType: "custom",
    details: "Includes complete stem delivery, unlimited creative collaboration, and studio-grade mastering.",
    tiers: [
      {
        duration: "Custom Production Package",
        offerPrice: "Custom Quote",
        isCustom: true,
      },
    ],
  },
];

// 4 Pricing Teaser cards for the Home page
export const homePricingTeasers: PricingTeaserCard[] = [
  {
    title: "Podcast Cleaning & Sound Design",
    startingPrice: "₹999",
    slug: "podcast-sound-design",
    badge: "Most Popular",
    description: "Multi-tier noise reduction, broadcast mastering, and Foley.",
  },
  {
    title: "Custom Instrumentals",
    startingPrice: "₹499",
    slug: "custom-instrumentals",
    badge: "Artist Favorite",
    description: "Custom key, vocal range match, tailored instrumentation.",
  },
  {
    title: "Vocal Tuning & Stem Separation",
    startingPrice: "₹299",
    slug: "vocal-stem",
    badge: "Starting from",
    description: "Pitch alignment, emotion preservation, and clean stem extraction.",
  },
  {
    title: "Ad Scoring & Full Production",
    startingPrice: "Custom quote",
    slug: "full-production",
    badge: "Commercial / Artist",
    description: "Original sonic branding, broadcast commercials, and full song production.",
  },
];
