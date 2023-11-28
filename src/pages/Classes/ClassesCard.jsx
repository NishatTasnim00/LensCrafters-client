import { useNavigate } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser";
import { toast } from "react-hot-toast";
import Aos from "aos";
import { useEffect } from "react";

const ClassesCard = ({ singleClass, handleBookClass }) => {
  const navigate = useNavigate();
  const { userData } = useGetUser();
  const { _id, image, name, instructorName, availableSeats, fees, enrolled } =
    singleClass;
  const handleNotUser = () => {
    toast.error("Login Please.");
    navigate("/login");
  };

  useEffect(() => {
   Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
    //  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
     >
      <div
        className={`card  h-[500px]  shadow-lg rounded-lg mt-10 ${
          userData && availableSeats < 1 ? "bg-red-800" : "bg-gray-400"
        }`}
      >
        <figure className="h-[700px] w-full rounded-t-lg">
          <img
            src={image}
            alt="toys"
            className="rounded-t-lg h-[700px] w-full object-contain"
          />
        </figure>
        <div className="flex flex-col text-left px-10 py-5  space-y-1">
          <h2 className="text-tag">
            <span className="font-light ">Course :</span> {name}
          </h2>
          <h2 className="text-tag">
            <span className="font-light ">Instructor : </span>
            {instructorName}
          </h2>
          <h2 className="text-tag">
            <span className="font-light ">Available Seats : </span>
            {availableSeats}
          </h2>

          <p className="text-price">
            <span>Cost : </span>${fees}
          </p>
        </div>
        <div className="w-full justify-end">
          <button
            disabled={
              userData?.role === "admin" ||
              userData?.role === "instructor" ||
              availableSeats <= 0
            }
            onClick={() => {
              !userData.role
                ? handleNotUser()
                : handleBookClass(userData._id, _id);
            }}
            className={`btn btn-primary btn-block rounded-b-lg rounded-none cursor-pointer border-none bg-gray-950 text-white`}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
