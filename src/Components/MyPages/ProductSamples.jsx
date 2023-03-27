import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomersReview } from "./CustomersReview";
import productSamples from "./ProductsInfo";
import { Footer } from "./Footer";

export const ProductSamples = () => {
  const [input2, setInput2] = useState("");
  const [input2Error, setInput2Error] = useState("");
  const receiveEmail = (e) => {
    setInput2(e.target.value);
    if (input2.length < 1) {
      setInput2Error("");
    }
  };

  const preventDefault2 = (e) => {
    e.preventDefault();
    setInput2("");
    if (!input2) {
      setInput2Error("You must provide an email for this input..");
    }
    if (input2) {
      console.log(input2);
    } else {
      return;
    }
    if (input2) {
      setInput2Error("");
    }
  };

  setTimeout(() => {
    if (input2Error) {
      setInput2Error("");
    }
  }, 5000);

  return (
    <div>
      <div className="w-full">
        <h1 className="ml-40 pt-5 pb-5 md:ml-10 font-bold text-xl md:text-2xl text-black/70">
          <span className="font-bold text-orange-500 ">Product</span> Samples
        </h1>

        <div className="justify-center flex-col grid md:grid-cols-2 ml-20 mb-5">
          {productSamples.map((product) => (
            <div
              key={product.id}
              className="flex shadow shadow-black/30 w-4/5 rounded-xl px-10 py-5 mt-10 ml-5 items-center"
            >
              <div className="w-4/5">
                <div className="mb-10 h-5 w-2/5">
                  <h1 className="flex justify-center shadow shadow-black/30 rounded-xl py-1 bg-orange-500">
                    {product.amount}
                  </h1>
                </div>
                <div>
                  <figure className="w-4/5">
                    <Link to={`${product.id}`}>
                      <img src={product.img} className="w-full h-full" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="w-3/5">
                <p className="font-semibold mb-2  md:mb-5  mt-[10px] text-[13px] md:text-[15px]">
                  {product.name}
                </p>
                <p className="text-black/60  font-medium font3 text-[11px]  md:text-[12px]">
                  {product.discription}
                </p>
                <div className="mt-5">
                  <p className="mt-5 text-orange-500 font-bold">
                    {product.amount}
                  </p>
                  <button className="mt-10 bg-black/20 shadow-sm  shadow-black/70 w-[100%] font-bold text-black/60 py-1 rounded-lg ">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="products">
          <div className="w-full flex justify-end">
            {" "}
            <button className=" px-5 py-2 rounded-lg mb-20 text-black/70 font-semibold text-[13px] mr-10">
              See More...
            </button>
          </div>
        </Link>
      </div>
      <div className="w-full h-screen">
        <CustomersReview />
      </div>

      <div className="w-full flex flex-col bg-black/10">
        <h1 className="flex justify-center font-semibold font3 text-black/60  pt-10">
          Sign Up to Get New Updates from Us
        </h1>
        <p className="text-[12px] tracking-wide  flex justify-center text-black/60 font-medium text-center">
          We like to keep it friendly with our Customers and subscribing <br />{" "}
          with Your official email address will help us achieve that.
        </p>
        <form className="">
          <div className="flex mt-10 mb-4 justify-center items-center relative">
            <input
              type="email"
              placeholder="Email Address "
              onChange={receiveEmail}
              name="email"
              className="w-80 h-10 rounded-lg rounded-r-none border-r-0  border border-gray-100 outline-none px-5"
              value={input2}
            />
            <button
              onClick={preventDefault2}
              className="bg-orange-500 w-32 h-10 text-white font-semibold rounded-lg rounded-l-none "
            >
              Subscribe
            </button>
          </div>
          <div className="w-full mb-3">
            <p
              id="exitIt"
              className="flex justify-center text-red-600 text-[12px] "
            >
              {input2Error}
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
