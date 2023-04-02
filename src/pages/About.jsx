import {AboutHero, RealDealSection, WorldClassSection} from "../components/aboutComps"
import {LocationOptionsSection} from "../components"


const About = () => {
  return (
    <div className="w-full col-start-1 col-end-13 max-w-[1440px] mx-auto grid grid-cols-main gap-y-[120px] mb-[120px] md:grid-cols-mainTab smDesk:gap-y-40 smDesk:mb-40 lgDesk:grid-cols-mainLgDesk">
      <AboutHero />
      <WorldClassSection />
      <LocationOptionsSection />
      <RealDealSection />
    </div>
  );
}

export default About