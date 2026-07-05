"use client";

import Image from "next/image";
import { BadgeCheck, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { label: "5.0 ★ Rating", icon: Star },
  { label: "9+ Happy Clients", icon: BadgeCheck },
  { label: "Pune-based", icon: MapPin }
];

export function About() {
  return (
    <section id="about" className="anchor-offset py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="Specialist-Led Installation" />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[1.75rem] bg-glass-blue/12 blur-2xl" />
            <div className="glass-panel relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85"
                alt="Premium interior space with glass partitions"
                width={820}
                height={920}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl">
                <p className="font-display text-xl font-black uppercase tracking-[0.14em] text-white">
                  Nasir Hissain
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-300">
                  Glass Film & Interior Specialist
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="glass-panel rounded-[1.5rem] p-6 sm:p-8 lg:p-10"
          >
            <p className="text-xl font-semibold leading-9 text-zinc-100 sm:text-2xl">
              Nasir Hissain - Glass Film & Interior Specialist, trusted by
              clients across Pune for premium glass film and interior solutions
              with a 5-star reputation.
            </p>
            <p className="mt-6 leading-8 text-zinc-400">
              The work balances function and finish: reducing glare, improving
              privacy, protecting interiors, and giving homes and commercial
              spaces a polished architectural feel.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <Icon className="text-gold-400" size={22} aria-hidden="true" />
                    <p className="mt-3 text-sm font-bold text-white">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
