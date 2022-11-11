import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Navigation = ({
  toggleColorMode,
  colorMode,
  hideNav,
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
            <li className="  hover:px-3 hover:transition-width hover:duration-500 cursor-pointer flex items-center relative parent-link">
              Collections
              <ul className=" nested-lists absolute bg-black text-white ">
                <li>chair</li>
                <li>chair</li>
                <li>chair</li>
                <li className=" text-sm">Foreign Kaki Couch</li>
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
          className=" 
          text-white gap-5  w-full z-30  flex justify-center p-5  items-center flex-col font2   md:hidden"
          data-aos="fade-down"
        >
          <Link to="/">
            <li
              className={`cursor-pointer  hover:ease-out hover:duration-700 ${
                colorMode ? "bg-black/70" : "bg-white/5"
              }  px-[160px] rounded-[40px] hover:bg-black/20 p-5`}
              onClick={hideNav}
            >
              Home
            </li>
          </Link>

          <li
            className={`cursor-pointer  hover:ease-out hover:duration-700 ${
              colorMode ? "bg-black/70" : "bg-white/5"
            }  px-[130px] rounded-[40px] hover:bg-black/20 p-5 parent-link relative`}
            onClick={hideNav}
          >
            Collections
            <ul
              className={`nested-lists absolute ${
                colorMode ? "bg-black text-white" : "bg-white text-black"
              } poppins text-[14px] px-10 w-full ml-[-130px]`}
            >
              <li className="cursor-pointer bg-black/10 hover:bg-black hover:text-white rounded-lg flex justify-center py-1 mt-1">
                Cabinets
              </li>
              <Link to="collection">
                <li className="cursor-pointer bg-black/10 hover:bg-black hover:text-white rounded-lg flex justify-center py-1 mt-1">
                  Glass Tables
                </li>
              </Link>
              <li className="cursor-pointer bg-black/10 hover:bg-black hover:text-white rounded-lg flex justify-center py-1 mt-1">
                Stainless chairs
              </li>
              <li className="cursor-pointer bg-black/10 px-5 hover:bg-black hover:text-white rounded-lg flex justify-center py-1 mt-1">
                Foreign Kaki Couch
              </li>
            </ul>
          </li>

          <Link to="favorite">
            <li
              className={`cursor-pointer  hover:ease-out hover:duration-700 ${
                colorMode ? "bg-black/70" : "bg-white/5"
              } px-[140px] rounded-[40px] hover:bg-black/20 p-5`}
              onClick={hideNav}
            >
              Favorites
            </li>
          </Link>
          <Link to="about">
            <li
              className={`cursor-pointer  hover:ease-out hover:duration-700 ${
                colorMode ? "bg-black/70" : "bg-white/5"
              } px-[160px] rounded-[40px] hover:bg-black/20 p-5`}
              onClick={hideNav}
            >
              About
            </li>
          </Link>
          <Link to="contact">
            <li
              className={`cursor-pointer  hover:ease-out hover:duration-700 ${
                colorMode ? "bg-black/70" : "bg-white/5"
              } px-[150px] rounded-[40px] hover:bg-black/20 p-5`}
              onClick={hideNav}
            >
              Contact
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};
