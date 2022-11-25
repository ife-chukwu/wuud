import React from "react";
import { Footer } from "../Navs/Footer";

export const CustomersReviews = ({ colorMode }) => {
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
          <h1
            className={`${
              colorMode
                ? "text-black border-b pb-2 border-black/30"
                : "text-white border-b-2 pb-2 border-white/10"
            } text-2xl  md:text-[27px] lg:text-4xl font-4 font-extralight `}
          >
            OUR CUSTOMER'S{" "}
            <span
              className={`${
                colorMode ? "text-black/80" : "text-white/50"
              } font-bold`}
            >
              REVIEWS
            </span>
          </h1>
        </div>
        <div className="w-full h-full text-white flex justify-center ">
          <div className="grid grid-cols-1 gap-5 w-[430px] md:grid-cols-3 md:px-8 md:gap-10 lg:gap-20 md:w-full h-full">
            {reviews.map((item) => (
              <div>
                <p
                  className={`${
                    colorMode ? "text-black " : "text-white/70"
                  } text-center font text-xl md:text-xl lg:text-2xl `}
                >
                  {item.name}
                </p>
                <p
                  className={`${
                    colorMode ? "text-black font-light" : "text-white"
                  } pt-7 font-5 w-full md:text-center font-extralight text-sm md:text-md lg:text-[16px]   leading-6 tracking-wide flex text-justify`}
                >
                  {item.review}
                </p>
                <p className="pb-10">{item.third}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
