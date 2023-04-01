import {worldClassDesk, worldClassMob, worldClassTab, LeafBgPattern} from "../../assets"

const WorldClassSection = () => {
  return (
    <section
      className="relative col-start-1 col-end-13 -mt-20 bg-baige sm:col-start-2 sm:col-end-12 sm:rounded-2xl sm:m-0 smDesk:flex smDesk:justify-center smDesk:items-center
    "
    >
      <LeafBgPattern className="hidden pointer-events-none absolute -z-10 -top-[285px] lg:block lg:-left-10 lgDesk:-left-[165px]" />
      <div className="w-full overflow-hidden sm:rounded-t-2xl smDesk:rounded-l-2xl smDesk:rounded-r-none smDesk:h-full smDesk:flex-[1]">
        <picture className="w-full">
          <source srcSet={worldClassDesk} media="(min-width:58.12em)" />
          <source srcSet={worldClassTab} media="(min-width:30.31em)" />
          <img
            className="w-full smDesk:object-cover smDesk:h-full"
            srcSet={worldClassMob}
            alt="Abou us page hero image"
          />
        </picture>
      </div>
      <div className="text-center px-6 py-20 sm:py-16 sm:px-14 smDesk:text-left smDesk:flex-[1] smDesk:px-11 smDesk:py-[104px] large:px-24 large:py-[154px]">
        <h2 className="mb-6 text-head1Mob leading-9 font-medium text-peach xsm:text-head2 xsm:leading-head2">
          World-class talent
        </h2>
        <p className="text-bodyMob leading-bodyMob font-light text-darkGrey xsm:text-base xsm:leading-body">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
          <br />
          <br />
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
  );
}

export default WorldClassSection