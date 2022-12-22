import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "./MyUseContext/MyContextApi";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { SignIn } from "./Form/SignIn";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import { SignUp } from "./Form/SignUp";

export const NavArea = () => {
  const { showSearchArea, showSearch, cancelSearchArea } =
    useContext(myContext);
  const [showNav, setShowNav] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const displayNav = () => {
    setShowNav((prev) => !prev);
  };
  const signUpHandler = () => {
    setSignUp((prev) => !prev);
    if (signUp) {
      setSignIn(false);
    }
  };

  const closeNav = () => {
    setShowNav(false);
  };

  const signInHandler = () => {
    setSignIn((prev) => !prev);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full  fixed z-40">
      <header className=" flex justify-center items-center">
        <nav className="md:flex justify-evenly  gap-10  items-center w-full h-[70px] border-b shadow-black/30 shadow-md bg-white">
          <div className="flex justify-between items-center h-full px-5 ">
            {" "}
            <h1 className=" text-[23px] font  md:text-[30px] text-black/70 ">
              WUU
              <span className="text-[23px] text-orange-500 font md:text-[30px] font-bold ">
                STORE
              </span>
            </h1>
            <button onClick={displayNav} className="md:hidden">
              <GiHamburgerMenu className="text-2xl text-orange-500  " />
            </button>
          </div>

          <ul className=" hidden md:flex gap-5 text-[14px] font-semibold text-black/70 ">
            <Link to="/">
              <li className="hover:text-black/80 duration-500 transition hover:font-bold">
                Home
              </li>
            </Link>
            <Link to="products">
              {" "}
              <li className="hover:text-black/80 duration-500 transition hover:font-bold">
                Products
              </li>
            </Link>
            <Link to="categories">
              {" "}
              <li className="hover:text-black/80 duration-500 transition hover:font-bold">
                Categories
              </li>
            </Link>
            <Link to="about">
              <li className="hover:text-black/80 duration-500 transition hover:font-bold">
                About
              </li>
            </Link>
            <Link to="contact">
              {" "}
              <li className="hover:text-black/80 duration-500 transition hover:font-bold">
                Contact
              </li>
            </Link>
          </ul>

          <div className="hidden md:flex md:mt-0 md:flex-row text-[11.5px] font-bold">
            <div>
              <button onClick={showSearchArea}>
                <HiOutlineSearch className="text-lg mr-3 mb-[-15px] text-black/70 " />
              </button>
            </div>
            <button className=" border border-r-0 px-4 h-[35px] rounded-l-sm text-black/70 hover:bg-black/5 cursor-pointer hover:duration-500 transition">
              Sign In
            </button>
            <button className="border px-4 border-l-0  rounded-r-sm bg-orange-500 hover:bg-orange-600 transition duration-300 py-[4px] text-white">
              Sign Up
            </button>
          </div>
          <div className=" nav-state nav-slide">
            {showNav && (
              <div
                className={`bg-orange-500 h-screen overflow-y-auto  ${
                  signIn ? "mt-[0]" : "mt-0"
                }   md:hidden relative transition-all duration-1000`}
              >
                <div
                  className={
                    signIn || signUp ? "hidden" : "flex justify-center"
                  }
                >
                  <ul className="flex flex-col gap-5 text-center text-xl absolute text-white mt-[180px] md:hidden ">
                    <Link to="/">
                      <li
                        onClick={closeNav}
                        className="hover:bg-black/5 px-20 rounded-lg py-1 duration-500 transition hover:font-bold"
                      >
                        Home
                      </li>
                    </Link>
                    <Link to="products">
                      {" "}
                      <li
                        onClick={closeNav}
                        className="hover:bg-black/5 px-20 rounded-lg py-1 duration-500 transition hover:font-bold"
                      >
                        Products
                      </li>
                    </Link>
                    <Link to="categories">
                      {" "}
                      <li
                        onClick={closeNav}
                        className="hover:bg-black/5 px-20 rounded-lg py-1 duration-500 transition hover:font-bold"
                      >
                        Categories
                      </li>
                    </Link>
                    <Link to="about">
                      <li
                        onClick={closeNav}
                        className="hover:bg-black/5 px-20 rounded-lg py-1 duration-500 transition hover:font-bold"
                      >
                        About
                      </li>
                    </Link>
                    <Link to="contact">
                      {" "}
                      <li
                        onClick={closeNav}
                        className="hover:bg-black/5 px-20 rounded-lg py-1 duration-500 transition hover:font-bold"
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>

                <section
                  className={`absolute ${
                    signIn
                      ? "w-full h-full flex justify-center mt-40 "
                      : "hidden"
                  }  `}
                >
                  <div>
                    <SignIn />
                  </div>
                </section>

                <section
                  className={`absolute ${
                    signUp
                      ? "  w-full h-full flex justify-center mt-40 "
                      : "hidden"
                  }  `}
                >
                  <SignUp />
                </section>

                <div
                  className={`${
                    signIn
                      ? "pt-10 flex justify-between ml-5 mr-5 gap-5"
                      : " flex justify-between ml-5 pt-10 mr-5 gap-5"
                  }`}
                >
                  <div className={signUp ? "-z-40" : ""}>
                    {" "}
                    <button
                      onClick={signInHandler}
                      className="z-40 bg-orange-600 py-2 px-10 rounded-2xl shadow-lg shadow-black/20 text-black/70 hover:bg-black/5 cursor-pointer text-sm hover:duration-500 transition font-semibold"
                    >
                      {signIn ? (
                        <BiArrowBack className="text-xl text-black/60 " />
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>
                  <div className={signIn ? "-z-40" : ""}>
                    <div className="flex items-flex relative">
                      <button onClick={showSearchArea}>
                        <HiOutlineSearch className="  mt-[-7px] text-white  -ml-10 text-black/70 absolute text-2xl" />
                      </button>
                      <button
                        onClick={signUpHandler}
                        className=" bg-white py-2 px-10 rounded-2xl shadow-md shadow-black/20 text-black/70 hover:bg-black/5 cursor-pointer text-sm hover:duration-500 transition font-semibold"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <div
        className={`${
          showSearch &&
          "bg-black/60 absolute backdrop-blur-[5px] cursor-pointer h-screen  w-full  mt-[-70px]"
        }  `}
      >
        {!showSearch ? (
          ""
        ) : (
          <div>
            <div className=" flex justify-end text-4xl ">
              <button onClick={cancelSearchArea}>
                <MdOutlineClose className="text-white/50 hover:text-orange-400 mt-20 transition duration-400 mr-5" />
              </button>
            </div>
            <div className="flex justify-center mt-10 relative">
              <form
                onSubmit={handleChange}
                className="border border-white/30 shadow-md shadow-black/50 h-[50px] w-[400px] md:w-[1000px] rounded-2xl flex justify-center"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="h-[50px] w-[1000px] bg-transparent outline-none px-10 text-white relative"
                />
                <div className=" pr-20">
                  <HiOutlineSearch className="text-2xl  mt-3 text-white/60 absolute" />
                </div>
              </form>
            </div>
            <div
              className="w-full h-[530px] absolute"
              onClick={cancelSearchArea}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
