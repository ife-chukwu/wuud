import React, { useContext } from "react";
import { Login } from "./Login";
import { myContext } from "../../Navs/ParentContext";
import { MdClose } from "react-icons/md";
import "animate.css";

export const LoginToggler = () => {
  const { loginHandle, form } = useContext(myContext);
  return (
    <div>
      <div
        onClick={loginHandle}
        className="flex w-full justify-end pr-20 pt-10  text-white"
      >
        {form ? (
          <button className="animate__animated animate__zoomInDown text-2xl  ">
            {" "}
          </button>
        ) : (
          <button className="animate__animated animate__jackInTheBox bg-black/50 rounded-md px-5 py-1 text-white/80">
            LOgin
          </button>
        )}
      </div>
      {form && <Login />}
      <div className=""></div>
    </div>
  );
};
