import React from "react";
import { SearchArea } from "./SearchArea";
export const Home = ({ search, SearchHandler }) => {
  return (
    <div className="relative">
      <div className="w-[766px] h-[400px] md:h-[400px] md:w-[1022px] text-white lg:w-full lg:h-[500px] ">
        <div className="h-full w-full bg-[url('https://www.mondiniarredamenti.it/media/homepage/image/camaleonda-bebitalia1.jpg')] md:bg-center bg-cover">
          {" "}
          <SearchArea search={search} SearchHandler={SearchHandler} />
          <div className="flex items-center w-full h-full pl-[100px]">
            <h1 className="text-[70px] md:text-[100px] lg:text-[130px] font-bold flex items-center text-shadow z-40">
              WUUD
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
