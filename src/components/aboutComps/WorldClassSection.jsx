import {worldClassDesk, worldClassMob, worldClassTab} from "../../assets"

const WorldClassSection = () => {
  return (
    <section
      className="col-start-1 col-end-13 -mt-20 bg-baige
    "
    >
      <div className="w-full">
        <picture className="w-full">
          {/* <source srcSet={aboutHeroTab} media="(min-width:24.47em)" /> */}
          <source srcSet="" media="" />
          <img
            className="w-full"
            srcSet={worldClassMob}
            alt="Abou us page hero image"
          />
        </picture>
      </div>
      <div className="text-center px-6 py-20">
        <h2 className="mb-6 text-head1Mob leading-9 font-medium text-peach">
          About Us
        </h2>
        <p className="text-bodyMob leading-bodyMob font-light text-darkGrey">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms. 
          <br />
          <br />
          Our team is multi-disciplinary and we are not
          merely interested in form — content and meaning are just as important.
          We give great importance to craftsmanship, service, and prompt
          delivery. Clients have always been impressed with our high-quality
          outcomes that encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
  );
}

export default WorldClassSection