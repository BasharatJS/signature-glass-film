"use client";

import Image from "next/image";
import { ArrowRight, Clock, Phone, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";

const trustItems = [
  { label: "5.0 Rating", icon: Star },
  { label: "Open 24 Hours", icon: Clock },
  { label: "Privacy Films", icon: ShieldCheck }
];

const heroLines = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section
      id="home"
      className="anchor-offset relative flex min-h-screen items-start overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 26, -18, 0], y: [0, -18, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-24 size-72 rounded-full bg-glass-blue/15 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -18, 28, 0], y: [0, 20, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-[8%] size-80 rounded-full bg-gold-400/12 blur-3xl"
      />

      <div className="section-shell grid items-start gap-10 py-8 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-12">
        <motion.div
          variants={heroLines}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mb-10"
          >
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm font-bold text-zinc-200 backdrop-blur-xl"
                >
                  <Icon className="text-gold-400" size={17} aria-hidden="true" />
                  {item.label}
                </div>
              );
            })}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400"
          >
            Pune, Maharashtra
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[1.02] tracking-[0.13em] text-white sm:text-6xl lg:text-7xl"
          >
            Signature <span className="text-gold-400">Glass Films</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl font-semibold text-zinc-200 sm:text-2xl"
          >
            Glass Films & Interior Solutions
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm font-semibold uppercase tracking-[0.38em] text-zinc-400 sm:text-base"
          >
            Style - Safety - Privacy
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            Premium sun-control films, smart glass, blinds, wall finishes,
            flooring and interior upgrades installed with a refined,
            detail-led approach across Pune.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="tel:+919833391153">
              <Phone size={18} aria-hidden="true" />
              Call Now
            </ButtonLink>
            <ButtonLink
              href="https://wa.me/919833391153"
              variant="green"
              className="sm:min-w-36"
            >
              WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gold-400/15 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-[1.75rem]">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Modern glass office interior with warm premium lighting"
              width={900}
              height={1100}
              priority
              className="h-[460px] w-full object-cover sm:h-[560px] lg:h-[610px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/22 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-300">
                  5.0 Star Google Rating
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Trusted by Pune clients for privacy, heat control and
                  elegant interior finish work.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
