import React from "react";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { motion } from "framer-motion";
const Socialnew = () => {
  return (
    <motion.div 
    initial={{ y: -200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}

    className="fixed left-4 top-[30%]">
      <ul className="flex gap-5 flex-col ">
        {SocialsData.map((item) => {
          return (
            <motion.li
              whileHover={{ scale: 2.1 }}
              whileTap={{ scale: 0.9 }}
              className="group"
              key={item.id}
            >
              <div className="text-[gray] hidden  group-hover:flex gap-3  ">
                <span className="flex absolute mt-1  ml-[2.2rem] text-sm ">
                  {item.title}
                </span>
              </div>
              <Link
                target="_blank"
                className="group hover:text-[white] text-[white] text-xl   md:text-3xl"
                href={item.path}
              >
                {item.icon}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Socialnew;
const SocialsData = [
  {
    id: 1,
    icon: <BsGithub />,
    title: "Github",
    path: "https://github.com/swasti-sundar",
    color: "text-[#00abf0]",
  },
  {
    id: 2,
    icon: <BsLinkedin />,
    title: "Linkedin",
    path: "",
    color: "text-[#00abf0]",
  },
  {
    id: 3,
    icon: <BsInstagram />,
    title: "Instagram",
    path: "",
    color: "text-[#00abf0]",
  },
  {
    id: 4,
    icon: <BsFacebook />,
    title: "Facebook",
    path: "",
    color: "text-[#00abf0]",
  },
  {
    id: 5,
    icon: <BsTwitter />,
    title: "Twitter",
    path: "",
    color: "text-[#00abf0]",
  },
  {
    id: 6,
    icon: <BsYoutube />,
    title: "Youtube",
    path: "",
  },
];
