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
        },
        light: {
          900: "#FFFFFF",
          200: "#9298A1",
        },
        dark: {
          800: "#16191E",
          500: "#1C2025",
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
