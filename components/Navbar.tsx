"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 90],
    ["rgba(10,10,10,0)", "rgba(10,10,10,0.9)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 90],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.12)"]
  );

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed inset-x-0 top-0 z-40 max-w-full overflow-x-clip border-b backdrop-blur-xl"
    >
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <a
          href="#home"
          className="max-w-[240px] text-white sm:max-w-none"
          aria-label="Signature Glass Films home"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href="tel:+919833391153" className="min-h-11 px-5">
            <Phone size={17} aria-hidden="true" />
            Call Now
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-shell pb-5 lg:hidden"
        >
          <div className="glass-panel grid gap-2 rounded-2xl p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="tel:+919833391153" className="mt-2 w-full">
              <Phone size={17} aria-hidden="true" />
              Call Now
            </ButtonLink>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
