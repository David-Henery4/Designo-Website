import { headerImg, headerImgCropped } from "../../assets";

const Header = () => {
  return (
    <header className="w-full text-center bg-peach text-white col-start-1 col-end-13 flex flex-col justify-center items-center pt-20 overflow-hidden px-6 sm:col-start-2 sm:col-end-12 sm:rounded-2xl lg:flex-row lg:py-36 lg:px-16 lg:justify-between desk:px-24">
      {/* TEXT */}
      <div className="flex flex-col justify-center items-center gap-4 xsm:gap-9 lg:flex-[2] lg:items-start lg:text-left lg:gap-10">
        <h1 className="text-head1Mob leading-9 font-medium max-w-[489px] xsm:text-5xl xsm:leading-head1">
          Award-winning custom designs and digital branding solutions
        </h1>
        <div className="grid justify-items-center gap-6 lg:justify-items-start lg:gap-10">
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
      <div className="relative w-full grid place-items-center lg:flex-[1] lg:h-full">
        <div className="relative h-[430px] w-[215%] max-w-[655px] lg:h-full lg:w-[250%] lg:max-w-[630px] lg:top-[5px]">
          <img
            className="absolute w-full top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={headerImg}
            alt="Large Phone displayed on the hero section"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
