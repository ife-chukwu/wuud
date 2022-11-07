import React from "react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

export const SearchArea = () => {
  const [enterSearch, setEnterSearch] = useState("");
  const [displayWelcome, setDisplayWelcome] = useState(false);
  const [search, setSearch] = useState(false);

  const display = () => {
    setDisplayWelcome(true);
  };

  const SearchHandler = () => {
    setSearch((prev) => !prev);
  };
  const deleteButtonHandle = () => {
    setEnterSearch("");
  };

  const searchHandler = (e) => {
    setEnterSearch(e.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <button onClick={SearchHandler}>
        <div className="text-xl pl-10 pt-2 text-white/70">
          {search ? <ImCancelCircle /> : <HiOutlineSearch />}
        </div>
      </button>
      {search && (
        <div
          className="absolute top-[40px] left-[-0]  flex bg-black/90 h-20 w-full items-center"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <form onSubmit={formSubmitHandler}>
            <input
              type="text"
              name="search"
              placeholder="Search Here..."
              className="relative outline-0 py-[16px] rounded-l-3xl text-lg  text-black ml-5  transition-transform duration-500 md:px-[150px] lg:px-[250px] xl:px-96 "
              value={enterSearch}
              onChange={searchHandler}
            />
            <div className="absolute top-[31px] flex items-center ml-[950px] text-black/60 text-lg cursor-pointer">
              {enterSearch && <FaTimes onClick={deleteButtonHandle} />}
            </div>
            {
              <button
                className=" absolute primary-color3 text-black/80 text-lg py-[15px] px-[95px] rounded-r-3xl  text-md font-bold primary-color md:px-[60px]"
                onClick={display}
              >
                Search
              </button>
            }
          </form>
          {displayWelcome && enterSearch ? (
            <h1 className="top-[80px] ml-7 absolute">
              API is fetching {enterSearch}...
            </h1>
          ) : null}
        </div>
      )}
    </div>
  );
};
