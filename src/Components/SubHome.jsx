import React from "react";
import DataBase from "./DataBase";

export const SubHome = () => {
  console.log(DataBase);
  return (
    <div className="h-screen w-full ">
      <div className=" flex flex-col justify-center items-center w-full  mb-20">
        <h1 className="text-white/90 font-thin  tracking-wider font-4 text-3xl  mt-10 border border-white/5 py-2   px-20 md:py-4 md:px-20 lg:text-5xl poppins">
          What We Offer
        </h1>
      </div>
      {DataBase.map((item) => (
        <div className="w-full   justify-center flex">
          <div className="flex flex-col">
            <h1 className="text-white flex justify-center tracking-wider font-4 pb-10 pt-5 md:pt-10 md:pb-5">
              {item.title}
            </h1>

            <div className="flex flex-col md:flex-row">
              <figure className=" h-[300px] w-[350px] md:h-[280px] md:w-[350px] lg:w-[550px] lg:h-[450px] ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-t-[20px] md:rounded-l-2xl md:rounded-r-none"
                />
              </figure>
              <div className="flex justify-center w-[350px] items-center bg-white/5 md:bg-transparent lg:border border-white/5 py-40 rounded-b-2xl md:rounded-r-2xl md:rounded-l-none h-[280px] lg:h-[450px] px-7">
                <div className="  flex-col">
                  <h1 className="text-white font-light text-xl pb-5 flex justify-center md:pb-2 md:pt-5 ">
                    {item.descriptionHeader}
                  </h1>
                  <p className="text-white w-[268px] font-extralight text-sm lg:text-lg lg:w-[500px] pb-5 md:px-10 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
