import React, { useState } from "react";
import emailjs from "emailjs-com";
import TypingAnimation from "../common/TypingAnimation";
// import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// const textToType = "Hello, I'm a typing animation!";

const Result = () => {
  return (
    <div>
      <br />
      <TypingAnimation
        text="Your Message has been successfully sent. I will contact you soon!"
        elementType="p"
        typingSpeed={50}
        style={{
          fontFamily: "Brice-Black",
          fontSize: "30px",
          color: "#ef5474",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      />
    </div>
  );
};
function ContactForm({ props }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ux433e8",
        "template_2nll9p6",
        e.target,
        "AOZY_3b_X5v6kfTLO"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log(showresult(true));
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input
          type="text"
          name="fullname"
          placeholder="Your Name"
          required
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="rn-form-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="rn-form-group">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="rn-form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="rn-form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          required
          data-aos="fade-right"
          data-aos-duration="1000"
        ></textarea>
      </div>

      <div className="rn-form-group">
        <br />
        <button
          style={{ color: "#EF5474" }}
          className="rn-button-style--2 btn-solid"
          type="submit"
          value="submit"
          name="submit"
          id="mc-embedded-subscribe"
        >
          Submit Now
        </button>
      </div>

      <div className="rn-form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
