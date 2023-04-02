import {ItemPagesHeader, ProjectsLinksSection, DesignItemsContainer} from "../components";
import {appDesignHeaderData} from "../data/itemHeaderData";
import {appDesignData} from "../data/itemData"
import {
  graphicDesignCardData,
  webDesignCardData,
} from "../data/projectLinksData";

const AppDesign = () => {
  return (
    <div className="w-full col-start-1 col-end-13 max-w-[1440px] mx-auto grid grid-cols-main gap-y-24 mb-24 sm:gap-y-[120px] sm:mb-[120px] md:grid-cols-mainTab smDesk:mb-40 smDesk:gap-y-40 lgDesk:grid-cols-mainLgDesk">
      <ItemPagesHeader {...appDesignHeaderData} />
      <DesignItemsContainer items={appDesignData} />
      <ProjectsLinksSection
        projectCardDataOne={webDesignCardData}
        projectCardDataTwo={graphicDesignCardData}
      />
    </div>
  );
};

export default AppDesign;
