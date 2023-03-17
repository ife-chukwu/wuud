import React, { useContext } from "react";
import { myContext } from "../MyUseContext/MyContextApi";
import { MdOutlineClose } from "react-icons/md";

export const SignIn = () => {
  const { handleSubmit, input, singInInputHandler, error, error2, hideSignIn } =
    useContext(myContext);

  return (
    <div className="w-full h-full mt-40">
      <div
        onClick={hideSignIn}
        className="mt-[-100px] ml-10 absolute text-2xl text-black/60 cursor-pointer"
      >
        <MdOutlineClose />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-full items-center  flex flex-col gap-8 lg:gap-10  rounded-lg"
      >
        <input
          type="email"
          name="Email"
          placeholder="Enter Email"
          value={input.Email}
          className="outline-none w-80 lg:w-[400px] lg:h-[40px] h-10 rounded-md px-5 relative"
          onChange={singInInputHandler}
        />

        <p className="absolute mt-10 lg:mt-[40px] gap-5 text-[12px] lg:text-[17px] text-[#d32222]">
          {error}
        </p>
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Enter Password"
          className="outline-none w-80 lg:w-[400px] lg:h-[40px] h-10 rounded-md px-5"
          onChange={singInInputHandler}
        />
        <p className="absolute mt-[120px] text-[12px] gap-5 lg:mt-[120px] lg:text-[17px] text-[#d32222]">
          {error2}
        </p>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className=" bg-orange-600 w-40 lg:w-56 flex justify-center text-white font-bold  py-2 rounded-sm"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="w-full h-screen" onClick={hideSignIn}></div>
      FFFFFFFF
    </div>
  );
};
