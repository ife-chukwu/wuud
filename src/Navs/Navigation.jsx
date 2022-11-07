import React from "react";
import { HiMenu } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import { SearchArea } from "./SearchArea";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Navigation = ({ toggleColorMode, colorMode }) => {
  const [sideNav, setSideNav] = useState(false);

  const menuHandler = () => {
    setSideNav((currentSideNav) => !currentSideNav);
  };
  return (
    <div className=" bg-white/5 backdrop-blur-md">
      <div
        className={`${
          !colorMode
            ? "bg-white/20 transition-all duration-500"
            : "bg-black transition-all duration-500"
        } items-center h-[40px] px-10 flex justify-between `}
      >
        <Link to="/index">
          <h1 className="text-[1.5rem] font-bold text-white/70 md:text-[2rem] font ">WUUD</h1>
        </Link>
        <div className="flex justify-evenly">
          <ul className="hidden md:flex md:text-[13px] md:gap-5 lg:gap-7 lg:mr-10 xl:mr-20  font2 md:items-center">
            <Link to="/">
              {" "}
              <li className="hover:border hover:px-6 hover:transition-width hover:duration-500 cursor-pointer ">
                Home
              </li>
            </Link>
            <Link to="/collection">
              {" "}
              <li className="hover:border hover:px-6 hover:transition-width hover:duration-500 cursor-pointer ">
                Collections
              </li>
            </Link>
            <Link to="/favorite">
              <li className="hover:border hover:px-6 hover:transition-width hover:duration-500 cursor-pointer ">
                Favorites
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:border hover:px-6 hover:transition-width hover:duration-500 cursor-pointer ">
                About
              </li>
            </Link>
            <Link to="/contact">
              {" "}
              <li className="hover:border hover:px-6 hover:transition-width hover:duration-500 cursor-pointer ">
                Contact
              </li>
            </Link>

            <div className="text-white md:p-5">
              <SearchArea />
            </div>
          </ul>
          <div
            className=" text-xl text-white/70 flex items-center cursor-pointer  "
            onClick={toggleColorMode}
          >
            {colorMode ? (
              <FiSun className={`${colorMode ? "text-white" : "text-white"}`} />
            ) : (
              <HiOutlineMoon />
            )}
          </div>
          <div
            className=" flex transition-all duration-500 font2 text-2xl items-center menu-hover hover:transition hover:duration-500 cursor-pointer pl-5 md:hidden"
            onClick={menuHandler}
          >
            {sideNav ? <ImCancelCircle /> : <HiMenu />}
          </div>
        </div>
      </div>

      {sideNav && (
        <ul
          className="text-white bg-white/5 w-full absolute flex justify-center p-5  items-center flex-col font2 shadow md:hidden"
          data-aos="fade-down"
        >
          <Link to="/">
            <li className="cursor-pointer hover:border hover:px-6 hover:transition-width hover:duration-500 border-b-[0.1px] border-white/5 px-96 p-5">
              Home
            </li>
          </Link>
          <Link to="/collection">
            <li className="cursor-pointer hover:border hover:px-6 hover:transition-width hover:duration-500 border-b-[0.1px] border-white/5  px-96 p-5">
              Collections
            </li>
          </Link>
          <Link to="/favorite">
            <li className="cursor-pointer hover:border hover:px-6 hover:transition-width hover:duration-500 border-b-[0.1px] border-white/5 px-96 p-5">
              Favorites
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer hover:border hover:px-6 hover:transition-width hover:duration-500 border-b-[0.1px] border-white/5 px-96 p-5">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer hover:border hover:px-6 hover:transition-width hover:duration-500 border-white/5 p-5">
              Contact
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};
