import { FriendlyIllustration, PassionateIllustration, ResourcefulIllustration, } from "../assets";
import {Header, ProjectsSection, HomeDetailsSection} from "../components/homeComps"

const Home = () => {
  return (
    <div className="w-full col-start-1 col-end-13 max-w-[1440px] mx-auto grid grid-cols-main gap-y-[120px] mb-[120px] md:grid-cols-mainTab smDesk:gap-y-40 smDesk:mb-40 lgDesk:grid-cols-mainLgDesk">
      <Header />
      <ProjectsSection />
      <HomeDetailsSection />
    </div>
  );
};

export default Home;
