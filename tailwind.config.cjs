/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // mdTab: "38.75em", // 620px
      ...defaultTheme.screens,
    },
    colors: {
      peach: "#E7816B",
      lightPeach: "#FFAD9B",
      black: "#1D1C1E",
      white: "#ffffff",
      darkGrey: "#333136",
      lightGrey: "#F1F3F5",
    },
    fontFamily: {
      jost: "'Jost', sans-serif",
    },
    extend: {
      fontSize: {
        head1Mob: "32px",
        head2: "40px",
        bodyMob: "15px",
      },
      lineHeight: {
        head1: "48px",
        head2: "48px",
        head3: "26px",
        body: "26px",
        bodyMob: "25px",
      },
      letterSpacing: {
        btn: "1px",
      },
      gridTemplateColumns: {
        main: "24px repeat(10,1fr) 24px",
      },
    },
  },
  plugins: [],
};
