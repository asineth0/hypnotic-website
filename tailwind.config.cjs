const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: colors.neut,
        dark: {
          50: "#383838",
          100: "#353535",
          200: "#323232",
          300: "#2d2d2d",
          400: "#2c2c2c",
          500: "#272727",
          600: "#242424",
          700: "#222222",
          800: "#1d1d1d",
          900: "#121212",
        },
      },
      fontFamily: {
        sans: "Inter",
      },
    },
  },
  plugins: [],
};
