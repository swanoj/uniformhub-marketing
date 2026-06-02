import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
      },
      colors: {
        brand: {
          canvas: "#FAFAF7",     // Warm cream page bg
          panel: "#FFFFFF",      // Crisp white cards
          panelAlt: "#F4F4F0",   // Soft grey cards
          text: "#1A1A1A",       // Charcoal typography
          textMuted: "#5E5F5B",  // Muted grey captions
          teal: {
            light: "#EAF3F3",    // Subtle teal-tint bg
            DEFAULT: "#0D6E6E",  // Eucalyptus Teal primary
            hover: "#0B5E5E",    // Teal CTA hover
            dark: "#084B4B",     // Teal bold highlights
          },
          coral: {
            light: "#FDF1EE",    // Light alert bg
            DEFAULT: "#E06D53",  // Australian Ochre accent
            dark: "#A3412E",     // Coral deep border
          }
        }
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 35s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
      },
      borderRadius: {
        "3xl": "24px",
        "2xl": "16px",
        "xl": "12px",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.03)",
        medium: "0 10px 30px -4px rgba(0, 0, 0, 0.06)",
        premium: "0 16px 40px rgba(0, 0, 0, 0.08)",
      }
    },
  },
  plugins: [],
};
export default config;
