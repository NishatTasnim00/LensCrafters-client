import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_20se7im`,
        "template_rx7s8pk",
        form.current,
        "mp8T29xYf-HKh_nAi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-control group">
          <label className="label block"></label>
          <input
            className="input bg-black bg-opacity-70"
            type="text"
            placeholder="Your Name"
            name="user_name"
          />
        </div>
        <div className="form-control">
          <label className="label block"></label>
          <input
            className="input bg-black bg-opacity-70"
            type="email"
            placeholder="E-Mail"
            name="user_email"
          />
        </div>
        <div className="form-control">
          <label className="label block"></label>
          <input
            className="input bg-black bg-opacity-70"
            type="subject"
            placeholder="Subject"
            name="subject"
          />
        </div>

        <div className="form-control">
          <label className="label block"></label>
          <textarea
            className="input bg-black bg-opacity-70 min-h-[200px]"
            type="text"
            placeholder="Your Message"
            name="message"
          />
        </div>
        <div className="flex justify-center pt-5">
          <button className="btn  btn-primary w-full " type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
