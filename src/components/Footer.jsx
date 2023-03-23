import { logoLight, FacebookIcon, TwitterIcon, YoutubeIcon, PinterestIcon, InstagramIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="grid grid-cols-main col-start-1 col-end-13">
      {/* CTA */}
      <section className="col-start-2 col-end-12 row-start-1 row-end-7 z-10 w-full px-6 py-16 rounded-2xl text-white bg-peach flex flex-col justify-center items-center gap-8">
        <div className="w-full text-center grid gap-2">
          <h3 className="text-head1Mob leading-9 font-medium">
            Let’s talk about your project
          </h3>
          <p className="text-bodyMob leading-bodyMob font-light">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className="w-40 h-14 bg-white text-black rounded-lg tracking-btn font-medium hover:bg-lightPeach hover:text-white active:text-black active:bg-white">
          GET IN TOUCH
        </button>
      </section>

      {/* FOOTER CONTENT */}
      <section className="col-start-1 col-end-13 row-start-4 row-end-[13] w-full bg-black">
        <div className="text-white pt-64 px-6 pb-16 grid gap-10 justify-center">
          <img
            className="pb-8 -mb-2 border-b border-b-white/10"
            src={logoLight}
            alt="Light version of the 'DESIGNO' logo used in the footer of the site"
          />
          <ul className="w-full text-sm font-normal leading-[14px] tracking-[2px] flex flex-col justify-center items-center gap-8">
            <li>
              <a href="#">OUR COMPANY</a>
            </li>
            <li>
              <a href="#">LOCATIONS</a>
            </li>
            <li>
              <a href="#">CONTACTS</a>
            </li>
          </ul>

          {/* Address */}
          <div className="w-full text-center text-white/50 leading-body">
            <h4 className="font-bold">Designo Central Office</h4>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          {/* Contact details*/}
          <div className="w-full text-center text-white/50 leading-body">
            <h4 className="font-bold">Contact Us (Central Office)</h4>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          {/* SOCIALS ICON LINKS */}
          <div className="w-full flex justify-center items-center gap-4">
            <FacebookIcon/>
            <YoutubeIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
            <InstagramIcon/>
          </div>

        </div>
      </section>
    </footer>
  );
};

export default Footer;
