import homeDetailsData from "../../data/homeDetailsData";
import {SmallCircleBgPattern, LeafBgPattern} from "../../assets"

const HomeDetailsSection = () => {
  //
  return (
    <section className="relative col-start-2 col-end-12 flex flex-col gap-20 items-center smDesk:flex-row smDesk:gap-[30px] smDesk:items-start">
      {homeDetailsData.map((dets) => {
        return (
          <div
            key={dets?.id}
            className="w-full text-darkGrey flex flex-col justify-center items-center gap-12 smTab:flex-row smDesk:flex-col smDesk:flex-1"
          >
            <div className="relative flex-1">
              <SmallCircleBgPattern className="absolute top-0 left-0"/>
              <dets.img className="relative z-10"/>
            </div>
            <div className="text-center grid gap-8 smTab:flex-[2] smTab:text-left smDesk:text-center">
              <h3 className="text-xl tracking-[5px] leading-head3 font-medium">
                {dets?.title}
              </h3>
              <p className="text-base leading-body font-normal max-w-sm smTab:max-w-none">
                {dets?.desc}
              </p>
            </div>
          </div>
        );
      })}
      <LeafBgPattern className="absolute hidden lg:block lg:top-[124px] lg:rotate-180 lg:-z-10 lg:-right-10 lgDesk:-right-[165px]"/>
    </section>
  );
};

export default HomeDetailsSection;
