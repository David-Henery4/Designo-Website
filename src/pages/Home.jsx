import { appDesignImgMob, graphicDesignImgMob, webDesignImgMob } from "../assets";
import {Header} from "../components/homeComps"

const Home = () => {
  return (
    <>
      <Header/>
      <section className="w-full col-start-2 col-end-12">
        <div className="w-full">
          <img src={webDesignImgMob} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
