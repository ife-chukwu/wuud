import React, { useState, useContext } from "react";
import { myContext } from "../../Navs/ParentContext";
import "animate.css";

export const Login = () => {
  const { inputRef, inputRef2, hideLogin } = useContext(myContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      email: event.target.value,
    }));
    if (input.email) {
      setEmail("");
    }
  };
  const passwordHandler = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      password: event.target.value,
    }));
    if (input.password) {
      setPassword("");
    }
  };

  const preventDefaultHandler = (e) => {
    e.preventDefault();
    if (input.email === "") {
      inputRef.current.style.border = "1px dotted red";
    } else {
      inputRef.current.style.border = "0.5px solid gray";
    }
    if (input.password.trim() === "") {
      inputRef2.current.style.border = "1px dotted red";
    } else if (input.password.length < 6) {
      inputRef2.current.style.border = "1px dotted red";
    } else {
      inputRef2.current.style.border = "1px solid gray";
    }
    if (input.password.trim() === "") {
      setPassword("Enter password please...");
    } else if (input.password.length < 6) {
      setPassword("Password is not strong");
    } else {
      setPassword("");
    }
    if (input.email.trim() === "") {
      setEmail("Enter email please...");
    } else {
      setEmail("");
    }
    if (input.password && input.email) {
      setSuccess("Successful");
    } else if (input.email.length < 5) {
      setSuccess("");
    }
    if (!input.password && input.email) {
      setSuccess("");
    } else if (input.password.length < 6) {
      setSuccess("");
    }
    if (input.password.trim() === "") {
      setSuccess("");
    }
  };
  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={preventDefaultHandler}
        className="flex bg-black/90 rounded-2xl  py-10 px-5 flex-col gap-2 animate__animated animate__fadeIn"
      >
        <h1 className="text-green-500 font-bold text-xl">{success}</h1>
        <label className="font-medium text-[red]">{email}</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={input.email}
          onChange={emailHandler}
          className=" px-5 w-[400px] md:w-[500px] bg-transparent border rounded-xl py-3 border-white/20 outline-none text-white "
          ref={inputRef}
        />
        <label className="font-medium text-[red]">{password}</label>
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Enter password"
          onChange={passwordHandler}
          className="px-5 w-[400px]  md:w-[500px] bg-transparent border rounded-xl py-3 border-white/20 outline-none text-white"
          ref={inputRef2}
        />
        <div className="flex justify-center gap-[60px] md:gap-[100px]">
          <button className="bg-black border border-white/20 text-white/80 py-3 rounded-xl mt-3 outline-none font-semi-bold text-xl tracking-wider w-[170px] md:w-[200px] hover:bg-white/5 hover:transition hover:duration-700">
            Login
          </button>
          <button
            onClick={hideLogin}
            className="bg-black border border-white/20 text-white/80 py-3 rounded-xl mt-3 outline-none font-semi-bold text-xl tracking-wider  w-[170px] md:w-[200px]  hover:bg-white/5 hover:transition hover:duration-700"
          >
            Exit
          </button>
        </div>
      </form>
    </div>
  );
};
