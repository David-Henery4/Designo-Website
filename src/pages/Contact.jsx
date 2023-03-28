import {ContactForm} from "../components/contactComps"

const Contact = () => {
  return (
    <>
      <section className="col-start-1 col-end-13">
        <div>
          <h2>Contact Us</h2>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        {/**/}
        <ContactForm/>
      </section>
    </>
  );
}

export default Contact