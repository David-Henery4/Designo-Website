import {DesignItemCard} from "../../components"
import {
  webDesignData,
  appDesignData,
  graphicDesignData,
} from "../../data/itemData";

const WebDesignItems = () => {
  return (
  <section className="w-full col-start-2 col-end-12 grid gap-10">
    {webDesignData.map(item => {
      return <DesignItemCard {...item} key={item?.id}/>
    })}
  </section>)
}

export default WebDesignItems