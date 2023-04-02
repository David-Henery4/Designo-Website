import {ItemPagesHeader, ProjectsLinksSection, DesignItemsContainer} from "../components"
import {graphicDesignHeaderData} from "../data/itemHeaderData"
import { graphicDesignData } from "../data/itemData";
import {
  webDesignCardData,
  appDesignCardData,
} from "../data/projectLinksData";
const GraphicDesign = () => {
  return (
    <div className="w-full col-start-1 col-end-13 max-w-[1440px] mx-auto grid grid-cols-main gap-y-24 mb-24 sm:gap-y-[120px] sm:mb-[120px] md:grid-cols-mainTab smDesk:mb-40 smDesk:gap-y-40 lgDesk:grid-cols-mainLgDesk">
      <ItemPagesHeader {...graphicDesignHeaderData} />
      <DesignItemsContainer items={graphicDesignData} />
      <ProjectsLinksSection
        projectCardDataOne={appDesignCardData}
        projectCardDataTwo={webDesignCardData}
      />
    </div>
  );
}

export default GraphicDesign