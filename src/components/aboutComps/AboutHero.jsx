import { aboutHeroMob, aboutHeroDesk, aboutHeroTab } from "../../assets";

const AboutHero = () => {
  return (
    <section className="w-full col-start-1 col-end-13 text-white bg-peach">
      <div className="w-full">
        <picture className="w-full">
          {/* <source srcSet={aboutHeroTab} media="(min-width:24.47em)" /> */}
          <source srcSet="" media="" />
          <img className="w-full" srcSet={aboutHeroMob} alt="Abou us page hero image" />
        </picture>
      </div>
      <div className="text-center px-6 py-20">
        <h2 className="mb-6 text-head1Mob leading-9 font-medium">About Us</h2>
        <p className="text-bodyMob leading-bodyMob font-light">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
