import React, { useContext, useState, useEffect } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import "animate.css";
import { Link } from "react-router-dom";
import { myContext } from "../MyUseContext/MyContextApi";
import { ProductSamples } from "./ProductSamples";

export const Home = () => {
  const { showSearch } = useContext(myContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  const autoScroll = true;
  let slideInterval;
  let slideIntervalTime = 10000;

  function auto() {
    slideInterval = setInterval(goToNext, slideIntervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const slides = [
    {
      id: 1,
      url: "Images/pic1.jpg",
      name: "Italian",
    },
    {
      id: 2,
      url: "Images/pic2.jpg",
      name: "Italian",
    },
    {
      id: 3,
      url: "Images/pic3.jpg",
      name: "Italian",
    },
    {
      id: 4,
      url: "Images/pic7.jpg",
      name: "Italian",
    },
    {
      id: 5,
      url: "Images/pic1.jpg",
      name: "Italian",
    },
    {
      id: 6,
      url: "Images/pic2.jpg",
      name: "Italian",
    },
    {
      id: 7,
      url: "Images/photo1.jpg",
      name: "Italian",
    },
  ];
  return (
    <div className="bg-white">
      <div
        className={`${
          showSearch ? "hidden" : "flex flex-col"
        } relative  overflow-auto`}
      >
        <div className=" mt-[70px] w-full h-full relative  overflow-hidden ">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={index === currentIndex ? "slide current" : "slide "}
            >
              {index === currentIndex && (
                <div className="w-4/4">
                  <figure className="w-full h-[400px] md:h-[550px]">
                    <img src={slide.url} className="w-full h-full" />
                  </figure>
                </div>
              )}
            </div>
          ))}
          <div className="absolute w-full h-full">
            <div className="flex justify-between mt-[-250px] md:mt-[-300px]">
              <div
                className="md:text-3xl ml-2 md:ml-10 text-white bg-black/50 rounded-full p-2  "
                onClick={goToPrev}
              >
                <AiFillCaretLeft />
              </div>
              <div
                className="md:text-3xl mr-2 md:mr-10 text-white  bg-black/50 rounded-full p-2"
                onClick={goToNext}
              >
                <AiFillCaretRight />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center h-full items-center">
            <div className="absolute mt-[-450px] md:-mt-[550px] ">
              <div className=" flex flex-col justify-center h-full items-center bg-black/30 py-[50px]  md:py-[60px]  lg:py-[100px] px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl  leading-[40px] md:leading-[60px] text-center">
                  Design Your Dream
                  <br />
                  <span className="text-orange-500 font-bold">
                    {" "}
                    Home Very Easily
                  </span>
                </h1>
                <p className="text-white md:tracking-wide text-sm md:text-md lg:text-lg text">
                  Simple Furniture and high-end-quality
                </p>
                <Link to="products">
                  <button className=" mt-[50px] md:mt-20 font-bold md:tracking-wide text-white rounded-md bg-orange-500 shadow-md shadow-white/10 px-3 lg:px-6 py-2 md:py-3 cursor-pointer text3 text-sm md:text-md lg:text-xl">
                    Explore Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[-10px] mb-28">
          <div className="border rounded-2xl flex py-2  lg:px-5 bg-[#f5f5f5] shadow-lg shadow-black/40 absolute">
            <div className="border-r-[3px]  border-gray-400 flex items-center px-2 md:px-5 lg:px-10">
              <span className="md:mr-2 text-orange-500 font-bold text-[1.6rem] md:text-[2.3rem] lg:text-[3rem] text2">
                10+
              </span>
              <p className="leading-4 text-gray-500 font-semibold font2  text-[12px] md:text-sm lg:text-lg">
                Years <br />
                Experience
              </p>
            </div>
            <div className="border-r-[3px]  border-gray-400  flex items-center px-2 md:px-5 lg:px-10">
              <span className="mr-2  text-orange-500 font-bold text-[1.6rem] md:text-[2.3rem] lg:text-[3rem] text2">
                20k+
              </span>
              <p className="leading-4 text-gray-500 font-semibold text-[12px] font2 md:text-sm lg:text-lg">
                Best <br />
                Product
              </p>
            </div>
            <div className=" flex items-center px-2  md:px-5 lg:px-10">
              <span className="mr-3 text-orange-500 font-bold text-[1.6rem] md:text-[2.6rem]  lg:text-[3rem] text2">
                15k
              </span>
              <p className="leading-4 text-gray-500 font-semibold font2 text-[12px] md:text-sm lg:text-lg">
                Happy <br />
                Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductSamples />
    </div>
  );
};
