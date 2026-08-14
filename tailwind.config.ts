import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffcd57",
        navy: "#060097",
        magenta: "#c10fff",
        ink: "#1e293b",
        muted: "#67768e",
        cream: "#faf7f2",
        sand: "#d2c4b0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
