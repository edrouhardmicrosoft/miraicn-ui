const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Segoe UI Web (West European)", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", ...fontFamily.sans],
        mono: ["Monaspace Neon", "Consolas", "Menlo", "Courier New", "Courier", ...fontFamily.mono],
      },
      fontSize: {
        // Mirai font sizes
        "mri-1": "40px",
        "mri-2": "28px",
        "mri-3": "20px",
        "mri-4": "16px",
        "mri-5": "14px",
        "mri-6": "12px",
        "mri-7": "10px",
      },
      fontWeight: {
        regular: "400",
        bold: "600",
      },
      colors: {
        // Mirai color system - using CSS variables directly
        border: {
          DEFAULT: "var(--mri-color-border-1)",
          2: "var(--mri-color-border-2)",
        },
        background: {
          DEFAULT: "var(--mri-color-background-1)",
          1: "var(--mri-color-background-1)",
          2: "var(--mri-color-background-2)",
          3: "var(--mri-color-background-3)",
          4: "var(--mri-color-background-4)",
          overlay: "var(--mri-color-background-overlay)",
        },
        foreground: {
          DEFAULT: "var(--mri-color-text-1)",
          1: "var(--mri-color-text-1)",
          2: "var(--mri-color-text-2)",
          3: "var(--mri-color-text-3)",
          4: "var(--mri-color-text-4)",
        },
        brand: {
          DEFAULT: "var(--mri-color-brand-base)",
          text: "var(--mri-color-brand-text)",
        },
        // Keep existing color mappings for compatibility
        input: "var(--mri-color-border-1)",
        ring: "var(--mri-color-brand-base)",
        primary: {
          DEFAULT: "var(--mri-color-brand-base)",
          foreground: "var(--mri-color-background-4)",
        },
        secondary: {
          DEFAULT: "var(--mri-color-background-2)",
          foreground: "var(--mri-color-text-1)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "var(--mri-color-background-2)",
          foreground: "var(--mri-color-text-3)",
        },
        accent: {
          DEFAULT: "var(--mri-color-background-2)",
          foreground: "var(--mri-color-text-1)",
        },
        popover: {
          DEFAULT: "var(--mri-color-background-1)",
          foreground: "var(--mri-color-text-1)",
        },
        card: {
          DEFAULT: "var(--mri-color-background-1)",
          foreground: "var(--mri-color-text-1)",
        },
        sidebar: {
          DEFAULT: "var(--mri-color-background-1)",
          foreground: "var(--mri-color-text-2)",
          primary: "var(--mri-color-brand-base)",
          "primary-foreground": "var(--mri-color-background-4)",
          accent: "var(--mri-color-background-2)",
          "accent-foreground": "var(--mri-color-text-1)",
          border: "var(--mri-color-border-1)",
          ring: "var(--mri-color-brand-base)",
        },
      },
      borderRadius: {
        // Mirai border radius values
        "mri-small": "4px",
        "mri-medium": "8px",
        "mri-large": "12px",
        "mri-xlarge": "16px",
        "mri-circular": "10000px",
        // Keep existing for compatibility
        xl: "calc(var(--mri-border-radius) + 4px)",
        lg: "var(--mri-border-radius)",
        md: "calc(var(--mri-border-radius) - 2px)",
        sm: "calc(var(--mri-border-radius) - 4px)",
      },
      spacing: {
        // Mirai size system
        "mri-small": "24px",
        "mri-medium": "32px",
        "mri-large": "40px",
      },
      boxShadow: {
        // Mirai shadow system
        "mri-2": "var(--mri-shadow-2)",
        "mri-4": "var(--mri-shadow-4)",
        "mri-8": "var(--mri-shadow-8)",
        "mri-16": "var(--mri-shadow-16)",
        "mri-28": "var(--mri-shadow-28)",
        "mri-64": "var(--mri-shadow-64)",
      },
      transitionDuration: {
        // Mirai duration values
        "mri-rest": "100ms",
        "mri-hover": "150ms",
        "mri-pressed": "50ms",
      },
      opacity: {
        // Mirai opacity values
        "mri-disabled": "0.5",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
}
