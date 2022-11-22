import React, { useState, createContext } from "react";

const myContext = createContext();

const ParentContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };
  const showSearchArea = () => {
    setDisplaySearch((prev) => !prev);
  };

  const HideSearchFromSideNav = () => {
    if (sideNav) {
      setDisplaySearch(false);
    } else if (displaySearch) {
      setSideNav(false);
    }
  };

  const deleteSearch = () => {
    if (search) {
      setSearch("");
    } else if (print) {
      setPrint(false);
    }
  };

  const menuHandler = () => {
    setSideNav((currentSideNav) => !currentSideNav);
  };
  const hideNav = () => {
    if (sideNav) {
      setSideNav(false);
    }
  };

  const preventDefaultHandler = (e) => {
    e.preventDefault();
  };

  const value = {
    search,
    print,
    displaySearch,
    searchInputHandler,
    showSearchArea,
    deleteSearch,
    preventDefaultHandler,
    menuHandler,
    hideNav,
    sideNav,
    HideSearchFromSideNav,
  };

  return (
    <div>
      <myContext.Provider value={value}>{children}</myContext.Provider>
    </div>
  );
};
export { ParentContext, myContext };
