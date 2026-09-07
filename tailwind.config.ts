import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffcd57",
        navy: "#6b8cff",
        magenta: "#c10fff",
        ink: "#f5f5f5",
        muted: "#a1a1aa",
        cream: "#0a0a0a",
        sand: "#111111",
        surface: "#000000",
        "surface-elevated": "#0a0a0a",
        "surface-border": "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 32px rgba(0,0,0,0.65)",
        neon: "0 0 0 1px rgba(255,205,87,0.45), 0 0 28px rgba(255,205,87,0.55), 0 0 64px rgba(255,205,87,0.22)",
        "neon-sm": "0 0 0 1px rgba(255,205,87,0.3), 0 0 16px rgba(255,205,87,0.4), 0 0 36px rgba(255,205,87,0.14)",
        "neon-blue": "0 0 0 1px rgba(107,140,255,0.4), 0 0 24px rgba(107,140,255,0.45), 0 0 48px rgba(107,140,255,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
