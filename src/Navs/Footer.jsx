import React, { useContext } from "react";
import { LoginToggler } from "../Components/Form/LoginToggler";
import { myContext } from "./ParentContext";

export const Footer = () => {
  const { hideLogin } = useContext(myContext);

  return (
    <div>
      <div className="w-full h-[500px]  text-white ">
        <div className="flex justify-end mr-10">
          {" "}
          <LoginToggler />
        </div>
        <div className="w-full h-full" onClick={hideLogin}></div>
      </div>
    </div>
  );
};
