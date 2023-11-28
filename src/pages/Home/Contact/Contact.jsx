import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { HiOutlineMailOpen } from "react-icons/hi";
import bg from "../../../../public/contact-bg.jpg";
import ContactForm from "../../../component/ContactForm/ContactForm";
import Aos from "aos";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container w-11/12 rounded-lg text-gray-100">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-neutral-content">
          <div className="lg:w-[1000px] my-10">
            <h1 className="mb-10 text-center text-3xl lg:text-5xl font-bold pb-5">
              Say Hello
            </h1>
            <div
              className="lg:flex lg:flex-row
             gap-20  hidden "
            >
              <div
                className="w-full lg:w-[500px]"
                 data-aos="fade-up-right"
              >
                <ContactForm />
              </div>
              <div
                className="w-full lg:w-[500px]  space-y-3 lg:mt-16"
                data-aos="fade-up-left"
              >
                <h1 className="font-bold text-2xl ">Contact Details</h1>
                <p>
                  our program includes hands-on workshops, engaging photo walks,
                  and exciting group projects. These activities will provide
                  practical opportunities for you to apply your knowledge and
                  develop a diverse and impressive portfolio of stunning
                  photographs.
                </p>
                <p className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1" />
                  55, Banani Dhaka, Bangladesh
                </p>
                <p className="flex gap-3">
                  <GiRotaryPhone className="mt-1" />
                  +9230574888
                </p>
                <p className="flex gap-3">
                  <HiOutlineMailOpen className="mt-1" />
                  lenscrafter@gmail.com
                </p>
              </div>
            </div>

            <div
              className="
             gap-20 flex flex-col-reverse lg:hidden"
            >
              <div className="w-full lg:w-[500px]" data-aos="fade-up">
                <ContactForm />
              </div>
              <div
                className="w-full lg:w-[500px]  space-y-3 lg:mt-16"
                data-aos="fade-down"
              >
                <h1 className="font-bold text-2xl ">Contact Details</h1>
                <p>
                  our program includes hands-on workshops, engaging photo walks,
                  and exciting group projects. These activities will provide
                  practical opportunities for you to apply your knowledge and
                  develop a diverse and impressive portfolio of stunning
                  photographs.
                </p>
                <p className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1" />
                  55, Banani Dhaka, Bangladesh
                </p>
                <p className="flex gap-3">
                  <GiRotaryPhone className="mt-1" />
                  +9230574888
                </p>
                <p className="flex gap-3">
                  <HiOutlineMailOpen className="mt-1" />
                  lenscrafter@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
