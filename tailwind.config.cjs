/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // mdTab: "38.75em", // 620px
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
