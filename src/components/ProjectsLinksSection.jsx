import {ProjectsLinkCard} from "../components"

const ProjectsLinksSection = ({projectCardDataOne, projectCardDataTwo}) => {
  // height change to all non-home page
  // project link cards
  const height = {
    height: "smDesk:h-[308px]",
  };
  return (
    <section className="col-start-2 col-end-12 flex flex-col gap-6 smDesk:flex-row">
      <ProjectsLinkCard {...projectCardDataOne} changes={height}/>
      <ProjectsLinkCard {...projectCardDataTwo} changes={height}/>
    </section>
  );
}

export default ProjectsLinksSection