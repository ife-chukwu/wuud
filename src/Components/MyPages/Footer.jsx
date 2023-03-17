import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsPinterest, BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";


export const Footer = () => {
  return (
    <div className="w-full h-full relative">
      <footer className="w-full  bg-black/90">
        <div className="flex  item-center justify-around h-[300px] text-white mx-20 font-light">
          <div className="flex items-center ">
            <ul className="flex flex-col relative text-[13px] font-extralight tracking-wide ">
              <h1 className="pb-2 text-[20px]">The Company :</h1>
              <span className="border-b-2 w-10 border-orange-400 mb-4"></span>

              <li className="mb-1">About Us</li>
              <li className="mb-1">Help</li>
              <li className="mb-1">Blog</li>
              <li className="mb-1">Inside UL</li>
            </ul>
            <ul className=" absolute ml-28 mt-16 text-[13px]">
              <li className="mb-1">Careers</li>
              <li className="mb-1">Press</li>
              <li className="mb-1">Team</li>
              <li className="mb-1">Privacy Policy</li>
            </ul>
          </div>
          <div className="flex items-center">
            <ul className="flex flex-col text-[13px]">
              <h1 className="pb-2 text-[20px]">More Information :</h1>
              <span className="border-b-2 w-10 border-orange-400 mb-4"></span>

              <li className="mb-1">Fees and Payment</li>
              <li className="mb-1">Shipping</li>
              <li className="mb-1">Terms and Conditions</li>
              <li className="mb-1">Warranty,Return and Refund</li>
            </ul>
            <ul className=" absolute ml-48 mt-16 text-[13px]">
              <li className="mb-1">Contact Us</li>
              <li className="mb-1">Visit Us</li>
              <li className="mb-1">Buy In Bulk</li>
            </ul>
          </div>
          <div className="flex items-center ">
            <ul className="flex flex-col text-[13px]">
              <h1 className="pb-2 text-[20px] mt-[-50px]"> Explore More</h1>
              <span className="border-b-2 w-10 border-orange-400 mb-4"></span>

              <li className="mb-1">Refer & Earn</li>
              <li className="mb-1">Gift Cards</li>
            </ul>
          </div>
          <div className="flex items-center ">
            <ul className="flex flex-col text-[13px]">
              <h1 className="pb-2 text-[20px]">Our Address</h1>
              <span className="border-b-2 w-10 border-orange-400 mb-4"></span>

              <li className="mb-1">WUUSTORE E-Shopping Limited</li>
              <li className="mb-1">NO 36 Logokoma Mall </li>
              <li className="mb-1">Wuse, Galadimaja , FCT Abuja</li>
              <li className="mb-1">CIN: Ezike4000Enugu30031</li>
            </ul>
          </div>
        </div>
        <div className="text-white ml-36 pb-20 flex  justify-between mx-64">
          <div className="flex flex-col">
            <h1 className=" font-light text-[20px]">Connect With Us :</h1>
            <span className="border-b-2 w-10  pb-2 border-orange-500"></span>
            <div className="flex gap-10 text-xl mt-5">
              <div>
                <BsFillTelephoneInboundFill className=" relative hover:text-orange-500 cursor-pointer transition duration-300" />
                <p className="text-orange-500 absolute text-[13px] ml-[-20px] mt-2">
                  {" "}
                  +234 9157398241
                </p>
              </div>
              <MdOutlineMail className="hover:text-orange-500 cursor-pointer transition duration-300" />
              <FaFacebook className="hover:text-orange-500 cursor-pointer transition duration-300" />
              <BsTwitter className="hover:text-orange-500 cursor-pointer transition duration-300" />
              <BsPinterest className="hover:text-orange-500 cursor-pointer transition duration-300" />
              <AiFillYoutube className="hover:text-orange-500 cursor-pointer transition duration-300" />
              <BsInstagram className="hover:text-orange-500 cursor-pointer transition duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className=" font-light text-[20px]">Download App :</h1>
            <span className="border-b-2 w-10  pb-2 border-orange-500"></span>
            <div className="mt-5 flex gap-5">
              <figure className="w-[100px] h-[30px]">
                <img
                  src="Images/google-play-badge.png"
                  className="w-full h-full"
                />
                <svg src />
              </figure>
              <figure className="w-[100px] h-[30px]">
                <img
                  src="Images/app_store_badge (1).svg"
                  className="w-full h-full"
                />
                <svg src />
              </figure>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
