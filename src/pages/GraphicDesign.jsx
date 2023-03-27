import {ItemPagesHeader, ProjectsLinksSection, DesignItemsContainer} from "../components"
import {graphicDesignHeaderData} from "../data/itemHeaderData"
import { graphicDesignData } from "../data/itemData";
import {
  webDesignCardData,
  appDesignCardData,
} from "../data/projectLinksData";
const GraphicDesign = () => {
  return (
    <>
      <ItemPagesHeader {...graphicDesignHeaderData} />
      <DesignItemsContainer items={graphicDesignData} />
      <ProjectsLinksSection projectCardDataOne={appDesignCardData} projectCardDataTwo={webDesignCardData}/>
    </>
  );
}

export default GraphicDesign