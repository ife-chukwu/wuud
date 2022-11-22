import React from "react";
import { useContext } from "react";
import { myContext } from "./ParentContext";
import { ImSearch } from "react-icons/im";
import { MdClose } from "react-icons/md";

export const SearchArea = () => {
  const {
    search,
    print,
    displaySearch,
    searchInputHandler,
    showSearchArea,
    deleteSearch,
    preventDefaultHandler,
    HideSearchFromSideNav,
  } = useContext(myContext);

  return (
    <div>
      {displaySearch && (
        <div
          className="flex items-center justify-center ml-[-300px]  md:ml-[-500px] absolute py-1 mt-10 "
          data-aos-duration="500"
          data-aos="fade-right"
          data-aos-easing="linear"
        >
          <form
            onSubmit={preventDefaultHandler}
            onClick={HideSearchFromSideNav}
          >
            <input
              type="text"
              placeholder="Enter Search..."
              onChange={searchInputHandler}
              value={search}
              name="name"
              className="w-60  text-black  outline-none bg-red-50 md:w-80 h-8 relative rounded-l-md pl-5"
            />

            <button
              className="bg-black text-white h-8 absolute px-6 rounded-r-md"
              onClick={() => setPrint(true)}
            >
              <ImSearch />
            </button>
            <div className="text-lg cursor-pointer ml-[200px] md:ml-[290px] mt-[-22px] absolute text-black/50">
              {" "}
              <MdClose onClick={deleteSearch} />
            </div>
          </form>
        </div>
      )}

      <div
        onClick={showSearchArea}
        className="flex justify-end  px-10 py-2 text-white text-lg cursor-pointer"
      >
        {displaySearch ? <MdClose /> : <ImSearch />}
      </div>

      {print && search ? (
        <h1
          className="text-white bg-black/80 w-80 py-3 flex justify-center rounded-2xl ml-20 mt-5"
          data-aos="fade-down"
        >
          {"API is Fetching " + search}
        </h1>
      ) : null}
    </div>
  );
};
