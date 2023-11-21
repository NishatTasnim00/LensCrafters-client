import Aos from "aos";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";

const PopularTutorialsCard = ({ tutorial }) => {
  const { id, tutorialName, thumbnail, videoUrl, creator, publishDate } =
    tutorial;
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      className=" "
    >
      <div className="card w-full bg-accent shadow-xl  duration-150 rounded-lg hover:-translate-y-1 ">
        <figure className="relative">
          <img className="w-full" src={thumbnail} alt="tutorial" />
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="flex justify-center items-center h-full w-full">
            
              <motion.button
                // onClick={() => navigate("/player", { state: videoUrl })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="   bg-transparent text-accent hover:text-gray-400 hover:scale-125 ts"
              >
                <FaPlayCircle size={40} className="bg-white rounded-full" bg-red-500/>
              </motion.button>
            </div>
          </div>
        </figure>
        <div className="px-3 py-3 space-y-3 ">
          <div className="flex justify-between text-gray-400">
            <div className="flex gap-2 ">
              <IoPersonCircle size={22} />
              <p className="-mt-[2px]">{creator}</p>
            </div>
            <p className=""> {publishDate}</p>
          </div>
          <h2 className="text-lg font-semibold text-gray-300">
            {tutorialName}
          </h2>

          
        </div>
      </div>
    </div>
  );
};
export default PopularTutorialsCard;
