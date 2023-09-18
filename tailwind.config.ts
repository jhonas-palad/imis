import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl" : "1400px",
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        brand: {
          primary: {
            900: "#244A4C",
            800: "#306366",
            700: "#3D7C7F",
            600: "#499599",
            500: "#55AEB2",
            400: "#61C7CC",
            300: "#6DE0E5",
            200: "#7AF9FF",
            100: "#94faff",
          },
          secondary: {
            900: "#1b3320",
            800: "#284c30",
            700: "#366640",
            600: "#437f51",
            500: "#519961",
            400: "#5eb271",
            300: "#6ccc81",
            200: "#79e591",
            100: "#87ffa2"
          }
        },
        "body-color": "hsl(var(--body-bg))",
        spinner: "hsl(var(--spinner-stroke-color))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes:{
        
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },

        enterFromRight: {
          from: { opacity: "0", transform: 'translateX(200px)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: 'translateX(-200px)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: "1", transform: 'translateX(0)' },
          to: { opacity: "0", transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: "1", transform: 'translateX(0)' },
          to: { opacity: "0", transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "accordion-down" : "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
      }

    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
