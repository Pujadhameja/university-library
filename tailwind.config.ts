import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "bebas-neue": ["var(--bebas-neue)"],
      },
      colors: {
        primary: {
          DEFAULT: "#E7C9A5",
          admin: "#25388C",
        },
        green: {
          DEFAULT: "#027A48",
          800: "#027A48",
          400: "#4C7B62",
          100: "#ECFDF3",
        },
        red: {
          DEFAULT: "#EF3A4B",
          800: "#EF3A4B",
          400: "#F46F70",
        },
        light: {
          // 900: "#FFFFFF",
          // 800: "#F8FAFC",
          // 700: "#F8F8FF",
          // 600: "#EDF1F1",
          // 200: "#9298A1",
          // 100: "#64748B",
          100: "#D6E0FF",
          200: "#EED1AC",
        },
        dark: {
          100: "#16191E",
          // 500: "#1C2025",
          // 400: "#1E293B",
          300: "#232839",
          // 200: "#3A354E",
          // 100: "#64748B",
        },
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        pattern: "url('/images/pattern.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
