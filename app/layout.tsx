import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://signatureglassfilms.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Signature Glass Films Pune | Glass Films & Interior Solutions",
    template: "%s | Signature Glass Films Pune"
  },
  description:
    "Signature Glass Films in Pune offers premium glass films, sun control films, smart glass, blinds, wallpapers, flooring, ceilings, waterproofing and interior solutions.",
  keywords: [
    "Signature Glass Films Pune",
    "glass film Pune",
    "sun control film Pune",
    "smart glass Pune",
    "window blinds Pune",
    "privacy film Pune",
    "interior solutions Pune",
    "Nasir Hissain glass film"
  ],
  alternates: {
    canonical: "/"
  },
  authors: [{ name: "Signature Glass Films" }],
  creator: "Signature Glass Films",
  publisher: "Signature Glass Films",
  category: "Glass and interior solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Signature Glass Films Pune",
    description:
      "Premium glass films and interior solutions by Nasir Hissain in Pune, Maharashtra.",
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Signature Glass Films",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Premium glass interior by Signature Glass Films Pune"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Glass Films Pune",
    description:
      "Premium glass films, smart glass, blinds, flooring and interior solutions in Pune.",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
