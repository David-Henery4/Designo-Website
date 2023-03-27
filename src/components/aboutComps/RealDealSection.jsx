import {realDealDesk, realDealMob, realDealTab} from "../../assets"

const RealDealSection = () => {
  return (
    <section
      className="col-start-1 col-end-13 bg-baige
    "
    >
      <div className="w-full">
        <picture className="w-full">
          {/* <source srcSet={aboutHeroTab} media="(min-width:24.47em)" /> */}
          <source srcSet="" media="" />
          <img
            className="w-full"
            srcSet={realDealMob}
            alt="Abou us page hero image"
          />
        </picture>
      </div>
      <div className="text-center px-6 py-20">
        <h2 className="mb-6 text-head1Mob leading-9 font-medium text-peach">
          The real deal
        </h2>
        <p className="text-bodyMob leading-bodyMob font-light text-darkGrey">
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