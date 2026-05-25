import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F8F6F1",
          100: "#E8E3DA",
          400: "#B89B5E",
          700: "#102A43",
          800: "#0B2533",
          900: "#1F2933",
        },
        surface: {
          50: "#F8F6F1",
          100: "#FFFFFF",
        },
        text: {
          muted: "#667085",
        },
        support: {
          500: "#6F8F72",
          whatsapp: "#25D366",
        },
      },
      boxShadow: {
        soft: "0 18px 40px rgba(16, 42, 67, 0.06)",
        card: "0 10px 30px rgba(16, 42, 67, 0.04)",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      backgroundImage: {
        "hero-soft":
          "radial-gradient(circle at top left, rgba(184,155,94,0.14), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,246,241,0.96))",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
