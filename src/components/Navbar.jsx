import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { HiAcademicCap } from "react-icons/Hi";
import { GiSpiderWeb } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" flex z-50 mt-5 justify-center  items-center fixed   w-screen">
        <div className=" bg-transparent backdrop-blur-lg  h-[4.5rem] w-[90%] flex justify-between items-center gap-5  border border-[white] rounded-full text-black mx-auto">
          <div className="flex gap-6 ml-5 mr-2  ">
            <div className="logo text-white md:text-2xl ">
              <div className="logo cursor-pointer flex justify-center items-center text-white md:text-[2rem]">
                <span className="font-Adlom">
                  <i>{"<Swasti"}</i>
                  <span className="bg-white">
                    <hr className="border border-white" />
                  </span>
                </span>
                <span className="to-text-[#00abf0]">
                  <GiSpiderWeb className="" />
                </span>
                <span className="text-[#00abf0] font-roboto">
                  <i>{"Sundar/>"}</i>
                  <hr className="border border-[#00abf0]" />
                </span>
              </div>
            </div>
            <div className="services md:flex ml-12 hidden ">
              <ul className="flex space-x-16 justify-center items-center ">
                {NavbarData.map((val) => {
                  return (
                    <li
                      key={val?.id}
                      className="cursor-pointer no-underline transition duration-300 group space-y-1"
                    >
                      <NavLink
                        to={val?.path}
                        activeClassName="text-[#00abf0]"
                        className={({ isActive }) => {
                          return isActive ? "text-[#00abf0]" : "text-white";
                        }}
                      >
                        {val?.title}
                      </NavLink>
                      <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 pt-0.5 bg-white"></span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex gap-5 justify-center items-center ">
            <div className="light-mode text-white hidden md:flex">
              Light Mode
            </div>
            <div className="contact hidden md:flex text-white mr-4 ml-2 borer rounded-full p-4 bg-[#330A58] ">
              <Link href={"contact"}>Contact Me</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const NavbarData = [
  {
    id: 1,
    icon: <AiOutlineHome />,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    icon: <FaAward />,
    title: "Skills",
    path: "/Skills",
  },
  {
    id: 3,
    icon: <HiAcademicCap />,
    title: "Projects",
    path: "/Projects",
  },
  {
    id: 4,
    icon: <IoIosContact />,
    title: "About",
    path: "/About",
  },
];
