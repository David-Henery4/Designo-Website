/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "30.31em", // 485px
      smTab: "45.62em", // 730px
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
        footerTab: "repeat(3,1fr)",
      },
      backgroundImage: {
  
        // WEB DESIGN CARDS
        "web-design-card-mob": "url('./src/assets/home/mobile/image-web-design.jpg')",
        "web-design-card-tab": "url('./src/assets/home/tablet/image-web-design.jpg')",
        "web-design-card-desk": "url('./src/assets/home/desktop/image-web-design-large.jpg')",

        // APP DESIGN CARDS
        "app-design-card-mob": "url('./src/assets/home/mobile/image-app-design.jpg')",
        "app-design-card-tab": "url('./src/assets/home/tablet/image-app-design.jpg')",
        "app-design-card-desk": "url('./src/assets/home/desktop/image-app-design.jpg')",

        // GRAPHIC DESIGN CARDS
        "graphic-design-card-mob": "url('./src/assets/home/mobile/image-graphic-design.jpg')",
        "graphic-design-card-tab": "url('./src/assets/home/tablet/image-graphic-design.jpg')",
        "graphic-design-card-desk": "url('./src/assets/home/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
