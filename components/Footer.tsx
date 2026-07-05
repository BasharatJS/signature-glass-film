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

        <div className="text-sm font-semibold text-zinc-400">
          Developed by{" "}
          <a
            href="https://www.codewithbasharat.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 transition-colors hover:text-gold-300"
          >
            CodeWithBasharat.com
          </a>
        </div>
      </div>
    </footer>
  );
}
