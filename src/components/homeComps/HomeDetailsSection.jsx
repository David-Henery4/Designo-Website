import homeDetailsData from "../../data/homeDetailsData";

const HomeDetailsSection = () => {
  //
  return (
    <section className="col-start-2 col-end-12 flex flex-col gap-20">
      {homeDetailsData.map((dets) => {
        return (
          <div key={dets?.id} className="w-full text-darkGrey flex flex-col justify-center items-center gap-12">
            <dets.img/>
            <div className="text-center grid gap-8">
              <h3 className="text-xl tracking-[5px] leading-head3 font-medium">
                {dets?.title}
              </h3>
              <p className="text-base leading-body font-normal">
                {dets?.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomeDetailsSection;