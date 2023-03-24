import { headerImg, headerImgCropped } from "../../assets";

const Header = () => {
  return (
    <header className="w-full text-center bg-peach text-white col-start-1 col-end-13">
      {/* TEXT */}
      <div className="px-6 pt-20 flex flex-col justify-center items-center gap-4 xsm:gap-9">
        <h1 className="text-head1Mob leading-9 font-medium max-w-[489px] xsm:text-5xl xsm:leading-head1">
          Award-winning custom designs and digital branding solutions
        </h1>
        <div className="grid justify-items-center gap-6">
          <p className="text-bodyMob font-light leading-bodyMob max-w-[433px] xsm:text-base xsm:leading-head3">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="w-40 h-14 bg-white text-black rounded-lg tracking-btn font-medium hover:bg-lightPeach hover:text-white active:text-black active:bg-white">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* IMG */}
      <div className="h-[345px] overflow-hidden">
        <img
          className="h-[145%] mx-auto"
          src={headerImgCropped}
          alt="Large Phone displayed on the hero section"
        />
      </div>
    </header>
  );
};

export default Header;
