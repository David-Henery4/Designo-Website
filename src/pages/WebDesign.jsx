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
    <>
      <ItemPagesHeader {...webDesignHeaderData} />
      <DesignItemsContainer items={webDesignData} />
      <ProjectsLinksSection
        projectCardDataOne={appDesignCardData}
        projectCardDataTwo={graphicDesignCardData}
      />
    </>
  );
};

export default WebDesign;
