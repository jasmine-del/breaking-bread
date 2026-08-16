import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/config";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700", "900"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breaking Bread | Artisanal Bakery in Pokhara, Nepal",
  description: "Breaking Bread is a bakery in Pokhara, Nepal supplying fresh and frozen artisan breads, sourdough, and pastries to hotels, cafes, and walk-in customers.",
  keywords: ["bakery Pokhara", "sourdough Pokhara", "wholesale bread supplier Nepal", "bakery for hotels Pokhara"],
  openGraph: {
    title: "Breaking Bread | Artisanal Bakery in Pokhara",
    description: "Fresh and frozen artisan breads and pastries in Pokhara, Nepal.",
    url: "https://breakingbreadpokhara.com",
    siteName: "Breaking Bread",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Bakery LocalBusiness Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Breaking Bread",
    "image": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pokhara",
      "addressCountry": "NP"
    },
    "telephone": siteConfig.phone,
    "url": "https://breakingbreadpokhara.com",
    "description": metadata.description,
  };

  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
