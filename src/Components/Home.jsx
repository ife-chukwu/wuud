import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "../Navs/Navigation";
import { About } from "../Navs/About";
import { Collection } from "../Navs/Collection";
import { Favorites } from "../Navs/Favorites";
import { Contacts } from "../Navs/Contacts";
import { AllNav } from "./AllNav";

export const Home = () => {
  // const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   fetch("http://www.boredapi.com/api/activity?key=5881028")
  //     .then((promise) => promise.json())
  //     .then((data) => setAllData(data));
  // }, []);
  // console.log(allData)

  const [colorMode, setColorMode] = useState(false);

  const toggleColorMode = () => {
    setColorMode((isCurrent) => !isCurrent);
  };
  return (
    <div
      className={`overflow-hidden h-screen w-full ${
        !colorMode
          ? "bg-black transition-all duration-500"
          : " bg-white transition-all duration-500"
      } relative`}
    >
      <Navigation toggleColorMode={toggleColorMode} colorMode={colorMode} />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
       <div className=""></div>
    </div>
    // <div className="text-black">
    //   {/* <h1 className="bg-black text-white">{allData.activity}</h1> */}
    // </div>
  );
};
