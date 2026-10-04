import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AirMix | Professional Audio Production & Sound Engineering",
    template: "%s | AirMix",
  },
  description: siteConfig.description,
  keywords: [
    "audio production",
    "sound engineering",
    "mixing and mastering",
    "podcast cleaning",
    "vocal tuning",
    "stem separation",
    "sound design",
    "ad scoring",
    "custom jingles",
  ],
  authors: [{ name: "AirMix" }],
  creator: "AirMix",
  publisher: "AirMix",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "AirMix | Professional Audio Production & Sound Engineering",
    description: siteConfig.description,
    images: [
      {
        url: "/brand/logo.jpg",
        width: 1200,
        height: 630,
        alt: "AirMix Professional Audio Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirMix | Professional Audio Production & Sound Engineering",
    description: siteConfig.description,
    images: ["/brand/logo.jpg"],
  },
  icons: {
    icon: "/brand/icon-mark.svg",
    shortcut: "/brand/icon-mark.svg",
    apple: "/brand/icon-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialUrls = siteConfig.socials
    .map((s) => s.href)
    .filter((url) => Boolean(url));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.jpg`,
    image: `${siteConfig.url}/brand/logo.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.location,
    },
    sameAs: socialUrls,
    priceRange: "₹₹",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08080A] text-white selection:bg-[#E31E24] selection:text-white font-[family-name:var(--font-sans)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E31E24] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white text-xs font-bold uppercase tracking-wider"
        >
          Skip to main content
        </a>

        <Navbar />

        <div id="main-content" className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
