import { LeafBgPattern } from "../assets";
import {DesignItemCard} from "../components"


const DesignItemsContainer = (items) => {
    const newDesignData = items?.items;
    //
    return (
      <section className="relative w-full col-start-2 col-end-12 grid gap-10 smDesk:gap-[30px] smDesk:grid-cols-itemDesk">
        <LeafBgPattern className="hidden pointer-events-none absolute -z-10 -top-[285px] lg:block lg:-left-10 lgDesk:-left-[165px]" />
        {newDesignData.map((item) => {
          return <DesignItemCard {...item} key={item?.id} />;
        })}
      </section>
    );
}

export default DesignItemsContainer