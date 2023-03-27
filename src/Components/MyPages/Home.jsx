import React, { useContext, useState, useEffect } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import "animate.css";
import { Link } from "react-router-dom";
import { myContext } from "../MyUseContext/MyContextApi";
import { ProductSamples } from "./ProductSamples";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

export const Home = () => {
  const { showSearch } = useContext(myContext);
  const images = [
    "Images/pic1.jpg",
    "Images/pic2.jpg",
    "Images/pic3.jpg",
    "Images/pic7.jpg",
    "Images/pic1.jpg",
    "Images/pic2.jpg",
    "Images/photo1.jpg",
  ];
  return (
    <div className="bg-white w-full ">
      <div className={`${showSearch ? "hidden" : "flex flex-col"} relative`}>
        <div className=" mt-[70px] w-full h-full relative">
          <Slide>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[0]})` }}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center h-full items-center bg-black/60 py-[50px]    lg:py-10 px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                    <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl text-center">
                      Design Your Dream
                      <br /> Home Very Easily
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
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[1]})` }}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center h-full items-center bg-black/60 py-[50px]    lg:py-10 px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                    <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl text-center">
                      Design Your Dream
                      <br /> Home Very Easily
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
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[2]})` }}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center h-full items-center bg-black/60 py-[50px]    lg:py-10 px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                    <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl text-center">
                      Design Your Dream
                      <br /> Home Very Easily
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
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[3]})` }}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center h-full items-center bg-black/60 py-[50px]    lg:py-10 px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                    <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl text-center">
                      Design Your Dream
                      <br /> Home Very Easily
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
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[4]})` }}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center h-full items-center bg-black/60 py-[50px]    lg:py-10 px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                    <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl text-center">
                      Design Your Dream
                      <br /> Home Very Easily
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
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[5]})` }}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center h-full items-center bg-black/60 py-[50px]    lg:py-10 px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                    <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl text-center">
                      Design Your Dream
                      <br /> Home Very Easily
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
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[6]})` }}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center h-full items-center bg-black/60 py-[50px]    lg:py-10 px-[40px] md:px-[80px] lg:px-48 rounded-lg">
                    <h1 className="text-white text3 tracking-wide  font-bold text-3xl md:text-[2.6rem] lg:text-5xl text-center">
                      Design Your Dream
                      <br /> Home Very Easily
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
          </Slide>
        </div>
        <div className="flex justify-center mt-[-19px] mb-[9%]">
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
