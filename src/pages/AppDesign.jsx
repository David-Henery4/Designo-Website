import {ItemPagesHeader, ProjectsLinksSection, DesignItemsContainer} from "../components";
import {appDesignHeaderData} from "../data/itemHeaderData";
import {appDesignData} from "../data/itemData"
import {
  graphicDesignCardData,
  webDesignCardData,
} from "../data/projectLinksData";

const AppDesign = () => {
  return (
    <>
      <ItemPagesHeader {...appDesignHeaderData} />
      <DesignItemsContainer items={appDesignData} />
      <ProjectsLinksSection projectCardDataOne={webDesignCardData} projectCardDataTwo={graphicDesignCardData}/>
    </>
  );
};

export default AppDesign;
