import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../Provider/DarkMoodProvider";
import Aos from "aos";

const PopularClsCard = ({ classItem }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { _id, image, name, instructorName, availableSeats, fees, enrolled } =
    classItem;
   useEffect(() => {
   Aos.init({ duration: 500});
  }, []);
  return (
    <div 
    data-aos="fade-down" data-aos-anchor-placement="center-bottom"
    >
      <div
        className={`card w-full h-[350px] rounded-lg mt-10 text-center mx-auto  ${
          darkMode ? "bg-gray-800" : " "
        }`}
      >
        <figure className="w-full h-[300px]">
          <img
            src={image}
            alt="photo"
            className="rounded-lg w-full h-full object-cover"
          />
        </figure>

        <h2 className="text-tag-dark pt-2">{name}</h2>
      </div>
    </div>
  );
};

export default PopularClsCard;
