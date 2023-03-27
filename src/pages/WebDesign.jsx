import {webDesignData} from "../data/itemData"
import {webDesignHeaderData} from "../data/itemHeaderData"
import {ProjectsLinksSection, ItemPagesHeader, DesignItemsContainer} from "../components"

const WebDesign = () => {
  return (
    <>
      <ItemPagesHeader {...webDesignHeaderData}/>
      <DesignItemsContainer items={webDesignData}/>
      <ProjectsLinksSection/>
    </>
  )
}

export default WebDesign