"use client";

import {
  Bath,
  Blinds,
  Brush,
  Building2,
  DoorOpen,
  Droplets,
  Grid2X2,
  Layers3,
  PaintRoller,
  PanelTop,
  ShieldCheck,
  Sparkles,
  SunMedium
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const services = [
  { title: "All Glass & Sun Control Films", icon: SunMedium },
  { title: "Window Blinds - Zebra, Roller & All Types", icon: Blinds },
  { title: "Wallpapers & Wall Design Sheets", icon: PaintRoller },
  { title: "Smart Glass (Electric Film)", icon: Sparkles },
  { title: "PVC Flooring", icon: Grid2X2 },
  { title: "Wooden Flooring", icon: Layers3 },
  { title: "False Ceiling", icon: PanelTop },
  { title: "PVC Ceiling", icon: Building2 },
  { title: "PVC Folding Doors", icon: DoorOpen },
  { title: "Mosquito Nets & Invisible Grill", icon: ShieldCheck },
  { title: "Bathroom Waterproofing & Leakage Solutions", icon: Bath },
  { title: "Wall Putty & Wall Leakage Work", icon: Droplets },
  { title: "Wall Painting", icon: Brush }
];

const grid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="anchor-offset py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Our Premium Services" title="Made For Glass, Built For Interiors">
          From privacy films and smart glass to flooring, ceilings and wall
          finishes, every service is shaped for clean installation and a premium
          finished look.
        </SectionHeading>

        <div className="gold-divider my-12" />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel group rounded-2xl p-5 transition-colors hover:border-gold-400/45"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-400/10 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Premium materials, neat finishing and practical guidance for
                  homes, offices and commercial spaces.
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
