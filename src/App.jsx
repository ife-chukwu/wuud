import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navs/Navigation";
import { About } from "./Navs/About";
import { Collection } from "./Navs/Collection";
import { Favorites } from "./Navs/Favorites";
import { Contacts } from "./Navs/Contacts";
import { Home } from "./Navs/Home";

export const App = () => {
  const [colorMode, setColorMode] = useState(false);

  const toggleColorMode = () => {
    setColorMode((isCurrent) => !isCurrent);
  };

  return (
    <div
      className={`overflow-hidden h-screen w-full relative ${
        !colorMode
          ? "bg-black transition-all duration-500"
          : " bg-white transition-all duration-500"
      }`}
    >
      <Navigation toggleColorMode={toggleColorMode} colorMode={colorMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="favorite" element={<Favorites />} />
      </Routes>
    </div>
  );
};
