import React, { useContext, useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import { DarkModeContext } from "../../../Provider/DarkMoodProvider";
import img from '../../../assets/faculty.jpg'
const FAQSection = () => {
  const { user, loading } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const [ques, setQues] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/faqs`).then((data) => setQues(data.data));
  }, [loading, axios]);
  // console.log(ques);
  return (
    <div className="container">
      <Title className="mx-auto" heading="Frequently asked questions"></Title>
      <div className="lg:flex lg:flex-row
             gap-20 flex flex-col-reverse">
      <div className="w-full px-4">
        <div className={`mx-auto w-full max-w-md rounded-2xl ${darkMode ? "bg-accent text-gray-100": "bg-white"} p-2`}>
        {ques?.map((q, i)=>(
              <Disclosure key={i+1}>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between rounded-lg
                  ${darkMode ? "bg-accent hover:bg-gray-950 text-gray-100 ": "bg-white text-gray-900 hover:bg-gray-200"}
            px-4 py-5 text-left text-lg font-medium  focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75`}>
                    <span>{i+1}. {q?.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className={`px-4 pt-4 pb-2 rounded-lg  ${darkMode ? "bg-gray-800  text-gray-100": "bg-gray-200 text-base"}`}>
                   {q?.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
        ))}
         
        </div>
      </div>
      <div>
        <figure className="lg:w-[700px] rounded-lg mt-10">
            <img className="lg:w-[700px] rounded-lg" src={img} alt="" />
        </figure>
      </div>
      </div>
    </div>
  );
};

export default FAQSection;
