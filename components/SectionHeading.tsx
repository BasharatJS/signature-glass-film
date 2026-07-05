"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

function splitTitle(title: string) {
  const parts = title.trim().split(" ");
  const accent = parts.pop() ?? "";
  return {
    main: parts.join(" "),
    accent
  };
}

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  const { main, accent } = splitTitle(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xs font-bold uppercase tracking-[0.32em] text-gold-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.12em] text-white sm:text-4xl lg:text-5xl">
        {main}{" "}
        <span className="text-gold-400">{accent}</span>
      </h2>
      {children ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          {children}
        </p>
      ) : null}
    </motion.div>
  );
}
