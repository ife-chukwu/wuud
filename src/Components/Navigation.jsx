import React from "react";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

export const Navigation = () => {
  const [sideNav, setSideNav] = useState(false);
  const [backdrop, setBackDrop] = useState(true);

  const BackDropHAndler = () => {
    setBackDrop(false);
  };
  const Hello = () => {
    setSideNav((currentSideNav) => !currentSideNav);
  };
  return (
    <div className=" bg-white/5 backdrop-blur-md">
      <div className="bg-white/20 items-center h-9 px-10 flex justify-between ">
        <h1 className="text-white/70 font">WUUD</h1>

        <div className="flex font2 text-2xl  menu-hover hover:transition hover:duration-500 cursor-pointer md:hidden">
          <HiMenu onClick={Hello} />
        </div>

        <ul className="hidden md:flex md:mr-[5rem] md:text-[13px] md:gap-10 font2">
          <li className="hove">Home</li>
          <li>Collections</li>
          <li>Favorites</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {sideNav && (
        <div className="bg-white/10 h-screen">
          <ul data-aos="fade-down" data-aos-duration="5000">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
      )}
    </div>
  );
};
