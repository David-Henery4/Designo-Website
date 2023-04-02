import { webDesignData } from "../data/itemData";
import { webDesignHeaderData } from "../data/itemHeaderData";
import {
  ProjectsLinksSection,
  ItemPagesHeader,
  DesignItemsContainer,
} from "../components";
import {
  graphicDesignCardData,
  appDesignCardData,
} from "../data/projectLinksData";

const WebDesign = () => {
  return (
    <div className="w-full col-start-1 col-end-13 max-w-[1440px] mx-auto grid grid-cols-main gap-y-24 mb-24 sm:gap-y-[120px] sm:mb-[120px] md:grid-cols-mainTab smDesk:mb-40 smDesk:gap-y-40 lgDesk:grid-cols-mainLgDesk">
      <ItemPagesHeader {...webDesignHeaderData} />
      <DesignItemsContainer items={webDesignData} />
      <ProjectsLinksSection
        projectCardDataOne={appDesignCardData}
        projectCardDataTwo={graphicDesignCardData}
      />
    </div>
  );
};

export default WebDesign;
