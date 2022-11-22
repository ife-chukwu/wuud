import React, { useState, useRef } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const preventDefaultHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      return;
    } else {
      console.log(email);
    }
    if (password.length < 1) {
      return;
    } else if (password.trim().length < 4) {
      console.log("password is not strong");
    } else {
      console.log(password);
    }
  };
  return (
    <div className=" w-full h-full">
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={preventDefaultHandler}
          className="flex  flex-col gap-5 text-black"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={emailHandler}
            className="px-10"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={passwordHandler}
            className="px-10"
          />
          <button className="bg-white">Submit</button>
        </form>
      </div>
    </div>
  );
};
