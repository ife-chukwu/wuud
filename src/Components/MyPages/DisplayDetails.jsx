import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import productSamples from "./ProductsInfo";
export const DisplayDetails = () => {
  const { details } = useParams();
  console.log(details);
  console.log(productSamples[1].id === details);

  return (
    <div className="absolute bg-white w-full h-full overflow-x-hidden">
      {productSamples
        .filter((item) => item.id === details)
        .map((item) => (
          <Fragment key={item.id}>
            <h1 className="mt-40 text-3xl flex justify-center py-10 mb-10 font-bold text-black/70">
              {item.name}{" "}
            </h1>
            <div className=" w-full h-full flex mx-10 justify-around ">
              <div className=" w-4/4">
                {" "}
                <figure className=" w-full flex ">
                  <img src={item.img} className="h-full w-full " />
                </figure>
              </div>
              <div className="w-3/4 flex justify-center text-center ">
                <div className=" flex flex-col  w-[80%]">
                  <h1 className=" font-bold text-2xl text-orange-600 mb-5">
                    Overview
                  </h1>
                  <div className="flex justify-center">
                    <p className=" tracking-wide  w-[80%]">{item.overview}</p>
                  </div>

                  <h3 className="text-orange-600 mt-5 font-bold text-lg ">
                    {" "}
                    WuuStore{" "}
                    <span className="text-black/70 font-semibold text-md ">
                      will always listen you
                    </span>
                  </h3>
                  <div className="flex justify-center">
                    <button className="mt-10 py-1  font-semibold bg-orange-500 shadow-black/30 shadow-lg text-white w-40 flex justify-center rounded-lg">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
    </div>
  );
};
