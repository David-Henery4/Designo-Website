import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import navigationData from "../data/navigationData";
import socialIconsLinks from "../data/socialIconsLinks";
import {
  logoLight,
  CallToActionBgPattern,
} from "../assets";

const Footer = () => {
  const [isFooter, setIsFooter] = useState(false)
  const {pathname} = useLocation()
  //
  useEffect(() => {
    pathname === "/contact" ? setIsFooter(true) : setIsFooter(false)
  }, [pathname])
  //
  return (
    <footer
      className={`grid grid-cols-main col-start-1 col-end-13 md:grid-cols-mainTab lgDesk:grid-cols-mainLgDesk`}
    >
      {/* CTA */}
      <section
        className={`relative col-start-2 col-end-12 row-start-1 row-end-7 z-10 w-full px-6 py-16 mx-auto rounded-2xl text-white bg-peach flex flex-col justify-center items-center gap-8 overflow-hidden md:py-14 md:row-end-5  smDesk:flex-row smDesk:justify-between smDesk:px-12 lg:py-11 lg:px-16 desk:px-24 lgDesk:max-w-[1110px] ${
          isFooter ? "hidden" : "flex"
        }`}
      >
        <CallToActionBgPattern className="absolute -z-10 top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2" />
        <div className="w-full text-center grid gap-2 xsm:gap-6 justify-items-center smDesk:w-auto smDesk:justify-items-start smDesk:text-left">
          <h3 className="text-head1Mob leading-9 font-medium max-w-xs xsm:text-head2 xsm:leading-10">
            Let’s talk about your project
          </h3>
          <p className="text-bodyMob leading-bodyMob max-w-[420px] font-light xsm:text-base xsm:leading-body">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link to="/contact" className="w-40 h-14 grid place-items-center bg-white text-black rounded-lg tracking-btn font-medium hover:bg-lightPeach hover:text-white active:text-black active:bg-white">
          GET IN TOUCH
        </Link>
      </section>

      {/* FOOTER CONTENT */}
      <section className="col-start-1 col-end-13 row-start-4 row-end-[13] w-full bg-black">
        <div
          className={`text-white grid gap-10 justify-center mx-auto px-6 md:px-10 md:grid-cols-footerTab smDesk:max-w-[1440px]  lgDesk:px-[165px] ${
            isFooter
              ? "py-16 md:py-20 lgDesk:py-[72px]"
              : "pt-64  pb-16 md:pt-40 md:pb-20 smDesk:pt-36 lgDesk:pb-[72px]"
          }`}
        >
          <Link to="/">
            <img
              className="pb-8 -mb-2 border-b border-b-white/10 md:border-none md:col-start-1 md:col-end-2 md:p-0"
              src={logoLight}
              alt="Light version of the 'DESIGNO' logo used in the footer of the site"
            />
          </Link>
          <ul className="w-full text-sm font-normal leading-[14px] tracking-[2px] flex flex-col justify-center items-center gap-8 md:col-start-2 md:col-end-4 md:flex-row md:self-end md:justify-end">
            {navigationData.map((navDta) => {
              return (
                <li
                  key={navDta?.id}
                  className="hover:border-b hover:border-b-white"
                >
                  <Link to={navDta?.link}>{navDta?.name}</Link>
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
            {socialIconsLinks?.map((iconLink) => {
              return (
                <li key={iconLink?.id}>
                  <Link to={iconLink?.link}>
                    {
                      <iconLink.icon className="fill-peach hover:fill-lightPeach" />
                    }
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
