import { ProjectsLinkCard } from "../../components";
import {
  appDesignCardData,
  graphicDesignCardData,
  webDesignCardData,
  appDesignHomeDesktopChanges,
  graphicDesignHomeDesktopChanges,
  webDesignHomeDesktopChanges,
} from "../../data/projectLinksData";
import { LeafBgPattern } from "../../assets";

const ProjectsSection = () => {
  //
  return (
    <section className="relative w-full col-start-2 col-end-12 grid gap-6 smDesk:gap-y-6 smDesk:gap-x-[30px]">
      <LeafBgPattern className="hidden absolute -z-10 -top-[485px] lg:block lg:-left-10 lgDesk:-left-[165px]" />
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
};

export default ProjectsSection;
