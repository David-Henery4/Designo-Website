import {realDealDesk, realDealMob, realDealTab} from "../../assets"

const RealDealSection = () => {
  return (
    <section
      className="col-start-1 col-end-13 bg-baige sm:col-start-2 sm:col-end-12 sm:rounded-2xl overflow-hidden smDesk:flex smDesk:justify-center smDesk:items-center smDesk:flex-row-reverse
    "
    >
      <div className="w-full smDesk:h-full smDesk:flex-[1]">
        <picture className="w-full">
          <source srcSet={realDealDesk} media="(min-width:58.12em)" />
          <source srcSet={realDealTab} media="(min-width:30.31em)" />
          <img
            className="w-full smDesk:object-cover smDesk:h-full"
            srcSet={realDealMob}
            alt="Abou us page hero image"
          />
        </picture>
      </div>
      <div className="text-center px-6 py-20 sm:py-16 sm:px-14 smDesk:text-left smDesk:flex-[1] smDesk:px-11 smDesk:py-[104px] large:px-24 large:py-[154px]">
        <h2 className="mb-6 text-head1Mob leading-9 font-medium text-peach xsm:text-head2 xsm:leading-head2">
          The real deal
        </h2>
        <p className="text-bodyMob leading-bodyMob font-light text-darkGrey xsm:text-base xsm:leading-body">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
          <br />
          <br />
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
    </section>
  );
}

export default RealDealSection