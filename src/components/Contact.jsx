import React from "react";
// import { FaRegHandshake } from "react-icons/fa";
import {LiaHandshakeSolid} from "react-icons/lia"
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="">
      <Link
        to="#_"
        class="px-8 py-4 text-xl font-semibold text-center
         text-white transition duration-300 rounded-lg
          hover:from-purple-600 hover:to-pink-600 
          ease bg-gradient-to-br from-purple-500 to-pink-500
           md:w-auto flex justify-center items-center gap-1"      >
       <LiaHandshakeSolid />
        Let's connect
      </Link>
    </div>
  );
};

export default Contact;
