import React, { useContext } from "react";
import { DarkModeContext } from "../../../Provider/DarkMoodProvider";
import { useEffect } from "react";
import Aos from "aos";
const PopularInstructorCard = ({ instructor, hello }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { photo, name, email } = instructor;
   useEffect(() => {
   Aos.init({ duration: 500});
  }, []);
  return (
    <div 
    data-aos="fade-down"
    >
      <div className="card w-full mx-auto  shadow-lg rounded-lg mt-10 text-gray-300 relative">
        <figure className="h-[400px] w-full rounded-lg shadow-lg">
          <img
            className="h-[400px] w-full rounded-lg object-cover"
            src={photo}
            alt="user"
          />
        </figure>
        <div className="h-[400px] w-full rounded-lg card-body  absolute top-0 bg-black opacity-0 hover:opacity-80">
          <div className="h-[400px] w-full rounded-lg flex justify-center items-center">
            <div>
              <h2 className="font-extrabold text-3xl">{name}</h2>
              <p className="text-base opacity-60 text-center">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
