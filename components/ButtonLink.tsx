"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "green" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className
}: ButtonLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink-950 sm:px-7",
        variant === "gold" &&
          "bg-gold-400 text-ink-950 shadow-gold hover:shadow-[0_0_44px_rgba(212,167,44,0.45)] focus:ring-gold-300",
        variant === "green" &&
          "bg-[#24D366] text-white shadow-[0_0_34px_rgba(36,211,102,0.24)] hover:shadow-[0_0_44px_rgba(36,211,102,0.4)] focus:ring-[#8AF0B4]",
        variant === "ghost" &&
          "border border-white/15 bg-white/5 text-white hover:border-gold-400/60 hover:bg-white/10 focus:ring-white/50",
        className
      )}
    >
      {children}
    </motion.a>
  );
}
