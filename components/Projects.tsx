"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Tinted Office Glass",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1100&q=85"
  },
  {
    title: "Premium Privacy Film",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
  },
  {
    title: "Warm Interior Finishes",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85"
  },
  {
    title: "Glass Meeting Room",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85"
  },
  {
    title: "Modern Wall Design",
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1100&q=85"
  },
  {
    title: "Sun Control Facade",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85"
  }
];

export function Projects() {
  return (
    <section id="projects" className="anchor-offset py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Glass, Privacy & Finish Work">
          A curated look at the kind of polished spaces Signature Glass Films
          creates for residential, office and retail interiors.
        </SectionHeading>

        <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.045, ease: "easeOut" }}
              className={`group glass-panel relative overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-lg font-black uppercase tracking-[0.14em] text-white">
                  {project.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
