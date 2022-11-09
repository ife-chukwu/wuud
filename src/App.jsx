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
  const [search, setSearch] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  const toggleColorMode = () => {
    setColorMode((isCurrent) => !isCurrent);
  };

  const SearchHandler = () => {
    setSearch((prev) => !prev);
  };

  const menuHandler = () => {
    setSideNav((currentSideNav) => !currentSideNav);
  };

  return (
    <div
      onClick={() => {
        if (sideNav) {
          setSideNav(false);
        } else if (search) {
          setSearch(false);
        }
      }}
      className={`overflow-hidden h-screen w-full ${
        !colorMode
          ? "bg-black transition-all duration-500"
          : " bg-white transition-all duration-500"
      }`}
    >
      <Navigation
        toggleColorMode={toggleColorMode}
        colorMode={colorMode}
        search={search}
        SearchHandler={SearchHandler}
        sideNav={sideNav}
        menuHandler={menuHandler}
      />

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
