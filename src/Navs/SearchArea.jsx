import React from "react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

export const SearchArea = ({ search, SearchHandler }) => {
  const [enterSearch, setEnterSearch] = useState("");
  const [displayWelcome, setDisplayWelcome] = useState(false);

  const display = () => {
    setDisplayWelcome(true);
  };

  const deleteButtonHandle = () => {
    setEnterSearch("");
  };

  const inputSearchHandler = (e) => {
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
          className="absolute top-[40px] left-[-0]  flex  w-full items-center bg-black/60 py-5 "
          data-aos="fade-down"
          data-aos-duration="700"
          search={search}
        >
          <form onSubmit={formSubmitHandler}>
            <input
              type="text"
              name="search"
              placeholder="Search Here..."
              className=" mt-[-30px] outline-0 py-[8px] rounded-l-lg text-lg text-black ml-5  transition-transform duration-500 md:px-[150px] lg:px-[250px] xl:px-96 "
              value={enterSearch}
              onChange={inputSearchHandler}
            />
            <div className="absolute top-[31px] flex items-center ml-[950px] text-black/60 text-lg cursor-pointer">
              {enterSearch && <FaTimes onClick={deleteButtonHandle} />}
            </div>
            {
              <button
                className=" absolute bg-black text-white text-lg py-[8px] px-[95px] rounded-r-lg  text-md font-bold  md:px-[60px]  hover:ease-in-out hover:duration-500 hover:bg-black/80 mt-[-14px] hover:text-white/60"
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
