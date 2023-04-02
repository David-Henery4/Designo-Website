
const webDesignCardData = {
  id: 1,
  title: "WEB DESIGN",
  link: "/web-design",
  bgImage: {
    mob: "bg-web-design-card-mob",
    tab: "xsm:bg-web-design-card-tab",
    desk: "smDesk:bg-web-design-card-desk",
  },
};

const appDesignCardData = {
  id: 2,
  title: "APP DESIGN",
  link: "/app-design",
  bgImage: {
    mob: "bg-app-design-card-mob",
    tab: "xsm:bg-app-design-card-tab",
    desk: "smDesk:bg-app-design-card-desk",
  },
};

const graphicDesignCardData = {
  id: 3,
  title: "GRAPHIC DESIGN",
  link: "/graphic-design",
  bgImage: {
    mob: "bg-graphic-design-card-mob",
    tab: "xsm:bg-graphic-design-card-tab",
    desk: "smDesk:bg-graphic-design-card-desk",
  },
};

// ## CHANGES ADDED TO PROJECTS CARDS ON HOME PAGE,
// IN ORDER TO FIT THE LAYOUT
  const webDesignHomeDesktopChanges = {
    colStart: "smDesk:col-start-1",
    colEnd: "smDesk:col-end-2",
    rowStart: "smDesk:row-start-1",
    rowEnd: "smDesk:row-end-3",
    height: "smDesk:h-full",
  };
  const appDesignHomeDesktopChanges = {
    colStart: "smDesk:col-start-2",
    colEnd: "smDesk:col-end-3",
    height: "smDesk:h-[308px]",
  };
  const graphicDesignHomeDesktopChanges = {
    height: "smDesk:h-[308px]",
  };

export {
  appDesignCardData,
  graphicDesignCardData,
  webDesignCardData,
  appDesignHomeDesktopChanges,
  graphicDesignHomeDesktopChanges,
  webDesignHomeDesktopChanges
}


