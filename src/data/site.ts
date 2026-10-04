/**
 * AirMix Brand & Site Configuration
 * All contact information, links, and stats are centralized here.
 * Any unverified values are flagged with TODO(client).
 */

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  platform: "instagram" | "youtube" | "linkedin" | "spotify" | "x";
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export const siteConfig = {
  name: "AirMix",
  legalName: "AirMix Audio Production",
  tagline: "Professional Audio Production & Sound Engineering",
  description:
    "AirMix is a professional audio production and sound engineering company delivering world-class audio solutions across every creative industry.",
  url: "https://airmix.com", // TODO(client): confirm production domain URL

  // Navigation Links - EXACTLY 4 as specified
  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ] as NavItem[],

  // Contact Information
  contact: {
    // TODO(client): confirm official client email address
    email: "hello@airmix.com",
    // TODO(client): confirm official client phone number
    phone: "+1 (555) 123-4567",
    // TODO(client): confirm official WhatsApp number (digits only with country code)
    whatsappNumber: "15551234567",
    // TODO(client): confirm physical studio location / city
    location: "Los Angeles, CA, USA",
    // WhatsApp pre-filled greeting message
    whatsappMessage: "Hi AirMix, I'd like to discuss a project.",
    // Link for direct booking (WhatsApp or Instagram DM)
    // TODO(client): update booking URL to client's preferred WhatsApp or Instagram link
    bookingUrl: "https://wa.me/15551234567?text=Hi%20AirMix,%20I'd%20like%20to%20discuss%20a%20project.",
  },

  // Social Channels (only non-empty URLs will be rendered)
  socials: [
    // TODO(client): confirm official Instagram URL
    { name: "Instagram", href: "https://instagram.com", platform: "instagram" },
    // TODO(client): confirm official YouTube URL
    { name: "YouTube", href: "https://youtube.com", platform: "youtube" },
    // TODO(client): confirm official LinkedIn URL
    { name: "LinkedIn", href: "https://linkedin.com", platform: "linkedin" },
    // TODO(client): confirm official Spotify profile URL
    { name: "Spotify", href: "https://spotify.com", platform: "spotify" },
    // TODO(client): confirm official X (Twitter) profile URL
    { name: "X", href: "https://x.com", platform: "x" },
  ] as SocialLink[],

  // Stats strip on Home page
  // Set showStats to false to hide in one line if not yet verified
  // TODO(client): confirm stats before launch
  showStats: true,
  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "250+", label: "Happy Clients" },
    { value: "10+", label: "Countries Served" },
    { value: "5+", label: "Years of Excellence" },
  ] as StatItem[],

  // Why Choose AirMix (Home and Services)
  whyChooseUs: [
    {
      title: "Professional Quality",
      description: "Industry-standard sound quality",
    },
    {
      title: "On-Time Delivery",
      description: "We value your time and deadlines",
    },
    {
      title: "Expert Engineers",
      description: "Experienced audio professionals",
    },
    {
      title: "Premium Equipment",
      description: "High-end gear for perfect results",
    },
    {
      title: "100% Client Satisfaction",
      description: "We don't stop until you're satisfied",
    },
    {
      title: "Global Standard",
      description: "Broadcast-ready for global platforms",
    },
  ] as WhyChooseItem[],

  // Trust Strip on Services
  trustStrip: [
    { title: "Secure & Confidential", desc: "Your audio and stems are 100% protected." },
    { title: "Fair Pricing", desc: "Transparent rates with zero hidden fees." },
    { title: "Dedicated Support", desc: "Direct communication with your sound engineer." },
    { title: "Your Vision, Our Sound", desc: "Tailored to your artistic identity." },
  ],
};
