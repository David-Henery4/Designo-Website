import {ProjectsLinkCard} from "../../components"
import {appDesignCardData,graphicDesignCardData,webDesignCardData} from "../../data/projectLinksData";

const ProjectsSection = () => {
  // WIL ABSTRACT TO DATA FILE
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
  //
  return (
    <section className="w-full col-start-2 col-end-12 grid gap-6 smDesk:gap-y-6 smDesk:gap-x-[30px]">
      <ProjectsLinkCard
        {...webDesignCardData}
        changes={webDesignHomeDesktopChanges}
      />
      <ProjectsLinkCard
        {...appDesignCardData}
        changes={appDesignHomeDesktopChanges}
      />
      <ProjectsLinkCard
        {...graphicDesignCardData}
        changes={graphicDesignHomeDesktopChanges}
      />
    </section>
  );
}

export default ProjectsSection