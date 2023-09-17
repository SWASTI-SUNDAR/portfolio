import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
     whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    
    className=" mx-auto sm:mx-0 ">
      <a
        href="/Swasti_Sundar_Resume.pdf"
        target="_blank"
        className="md:px-8 py-2 px-3  md:py-4 text-xl font-semibold text-center
         text-white transition duration-300 rounded-lg
          hover:from-purple-600 hover:to-pink-600 
          ease bg-gradient-to-br from-purple-500 to-pink-500
           md:w-auto  flex justify-center items-center gap-1"
      >
        <IoArrowDownCircleOutline />
        Resume
      </a>
    </motion.div>
  );
};

export default Resume;
