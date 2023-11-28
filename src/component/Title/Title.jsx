import React, { useEffect } from "react";
import Aos from "aos";

const Title = ({ heading, subheading }) => {
   useEffect(() => {
   Aos.init({ duration: 1000 });
  }, []);
  return (
    <div 
    data-aos="fade-up"
    >
      <div className="text-center lg:py-12 dark-text-base-100 mt-5 uppercase">
        <h1 className="text-3xl lg:text-5xl font-bold pb-5">{heading}</h1>
        <p className="font-bold text-gray-600 dark-text-gray-300 capitalize">
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default Title;
