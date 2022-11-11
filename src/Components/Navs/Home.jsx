import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { SubHome } from "../SubHome";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };
  const showSearchArea = () => {
    setDisplaySearch((prev) => !prev);
  };

  const deleteSearch = () => {
    if (search) {
      setSearch("");
    } else if (print) {
      setPrint(false);
    }
  };
  const preventDefaultHandler = (e) => {
    e.preventDefault();
    // if (search.trim() === "") {
    //   console.log("no input entered");
    // } else if (search) {
    //   console.log("hello " + search);
    // }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-[400px] ">
        <div className="h-full w-full bg-[url('https://www.mondiniarredamenti.it/media/homepage/image/camaleonda-bebitalia1.jpg')] md:bg-center bg-cover ">
          {displaySearch && (
            <div
              className="flex items-center justify-start ml-5 md:ml-20 absolute py-1"
              data-aos-duration="500"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <form onSubmit={preventDefaultHandler}>
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
            className="flex justify-end mr-5 md:mr-10 py-2 text-white text-xl cursor-pointer"
          >
            {displaySearch ? <MdClose /> : <ImSearch />}
          </div>

          {print && search ? (
            <h1 className="text-white ">{"Api is Fetching " + search}</h1>
          ) : null}

          <div className="flex items-center w-full h-full pl-10 lg:pl-[100px]">
            <h1 className="text-[70px] md:text-[100px] lg:text-[130px] font-bold flex items-center text-shadow ">
              WUUD
            </h1>
          </div>
        </div>
      </div>
      <SubHome />
    </div>
  );
};
