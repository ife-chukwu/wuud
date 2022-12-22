import React, { useState } from "react";

export const SignIn = () => {
  const [input, setInput] = useState({
    Email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const singInInputHandler = (e) => {
    setInput((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));

    setError("");
    setError2("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.Email && input.password.length > 5) {
      setInput({
        Email: "",
        password: "",
      });
    }

    if (input.Email.trim() === "") {
      setError("Enter email");
    }
    if (input.password.trim() === "") {
      setError2("Enter password");
    } else if (input.password.length <= 5) {
      setError2("Password is not strong");
    }
  };
  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit}
        className=" w-full items-center  flex flex-col gap-8   rounded-lg"
      >
        <input
          type="email"
          name="Email"
          placeholder="Enter Email"
          value={input.Email}
          className="outline-none w-80 h-10 rounded-md px-5 relative"
          onChange={singInInputHandler}
        />

        <p className="absolute mt-10  gap-5 text-[12px] text-[#d32222]">{error}</p>
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Enter Password"
          className="outline-none w-80 h-10 rounded-md px-5"
          onChange={singInInputHandler}
        />
        <p className="absolute mt-[120px] text-[12px] gap-5 text-[#d32222]">{error2}</p>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className=" bg-orange-600 w-40 flex justify-center text-white font-bold  py-2 rounded-sm"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
