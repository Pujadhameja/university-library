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
          900: "#FFFFFF",
          800: "#F8FAFC",
          700: "#F8F8FF",
          600: "#EDF1F1",
          200: "#9298A1",
          100: "#64748B",
        },
        dark: {
          800: "#16191E",
          500: "#1C2025",
          400: "#1E293B",
          200: "#3A354E",
          100: "#64748B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
