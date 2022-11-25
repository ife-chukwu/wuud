import React from "react";
import { useContext } from "react";
import { myContext } from "./ParentContext";
import { ImSearch } from "react-icons/im";
import { MdClose } from "react-icons/md";

export const SearchArea = () => {
  const {
    search,
    print,
    searchInputHandler,
    deleteSearch,
    preventDefaultHandler,
    displaySearch,
  } = useContext(myContext);

  return (
    displaySearch && (
      <div>
        {
          <form onSubmit={preventDefaultHandler}>
            <input
              type="text"
              placeholder="Enter Search..."
              onChange={searchInputHandler}
              value={search}
              name="name"
              className="w-[350px]  text-white border-b border-black/50 outline-none bg-red-50  md:w-[600px] lg:w-[880px] h-10 relative  pl-5 bg-black/30"
            />
            <button className="bg-black text-white h-10 absolute px-[50px] rounded-r-md border border-white/10 text-xl">
              <ImSearch />
            </button>
            <div className="text-xl cursor-pointer ml-[300px]  md:ml-[550px] lg:ml-[850px] absolute mt-[-27px] text-white">
              <MdClose onClick={deleteSearch} />
            </div>
          </form>
        }

        {print && search ? (
          <h1
            className="text-white bg-black/80 w-80 py-3 flex justify-center rounded-2xl ml-20 mt-5"
            data-aos="fade-down"
          >
            {"API is Fetching " + search}
          </h1>
        ) : null}
      </div>
    )
  );
};
