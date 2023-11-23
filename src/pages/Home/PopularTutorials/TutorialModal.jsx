import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ReactPlayer from "react-player";

const TutorialModal = ({ isOpen, setIsOpen, videoUrl }) => {
  return (
    <>
      <div className="relative">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 lg:bg-black/25 bg-black" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              
              <div className="flex h-screen lg:justify-end  lg:items-end justify-center items-center ">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-accent p-6 text-left align-bottom shadow-xl transition-all">
                    <button onClick={()=>setIsOpen(false)}
                     className="absolute top-0 right-0 btn btn-circle text-red-900 bg-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <ReactPlayer
                      width="100%"
                    //   height="400px"
                      controls={true}
                      playing
                      url={videoUrl}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default TutorialModal;
