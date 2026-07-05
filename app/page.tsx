import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Signature Glass Films",
    description:
      "Premium glass films, sun control films, smart glass, blinds, wallpapers, flooring, ceilings and interior solutions in Pune.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    telephone: "+91-98333-91153",
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Nasir Hissain",
      jobTitle: "Glass Film & Interior Specialist"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No. 4, Solitaire World, Gangadham Chowk, Phase 1, Bibwewadi",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411037",
      addressCountry: "IN"
    },
    areaServed: "Pune, Maharashtra",
    openingHours: "Mo-Su 00:00-23:59",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "9"
    },
    makesOffer: [
      "Glass Films",
      "Sun Control Films",
      "Smart Glass",
      "Window Blinds",
      "Wallpapers",
      "PVC Flooring",
      "Wooden Flooring",
      "False Ceiling",
      "Waterproofing"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c")
        }}
      />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
