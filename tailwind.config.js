/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        dark: colors.violet[950],
        DEFAULT: colors.violet[800],
        neutral: colors.violet[400],
        light: colors.violet[100],
      },
      neutral: {
        DEFAULT: colors.slate[600],
        grey: colors.slate[400],
        light: colors.slate[200],
        lighter: colors.slate[100],
        dark: colors.slate[800],
        darker: colors.slate[900],
      },
      success: colors.green[600],
      failure: colors.red[600],
    },
    fontSize: {
      sm: "0.65rem",
      md: ".85rem",
      base: ".85rem",
      lg: "1rem",
      xl: "1.2rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.33rem",
      "6xl": "2.66rem",
      "7xl": "3rem",
      "8xl": "3.5rem",
    },
    screens: {
      phone: "640px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1124px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1380px",
      // => @media (min-width: 1280px) { ... }

      monitor: "1536px",
      // => @media (min-width: 1536px) { ... }
      tv: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
