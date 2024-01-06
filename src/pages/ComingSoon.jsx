import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
const ComingSoon = () => {
  return (
    <>
      <div
        className="flex h-screen justify-center items-center 
      bg-gradient-to-r from-violet-500 to-fuchsia-500 flex-col space-y-9
      "
      >
        <h1 className=" md:text-7xl  text-3xl font-bold font-serif">Coming Very Soon</h1>
        <div>
          <ul className="flex text-3xl space-x-8">
            <li>
              <a
                href="https://instagram.com/swasti_sundar_/"
                target="_blank"
                className="hover:text-white  transition duration-300 ease-in-out"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/swasti-sundar"
                className="hover:text-white  transition duration-300 ease-in-out"
                target="_blank"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:swastipradhan044@gmail.com"
                className="hover:text-white  transition duration-300 ease-in-out"
                target="_blank"
              >
                <BsWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/swasti-sundar-pradhan-980087224/"
                className="hover:text-white  transition duration-300 ease-in-out"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
