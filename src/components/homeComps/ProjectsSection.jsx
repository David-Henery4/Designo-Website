import {ProjectsLinkCard} from "../../components"
import {appDesignCardData,graphicDesignCardData,webDesignCardData} from "../../data/projectLinksData";

const ProjectsSection = () => {
  return (
    <section className="w-full text-white col-start-2 col-end-12 grid gap-6">
      <ProjectsLinkCard {...webDesignCardData} />
      <ProjectsLinkCard {...appDesignCardData} />
      <ProjectsLinkCard {...graphicDesignCardData} />
    </section>
  );
}

export default ProjectsSection