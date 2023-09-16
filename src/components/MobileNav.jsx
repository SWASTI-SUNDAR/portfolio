import React from "react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { HiAcademicCap } from "react-icons/Hi";
import { GiSpiderWeb } from "react-icons/gi";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="fixed sm:hidden flex bg-transparent w-screen justify-center items-center bottom-5   ">
      <div className="p-2 flex justify-center items-center border rounded-full  mx-auto ">
        <ul className="flex gap-5  ">
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className="text-white text-2xl  p-2 rounded-full">
                <Link to={item.path} className="">
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
const NavbarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    icon: <HiAcademicCap />,
  },
  {
    id: 3,
    title: "Skills",
    path: "/skills",
    icon: <FaAward />,
  },
  {
    id: 4,
    title: "Projects",
    path: "/projects",
    icon: <GiSpiderWeb />,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    icon: <IoIosContact />,
  },
];
