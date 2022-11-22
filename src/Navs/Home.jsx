import React from "react";

import { SubHome } from "../Components/SubHome";

export const Home = ({ colorMode }) => {
  return (
    <div className="w-full h-screen overflow-auto">
      <div className="w-full h-[400px] bg-black/50">
        <div className="h-full w-full bg-[url('https://www.mondiniarredamenti.it/media/homepage/image/camaleonda-bebitalia1.jpg')] md:bg-center bg-cover ">
          <div className="flex items-center w-full h-full pl-10 lg:pl-[100px]">
            <h1 className="text-[70px] md:text-[100px] lg:text-[130px] font-bold flex items-center text-shadow ">
              WUUD
            </h1>
          </div>
        </div>
      </div>
      <SubHome colorMode={colorMode} />
    </div>
  );
};
