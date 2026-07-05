import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="inline-flex text-white">
            <Logo />
          </a>
          <p className="mt-3 text-sm text-zinc-400">
            Glass Films & Interior Solutions - Style - Safety - Privacy
          </p>
          <p className="mt-3 text-xs text-zinc-500">
            &copy; 2026 Signature Glass Films. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-zinc-400 transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          {[
            { label: "Instagram", icon: Instagram },
            { label: "Facebook", icon: Facebook },
            { label: "LinkedIn", icon: Linkedin }
          ].map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-zinc-300 transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
