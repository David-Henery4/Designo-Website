import { aboutHeroMob, aboutHeroDesk, aboutHeroTab } from "../../assets";

const AboutHero = () => {
  return (
    <section className="w-full col-start-1 col-end-13 text-white bg-peach overflow-hidden sm:col-start-2 sm:col-end-12 sm:rounded-2xl smDesk:flex smDesk:flex-row-reverse smDesk:justify-center smDesk:items-center">
      <div className="w-full smDesk:flex-[1] smDesk:h-full">
        <picture className="w-full">
          <source srcSet={aboutHeroDesk} media="(min-width:58.12em)" />
          <source srcSet={aboutHeroTab} media="(min-width:30.31em)" />
          <img
            className="w-full smDesk:object-cover smDesk:h-full"
            srcSet={aboutHeroMob}
            alt="Abou us page hero image"
          />
        </picture>
      </div>
      <div className="text-center px-6 py-20 sm:py-16 sm:px-14 smDesk:flex-[1] smDesk:text-left smDesk:py-28 smDesk:pr-16 smDesk:pl-20 large:py-[135px] large:pl-24 large:pr-20">
        <h2 className="mb-6 text-head1Mob leading-9 font-medium xsm:text-5xl xsm:leading-head1 xsm:mb-8">
          About Us
        </h2>
        <p className="text-bodyMob leading-bodyMob font-light xsm:text-base xsm:leading-body">
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
