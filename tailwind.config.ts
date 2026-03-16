import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        deep: "#2D5016",
        brand: "#4A90E2"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      boxShadow: {
        soft: "0 12px 30px rgba(45, 80, 22, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
