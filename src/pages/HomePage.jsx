import React from "react";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <>
      <div
        className="bg-[url('/bg-best.svg')] h-screen w-screen 
      
      bg-cover bg-center  flex justify-between flex-col-reverse md:flex-row "
      >
        <motion.div
        
        className="w-full h-4/5 mt-auto flex flex-col md:justify-center gap-12 md:gap-2  bg-/white ">
          <div className="flex justify-center flex-col items-center   ">
            <span className="text-gray-400 text-xl mt-12 md:mt-0 md:text-[2rem] ">
              Full Stack Web Devloper{" "}
            </span>
            <div className="flex md:flex-col gap-2 mt-8 md:mt-0">
              <span className="text-[1.9rem] md:text-[5rem]  font-serif text-white ">
                SWASTI
              </span>
              <span className=" text-[1.9rem]  md:text-[6rem] font-serif text-white ">
                SUNDAR
              </span>
            </div>
            <div className="text-white md:hidden ">
              <span>From India</span>
            </div>
          </div>

          <div className="flex md:flex-row justify-center md:mt-12 md:gap-5 ">
            <Resume />
            <Contact />
          </div>
        </motion.div>
        <div className="w-full   flex ">
          <img
            src="/Group1.png"
            className=" h-full md:pt-20 pt-32  pr-5 bg-cover bg-center   "
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
