import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0A",
          900: "#111111",
          850: "#171717",
          800: "#202020"
        },
        gold: {
          300: "#F2D47C",
          400: "#D4A72C",
          500: "#B8871C"
        },
        glass: {
          blue: "#7FB8D9",
          white: "rgba(255, 255, 255, 0.12)"
        }
      },
      boxShadow: {
        gold: "0 0 34px rgba(212, 167, 44, 0.28)",
        glass: "0 18px 70px rgba(0, 0, 0, 0.36)"
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
