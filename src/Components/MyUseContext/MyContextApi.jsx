import React, { createContext, useState } from "react";

const myContext = createContext();

const MyContextApi = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);

  const showSearchArea = () => {
    setShowSearch((prev) => !prev);
  };

  const cancelSearchArea = () => {
    setShowSearch(false);
  };
  const value = { showSearchArea, showSearch, cancelSearchArea };

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

export { myContext, MyContextApi };
