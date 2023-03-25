import navigationData from "../data/navigationData";
import {
  logoLight,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  PinterestIcon,
  InstagramIcon,
} from "../assets";

const Footer = () => {
  return (
    <footer className="grid grid-cols-main col-start-1 col-end-13 md:grid-cols-mainTab lgDesk:grid-cols-mainLgDesk">
      {/* CTA */}
      <section className="col-start-2 col-end-12 row-start-1 row-end-7 z-10 w-full px-6 py-16 rounded-2xl text-white bg-peach flex flex-col justify-center items-center gap-8 md:py-14 md:row-end-5 smDesk:flex-row smDesk:justify-between smDesk:px-12 lg:py-11 lg:px-16 desk:px-24">
        <div className="w-full text-center grid gap-2 xsm:gap-6 justify-items-center smDesk:w-auto smDesk:justify-items-start smDesk:text-left">
          <h3 className="text-head1Mob leading-9 font-medium max-w-xs xsm:text-head2 xsm:leading-10">
            Let’s talk about your project
          </h3>
          <p className="text-bodyMob leading-bodyMob max-w-[420px] font-light xsm:text-base xsm:leading-body">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className="w-40 h-14 bg-white text-black rounded-lg tracking-btn font-medium hover:bg-lightPeach hover:text-white active:text-black active:bg-white">
          GET IN TOUCH
        </button>
      </section>

      {/* FOOTER CONTENT */}
      <section className="col-start-1 col-end-13 row-start-4 row-end-[13] w-full bg-black md:px-10 lgDesk:px-[165px]">
        <div className="text-white pt-64 px-6 pb-16 grid gap-10 justify-center md:pt-40 md:grid-cols-footerTab smDesk:pt-36">
          <img
            className="pb-8 -mb-2 border-b border-b-white/10 md:border-none md:col-start-1 md:col-end-2 md:p-0"
            src={logoLight}
            alt="Light version of the 'DESIGNO' logo used in the footer of the site"
          />
          <ul className="w-full text-sm font-normal leading-[14px] tracking-[2px] flex flex-col justify-center items-center gap-8 md:col-start-2 md:col-end-4 md:flex-row md:self-end md:justify-end">
            {navigationData.map((navDta) => {
              return (
                <li key={navDta?.id}>
                  <a href={navDta?.link}>{navDta?.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="hidden col-start-1 col-end-4 h-[1px] bg-white/10 md:block"></div>
          {/* Address */}
          <div className="w-full text-sm text-center text-white/50 leading-body md:text-left">
            <h4 className="font-bold">Designo Central Office</h4>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          {/* Contact details*/}
          <div className="w-full text-sm text-center text-white/50 leading-body md:text-left">
            <h4 className="font-bold">Contact Us (Central Office)</h4>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          {/* SOCIALS ICON LINKS */}
          <ul className="w-full flex justify-center items-center gap-4 md:justify-end">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
