import React from "react";
import DataBase from "./DataBase";
import { CustomersReviews } from "./CustomersReviews";

export const SubHome = ({ colorMode }) => {
  return (
    <div className="h-screen w-full ">
      <div className=" flex flex-col justify-center items-center w-full  mb-3">
        <h1
          className={`${
            colorMode
              ? "text-black/80 border-black/50 font-bold rounded-xl"
              : "text-white/90 border-white/5 font-thin"
          }   tracking-wider font-4 text-3xl  mt-10 border  py-2   px-20 md:py-4 md:px-20 lg:text-5xl poppins`}
        >
          What We Offer
        </h1>
      </div>
      {DataBase.map((item) => (
        <div className="w-full   justify-center flex">
          <div className="flex flex-col">
            <h1
              className={` justify-center ${
                colorMode ? "text-black flex" : "text-white flex"
              } md:text-[20px] lg:text-[25px] tracking-wider font-4 pb-5 pt-5 md:pt-10 md:pb-5`}
            >
              {item.title}
            </h1>

            <div className="flex flex-col md:flex-row">
              <figure className=" h-[300px] w-[350px] md:h-[380px] md:w-[390px] lg:w-[550px] lg:h-[450px] ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-t-[20px] md:rounded-l-2xl md:rounded-r-none"
                />
              </figure>
              <div
                className={`flex justify-center w-[350px] items-center ${
                  !colorMode
                    ? "bg-white/10 lg:border-white/5  md:bg-transparent"
                    : "bg-black text-white "
                } md:border-t lg:border  lg:w-[500px]  py-40 mb-20  rounded-b-2xl md:rounded-r-2xl md:rounded-l-none h-[280px] lg:h-[450px] px-7 md:h-[380px] md:w-[390px]`}
              >
                <div className="  flex-col">
                  <h1 className="text-white font-light text-xl  pb-3 flex justify-center md:pb-2 mt-20 ">
                    {item.descriptionHeader}
                  </h1>
                  <p className="text-white w-[300px] font-extralight text-sm font-4 text-justify  lg:text-lg md:text-[15px] md:w-[370px] lg:w-[500px] pb-20   md:pt-10 md:pb-40 md:px-10 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            <hr />
          </div>
        </div>
      ))}
      <CustomersReviews />
    </div>
  );
};
