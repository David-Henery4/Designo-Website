import {ContactForm} from "../components/contactComps"
import {LocationOptionsSection} from "../components"

const Contact = () => {
  //
  return (
    <>
      <section className="col-start-1 col-end-13 flex flex-col justify-center items-center gap-12 bg-peach text-white px-6 py-[72px] sm:col-start-2 sm:col-end-12 sm:rounded-2xl sm:gap-10 sm:py-[71px] sm:px-14 smDesk:flex-row smDesk:py-14 large:px-24 large:gap-24">
        <div className="text-center grid gap-6 sm:text-left sm:gap-8 smDesk:flex-[1]">
          <h2 className="text-head1Mob leading-9 font-medium xsm:text-5xl xsm:leading-head1">Contact Us</h2>
          <p className="text-bodyMob leading-bodyMob xsm:text-base xsm:leading-body">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        {/**/}
        <ContactForm/>
      </section>
      <LocationOptionsSection/>
    </>
  );
}

export default Contact