import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        "fluid-hero": "clamp(2.25rem, 5.5vw + 0.5rem, 4.5rem)",
        "fluid-h2": "clamp(1.75rem, 2.5vw + 0.75rem, 2.75rem)",
      },
      boxShadow: {
        glow: "0 0 40px -10px hsl(var(--primary) / 0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "drift-a": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(6vw, -4vh, 0) scale(1.1)" },
          "66%": { transform: "translate3d(-4vw, 5vh, 0) scale(0.95)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-8vw, 6vh, 0) scale(1.15)" },
        },
        "drift-c": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "40%": { transform: "translate3d(5vw, 4vh, 0) scale(0.9)" },
          "75%": { transform: "translate3d(-3vw, -5vh, 0) scale(1.08)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0px 0px, 0px 0px" },
          "100%": { backgroundPosition: "48px 48px, 48px 48px" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.7" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(-14deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "60%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "drift-a": "drift-a 22s ease-in-out infinite",
        "drift-b": "drift-b 28s ease-in-out infinite",
        "drift-c": "drift-c 26s ease-in-out infinite",
        "grid-pan": "grid-pan 30s linear infinite",
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        wave: "wave 1.6s ease-in-out infinite",
        bob: "bob 3s ease-in-out infinite",
        blink: "blink 4s ease-in-out infinite",
        "pop-in": "pop-in 0.5s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
