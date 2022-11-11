import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Components/Navs/Navigation";
import { About } from "./Components/Navs/About";
import { Collection } from "./Components/Navs/Collection";
import { Favorites } from "./Components/Navs/Favorites";
import { Contacts } from "./Components/Navs/Contacts";
import { Home } from "./Components/Navs/Home";

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
