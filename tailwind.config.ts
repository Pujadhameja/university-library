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
        "ibm-plex-sans": ["var(--ibm-plex-sans)"],
        "bebas-neue": ["var(--bebas-neue)"],
      },
      colors: {
        user: {
          primary: "#E7C9A5",
        },
        dashboard: {
          primary: "#25388C",
          approve: {
            DEFAULT: "#027A48",
            800: "#027A48",
            400: "#4C7B62",
            100: "#ECFDF3",
          },
          deny: {
            DEFAULT: "#EF3A4B",
            800: "#EF3A4B",
            400: "#F46F70",
          },
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
      backgroundImage: {
        "auth-user": "url('/assets/images/user/auth-bg.png')",
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
