// Design Tokens for UniformHub Brand System
// Shared between marketing and core PWA application

export const designTokens = {
  colors: {
    // Primary Brand - Sascha's Selected Eucalyptus Teal
    primary: {
      light: "#EAF3F3",   // Subtle background panels
      accent: "#0D6E6E",  // Main Eucalyptus Teal
      dark: "#084B4B",    // Headings, heavy contrast text
      hover: "#0B5E5E",   // CTA hover states
    },
    // Accent Highlight - Australian Ochre / Coral (used sparingly for 'Sold' badges, tags, numbers)
    coral: {
      light: "#FDF1EE",
      accent: "#E06D53",
      dark: "#A3412E",
    },
    // Neutrals
    canvas: "#FAFAF7",     // Deep cream / warm off-white canvas wrapper
    panel: "#FFFFFF",      // Crisp white bento cards
    panelAlt: "#F4F4F0",   // Soft grey-white for alternating card rows
    text: {
      charcoal: "#1A1A1A", // H1, H2, body bold
      muted: "#5E5F5B",    // Opacity-like grey for sub-captions (roughly 60% opacity)
      light: "#9A9B96",    // Light border/disabled text
    },
  },
  typography: {
    fontFamily: {
      display: "var(--font-fraunces)",  // Serif for warm local headers
      sans: "var(--font-geist-sans)",   // Clean body and modern UI labels
    },
    fontSize: {
      h1: "font-size: 3rem; line-height: 1.15", // 48px desktop
      h2: "font-size: 2rem; line-height: 1.25", // 32px mobile
      body: "font-size: 1.0625rem; line-height: 1.6", // ~17px readable parent copy
    }
  },
  borderRadius: {
    card: "16px",    // Elegant rounded-2xl (matches aqryl.app)
    button: "12px",  // Thumb-friendly button size
    badge: "9999px", // Pill tags
  },
  shadows: {
    subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.03)",
    medium: "0 10px 30px -4px rgba(0, 0, 0, 0.06)",
    premium: "0 16px 40px rgba(0, 0, 0, 0.08)", // Floating navbar and dialog shadows
  }
};
