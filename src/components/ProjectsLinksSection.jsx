import {appDesignCardData, graphicDesignCardData} from "../data/projectLinksData"
import {ProjectsLinkCard} from "../components"

const ProjectsLinksSection = () => {
  // height change to all non-home page
  // project link cards
  const height = {
    height: "smDesk:h-[308px]",
  };
  return (
    <section className="col-start-2 col-end-12 flex flex-col gap-6">
      <ProjectsLinkCard {...appDesignCardData} changes={height}/>
      <ProjectsLinkCard {...graphicDesignCardData} changes={height}/>
    </section>
  );
}

export default ProjectsLinksSection