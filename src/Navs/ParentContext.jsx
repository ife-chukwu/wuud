import React, { useState, createContext, useRef } from "react";

const myContext = createContext();

const ParentContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [form, setForm] = useState(false);

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };
  const showSearchArea = () => {
    setDisplaySearch((prev) => !prev);
    if (form) {
      setForm(false);
    }
  };

  const loginHandle = () => {
    setForm((prev) => !prev);
    if (displaySearch) {
      setDisplaySearch(false);
    }
  };

  const hideSearch = () => {
    setDisplaySearch(false);
  };
  const hideLogin = () => {
    setForm(false);
  };

  const deleteSearch = () => {
    if (search) {
      setSearch("");
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

  const inputRef = useRef();
  const inputRef2 = useRef();

  const preventDefaultHandler = (e) => {
    e.preventDefault();
    if (search) {
      setPrint(search);
    } else if (!search) {
      setPrint("");
    }
  };

  const value = {
    search,
    print,
    searchInputHandler,
    deleteSearch,
    preventDefaultHandler,
    menuHandler,
    hideNav,
    sideNav,
    loginHandle,
    form,
    hideLogin,
    inputRef,
    inputRef2,
    hideSearch,
    displaySearch,
    showSearchArea,
  };

  return (
    <div>
      <myContext.Provider value={value}>{children}</myContext.Provider>
    </div>
  );
};
export { ParentContext, myContext };
