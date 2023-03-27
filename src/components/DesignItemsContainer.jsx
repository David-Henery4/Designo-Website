import {DesignItemCard} from "../components"

const DesignItemsContainer = (items) => {
    const newDesignData = items?.items;
    //
    return (
      <section className="w-full col-start-2 col-end-12 grid gap-10 smDesk:gap-[30px] smDesk:grid-cols-itemDesk">
        {newDesignData.map((item) => {
          return <DesignItemCard {...item} key={item?.id} />;
        })}
      </section>
    );
}

export default DesignItemsContainer