import React from "react";
import { Footer } from "../Navs/Footer";

export const CustomersReviews = () => {
  const reviews = [
    {
      name: "Collins - December - 2021",
      age: 19,
      review:
        "For you, you who are searching for the right solution for furnishing your home, office or business, Mondini Arredamenti in Suzzara, Mantua, provides you with an interior designer to offer you the solutions that can best fulfill your expectations, to suggest you the best pairings, to guide you in the choice of the furniture for your spaces.",
    },
    {
      name: "Onyeka - Junuary - 2022",
      age: 19,
      review:
        "For you, you who are searching for the right solution for furnishing your home, office or business, Mondini Arredamenti in Suzzara, Mantua, provides you with an interior designer to offer you the solutions that can best fulfill your expectations, to suggest you the best pairings, to guide you in the choice of the furniture for your spaces.",
    },
    {
      name: "Ifechukwu - January - 2022",
      age: 19,
      review:
        "For you, you who are searching for the right solution for furnishing your home, office or business, Mondini Arredamenti in Suzzara, Mantua, provides you with an interior designer to offer you the solutions that can best fulfill your expectations, to suggest you the best pairings, to guide you in the choice of the furniture for your spaces.",
        third: "",
    },
  ];
  return (
    <div>
    <div className="h-full w-full bg-white/5 mt-20 ">
      <div className="flex justify-center items-center  py-10">
        <h1 className="text-white text-3xl  md:text-4xl font-4 font-extralight border-b-2 pb-2 border-white/10">
          OUR CUSTOMER'S{" "}
          <span className="text-white/50 font-bold">REVIEWS</span>
        </h1>
      </div>
      <div className="w-full h-full text-white flex justify-center ">
        <div className="grid grid-cols-1 gap-5 w-[500px] md:grid-cols-3 md:px-8 md:gap-10 lg:gap-20 md:w-full h-full">
          {reviews.map((item) => (
            <div>
              <p className="text-white text-center font text-xl md:text-xl lg:text-2xl text-white/70">
                {item.name}
              </p>
              <p className="text-white pt-10 font-5 w-full text-center font-extralight text-sm md:text-md lg:text-[16px]   text-white/80 leading-6">
                {item.review}
              </p>
              <p className="pb-10">{item.third}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};
