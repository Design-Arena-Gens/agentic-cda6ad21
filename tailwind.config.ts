import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#dff1ff",
          200: "#b9defd",
          300: "#88c6f9",
          400: "#4ca6f4",
          500: "#1c87ed",
          600: "#0d6cd3",
          700: "#0a56aa",
          800: "#0d4788",
          900: "#113c6f",
          950: "#0a2546"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        flyer: "0 40px 80px -40px rgba(17, 60, 111, 0.45)"
      },
      backgroundImage: {
        "flyer-gradient":
          "linear-gradient(135deg, rgba(12,78,162,0.95), rgba(12,78,162,0.75) 45%, rgba(5,150,105,0.85))",
        "accent-grid":
          "radial-gradient(circle at center, rgba(255,255,255,0.6) 0, rgba(255,255,255,0) 65%)"
      }
    }
  },
  plugins: []
};

export default config;
