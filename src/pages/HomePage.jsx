import React from "react";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Socials from "../components/Socials";
const HomePage = () => {
  return (
    <>
      <div
        className="bg-[url('/bg-best.svg')] h-screen w-screen 
      
      bg-cover bg-center  flex justify-between flex-col-reverse md:flex-row "
      >
        <div className="left w-full h-full flex flex-col md:justify-center items-center">
          <div className="flex flex-col   text-white  justify-start items-center  ">
            <div className="flex justify-start bg-/black w-full items-start">
              <span className="text-[3em]">
              Hi  I'm
              </span>
            </div>
            <div>
              <span className="text-[5em]">Swasti Sundar</span>
              
            </div>
            <div>From india</div>
            <div>
              <span className="text-gray-400 text-[2rem] ">
                Full Stack Web Devloper{" "}
              </span>
            </div>
          </div>
          <div className="text-white text-xl mt-10 gap-8  flex ">
            <Resume />
            <Contact />
          </div>
        </div>
        <div className="w-full flex items-end mt-20">
          <img
            src="/Group1.png"
            className=" h-full bg-cover bg-center   "
            alt=""
          />
        </div>
      </div>
      <div className="hidden md:flex">
        <Socials />
      </div>
    </>
  );
};

export default HomePage;
