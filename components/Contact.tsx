"use client";

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="anchor-offset py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Contact" title="Get In Touch">
          Call or message to discuss glass films, blinds, smart glass, flooring
          or interior finishing work anywhere across Pune.
        </SectionHeading>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="glass-panel rounded-[1.5rem] p-6 sm:p-8"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-gold-400" size={22} />
                <div>
                  <p className="font-bold text-white">Address</p>
                  <p className="mt-1 leading-7 text-zinc-400">
                    Office No. 4, Solitaire World, Gangadham Chowk, Phase 1,
                    Bibwewadi, Pune, Maharashtra 411037
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-gold-400" size={22} />
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <a
                    href="tel:+919833391153"
                    className="mt-1 inline-block text-zinc-400 transition-colors hover:text-gold-300"
                  >
                    098333 91153
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-gold-400" size={22} />
                <div>
                  <p className="font-bold text-white">Hours</p>
                  <p className="mt-1 text-zinc-400">Open 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="gold-divider my-8" />

            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="tel:+919833391153" className="flex-1">
                <Phone size={18} aria-hidden="true" />
                Call Now
              </ButtonLink>
              <ButtonLink
                href="https://wa.me/919833391153"
                variant="green"
                className="flex-1"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </ButtonLink>
            </div>

            <form className="mt-8 grid gap-4" aria-label="Contact form">
              <input
                className="min-h-12 rounded-2xl border border-white/12 bg-white/[0.06] px-4 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-gold-400"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="min-h-12 rounded-2xl border border-white/12 bg-white/[0.06] px-4 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-gold-400"
                type="tel"
                name="phone"
                placeholder="Phone"
              />
              <textarea
                className="min-h-32 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-gold-400"
                name="message"
                placeholder="Message"
              />
              <button
                type="button"
                className="min-h-12 rounded-full border border-gold-400/50 bg-gold-400/10 px-6 text-sm font-bold text-gold-300 transition-colors hover:bg-gold-400 hover:text-ink-950"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
            className="glass-panel min-h-[520px] overflow-hidden rounded-[1.5rem]"
          >
            <iframe
              title="Map to Signature Glass Films in Bibwewadi Pune"
              src="https://www.google.com/maps?q=Solitaire%20World%20Gangadham%20Chowk%20Bibwewadi%20Pune%20411037&output=embed"
              className="h-full min-h-[520px] w-full border-0 grayscale invert-[0.9] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
