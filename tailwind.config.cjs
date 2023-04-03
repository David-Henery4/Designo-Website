/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xsm: "30.31em", // 485px
      lgMob: "35em", // 560px
      smTab: "45.62em", // 730px
      smDesk: "58.12em", // 930px
      large: "64em", // 1024px
      desk: "70em", // 1120px
      lgDesk: "84.06em", // 1345px
    },
    colors: {
      peach: "#E7816B",
      lightPeach: "#FFAD9B",
      baige: "#FDF3F0",
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
        head3: "28px",
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
        mainTab: "40px repeat(10,1fr) 40px",
        mainLgDesk: "165px repeat(10,1fr) 165px",
        itemDesk: "repeat(auto-fill, minmax(350px,1fr))",
        footerTab: "repeat(3,1fr)",
        mapCardDesk: "1fr  31.6%",
        mapCardDeskReverse: "31.6% 1fr",
      },
      backgroundImage: {
        // WEB DESIGN CARDS
        "web-design-card-mob":
          "url('./src/assets/image-web-design.jpg')",
        "web-design-card-tab":
          "url('./src/assets/image-web-design.jpg')",
        "web-design-card-desk":
          "url('./src/assets/image-web-design-large.jpg')",

        // APP DESIGN CARDS
        "app-design-card-mob":
          "url('./src/assets/image-app-design.jpg')",
        "app-design-card-tab":
          "url('./src/assets/image-app-design.jpg')",
        "app-design-card-desk":
          "url('./src/assets/image-app-design.jpg')",

        // GRAPHIC DESIGN CARDS
        "graphic-design-card-mob":
          "url('./src/assets/image-graphic-design.jpg')",
        "graphic-design-card-tab":
          "url('./src/assets/image-graphic-design.jpg')",
        "graphic-design-card-desk":
          "url('./src/assets/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
