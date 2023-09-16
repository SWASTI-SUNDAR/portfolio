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
const Socialnew = () => {
  return (
    <div className="fixed left-4 top-[30%]">
      <ul className="flex gap-5 flex-col ">
        {SocialsData.map((item) => {
          return (
            <li className="group" key={item.id}>
              <div className="text-white hidden  group-hover:flex gap-3  ">
                <span className="flex absolute mt-1  -ml-[4.3rem] text-sm ">
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
            </li>
          );
        })}
      </ul>
    </div>
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