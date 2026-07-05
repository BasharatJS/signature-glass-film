import { clsx } from "clsx";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <span className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-gold-400/50 bg-ink-900 shadow-gold">
        <svg
          aria-hidden="true"
          viewBox="0 0 44 44"
          className="size-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 31.5V12.5H27.5"
            stroke="#D4A72C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 36H34V17"
            stroke="#F5F5F5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 28L30 12"
            stroke="#7FB8D9"
            strokeOpacity="0.75"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M19 23L24 28L34 18"
            stroke="#D4A72C"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block font-display text-sm font-black uppercase tracking-[0.2em] text-white sm:text-base">
            Signature
          </span>
          <span className="mt-1 block font-display text-[10px] font-black uppercase tracking-[0.28em] text-gold-400 sm:text-xs">
            Glass Films
          </span>
        </span>
      ) : null}
    </span>
  );
}
