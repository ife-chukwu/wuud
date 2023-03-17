import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomersReview } from "./CustomersReview";
import productSamples from "./ProductsInfo";

export const ProductSamples = () => {
  const [input2, setInput2] = useState("");
  const [input2Error, setInput2Error] = useState("");
  const receiveEmail = (e) => {
    setInput2(e.target.value);
  };

  const preventDefault2 = (e) => {
    e.preventDefault();
    setInput2("");
    if (!input2) {
      setInput2Error("You Must Provide an Email For This Input..");
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
  return (
    <div>
      <div className="w-full h-screen bg-white overflow-y-auto relative">
        <h1 className="ml-40 pt-40 pb-10 md:ml-10 font-bold text-xl md:text-2xl text-black/70">
          <span className="font-bold text-orange-500 ">Product</span> Samples
        </h1>

        <div className="justify-center flex-col grid md:grid-cols-2 ml-20 md:gap-20 mb-40">
          {productSamples.map((product) => (
            <div
              key={product.id}
              className="
                flex shadow shadow-black/30 rounded-xl px-10 py-5 w-[500px] mt-10 ml-5 items-center gap-10"
            >
              <div className="">
                <h1 className="bg-orange-500 px-4 py-1 w-28 flex justify-center rounded-xl shadow shadow-black/30 mb-5">
                  {product.amount}
                </h1>
                <div className="w-4/4 col-start-3">
                  <figure className="w-full col-span-3">
                    {" "}
                    <Link to={`${product.id}`}>
                      {" "}
                      <img src={product.img} className="w-full h-full" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="">
                <p className="font-semibold mb-2  md:mb-5  mt-[10px] text-[13px] md:text-[15px]">
                  {product.name}
                </p>
                <p className="text-black/60 font-medium font3 text-[11px] md:text-[12px]">
                  {product.discription}
                </p>
                <div className="mt-5">
                  <p className="mt-5 ml-5 text-orange-500 font-bold">
                    {product.amount}
                  </p>
                  <button className="mt-10 bg-black/20 shadow-sm  shadow-black/70 px-10 font-bold text-black/60 py-1 rounded-lg ">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="products">
          <div className="w-full flex justify-end mt-[-100px]">
            {" "}
            <button className=" px-5 py-2 rounded-lg mb-20 text-black/70 font-semibold text-[13px] mr-10">
              See More...
            </button>
          </div>
        </Link>
      </div>
      <CustomersReview />

      <div className="w-full flex flex-col bg-black/10">
        <h1 className="flex justify-center font-semibold font3 text-black/60  pt-10">
          Sign Up to Get New Updates from Us
        </h1>
        <p className="text-[12px] tracking-wide  flex justify-center text-black/60 font-medium text-center">
          We like to keep it friendly with our Customers and subscribing <br />{" "}
          with Your official email address will help us achieve that.
        </p>
        <form className="">
          <div className="flex  mb-20 mt-10 justify-center items-center relative">
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
          <div className=" mt-[-50px] absolute">
            <p className="flex justify-center ml-[550px] text-red-600 text-[12px] ">
              {input2Error}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
