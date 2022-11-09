import React from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Navigation = ({
  toggleColorMode,
  colorMode,
  menuHandler,
  sideNav,
}) => {
  return (
    <div className=" bg-white/5 backdrop-blur-md">
      <div
        className={`${
          !colorMode
            ? "bg-black/60 transition-all duration-500"
            : "bg-black transition-all duration-500"
        } items-center h-[40px] px-5 flex justify-between`}
      >
        <Link to="/">
          <h1 className="text-[1.5rem] font-bold text-white/70 md:text-[2rem] font ">
            WUUD
          </h1>
        </Link>
        <div className="flex justify-evenly">
          <ul className="hidden md:flex md:text-[13px] md:gap-5 lg:gap-7 lg:mr-10 xl:mr-20  font2 text-white/80 md:items-center">
            <Link to="/">
              {" "}
              <li className="hover:border hover:px-3 hover:transition-width hover:duration-500 cursor-pointer ">
                Home
              </li>
            </Link>
            {/* <Link to="/collection"> */}{" "}
            <li className=" hover:border hover:px-3 hover:transition-width hover:duration-500 cursor-pointer flex items-center relative">
              Collections
              <ul className=" nested-lists absolute">
                <li>chair</li>
                <li>chair</li>
                <li>chair</li>
                <li>chair</li>
                <li>chair</li>
              </ul>
            </li>
            {/* </Link> */}
            <Link to="/favorite">
              <li className="hover:border hover:px-3 hover:transition-width hover:duration-500 cursor-pointer ">
                Favorites
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:border hover:px-3 hover:transition-width hover:duration-500 cursor-pointer ">
                About
              </li>
            </Link>
            <Link to="/contact">
              {" "}
              <li className="hover:border hover:px-3 hover:transition-width hover:duration-500 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className=" text-xl text-white/70 flex items-center cursor-pointer md:pl-20 lg:pl-10"
            onClick={toggleColorMode}
          >
            {colorMode ? (
              <FiSun className={`${colorMode ? "text-white" : "text-white"}`} />
            ) : (
              <HiOutlineMoon />
            )}
          </div>
          <div
            className=" flex transition-all duration-500 font2 text-2xl items-center menu-hover hover:transition hover:duration-500 cursor-pointer pl-5 md:hidden text-white/60"
            onClick={menuHandler}
          >
            {sideNav ? (
              <div className="text-xl">
                <AiOutlineClose />
              </div>
            ) : (
              <HiMenu />
            )}
          </div>
        </div>
      </div>

      {sideNav && (
        <ul
          className=" text-white gap-5  w-full z-30  flex justify-center p-5  items-center flex-col font2 shadow  md:hidden"
          data-aos="fade-down"
        >
          <Link to="/">
            <li className="cursor-pointer  hover:ease-out hover:duration-700 bg-white/5  px-[300px] rounded-[40px] hover:bg-black/20 p-5">
              Home
            </li>
          </Link>
          <Link to="collection">
            <li className="cursor-pointer hover:ease-out hover:duration-700 bg-white/5  px-[270px] rounded-[40px] hover:bg-black/20  p-5">
              Collections
            </li>
          </Link>
          <Link to="favorite">
            <li className="cursor-pointer hover:ease-out hover:duration-700 bg-white/5  px-[280px] rounded-[40px] hover:bg-black/20  p-5">
              Favorites
            </li>
          </Link>
          <Link to="about">
            <li className="cursor-pointer hover:ease-out hover:duration-700 bg-white/5  px-[300px] rounded-[40px] hover:bg-black/20 p-5">
              About
            </li>
          </Link>
          <Link to="contact">
            <li className="cursor-pointer hover:ease-out hover:duration-700 bg-white/5  px-[290px] rounded-[40px] hover:bg-black/20  p-5">
              Contact
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};
