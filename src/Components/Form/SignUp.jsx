import React, { Fragment, useState, useEffect, useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { myContext } from "../MyUseContext/MyContextApi";

export const SignUp = () => {
  const { goBackHandler, hideSignUp } = useContext(myContext);
  const [error1, setError1] = useState("");
  const [error3, setError3] = useState("");
  const [error2, setError2] = useState("");
  const [error4, setError4] = useState("");
  const [successful, setSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.trim() === "") {
      setError1("Enter Full Name Please.");
    } else if (input.name.length < 5) {
      setError1("Invalid UserName");
    } else {
      setError1("");
    }

    if (input.email.trim() === "") {
      setError2("Valid Email is Required");
    } else {
      setError2("");
    }

    if (input.password.trim() === "") {
      setError3("Strong Password is Required");
    } else if (input.password.length <= 5) {
      setError3("Entered Password is not Strong");
    } else {
      setError3("");
    }

    if (!input.country) {
      setError4("Which Country are you from");
    } else if (input.country) {
      setError4("");
    } else {
      setError4("");
    }

    if (
      input.name &&
      input.email &&
      input.password.length >= 5 &&
      input.country
    ) {
      console.log(input);
    } else {
      return;
    }

    setInput({
      name: "",
      email: "",
      password: "",
    });

    if (input.name && input.email && input.password && input.country) {
      setSuccessful(true);
    }
  };
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (e) => {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));

    if (input.name) {
      setError1("");
    }
    if (input.email) {
      setError2("");
    }
    if (input.password) {
      setError3("");
    }
    if (input.country) {
      setError4("");
    }
  };
  const resetThis = (e) => {
    e.preventDefault()
    setInput({
      name: "",
      email: "",
      password: "",
    });

    setError1("")
    setError2("")
    setError3("")
    setError4("")
  };
  return (
    <div>
      <div
        onClick={hideSignUp}
        className="ml-[50px] mt-10 absolute text-2xl text-black/60 cursor-pointer"
      >
        <MdOutlineClose />
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="absolute mt-[-110px] mr-[480px]">
          {successful && (
            <button
              onClick={goBackHandler}
              className="text-xl text-orange-700 "
            >
              <MdOutlineClose />
            </button>
          )}
        </div>
        {successful && (
          <div
            className="flex flex-col items-center gap-3 w-full h-full md:mt-40"
            onClick={goBackHandler}
          >
            <FaCheckCircle className="text-[10rem] lg:text-[15rem] text-orange-600" />
            <h1 className="text-orange-700 text-lg md:text-2xl font-bold">
              Successful!
            </h1>
          </div>
        )}
        <div className={successful ? "hidden" : "flex flex-col"}>
          <form className="flex flex-col w-[400px] md:w-[500px] gap-5 md:mt-40">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={inputHandler}
              value={input.name}
              className="h-9 px-5 rounded-2xl outline-none"
            />
            <p className="text-red-600 text-[12px] flex justify-center mt-[-20px]">
              {error1}
            </p>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={inputHandler}
              value={input.email}
              className="h-9 px-5 rounded-2xl outline-none"
            />
            <p className="text-red-600 text-[12px] flex justify-center mt-[-20px]">
              {error2}
            </p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={inputHandler}
              value={input.password}
              className="h-9 px-5 rounded-2xl outline-none"
            />
            <p className="text-red-600 text-[12px] flex justify-center mt-[-20px]">
              {error3}
            </p>
            <select
              className="h-9 px-5 rounded-2xl outline-none"
              onChange={inputHandler}
              name="country"
            >
              <option value="country" selected>
                Country
              </option>
              {countries.map((item, index) => (
                <Fragment key={index}>
                  <option value={item.name} className="cursor-pointer">
                    {item.name}
                  </option>
                </Fragment>
              ))}
            </select>

            <p className="text-red-600 text-[12px] flex justify-center mt-[-20px]">
              {error4}
            </p>

            <div className="flex justify-between mx-5">
              <button
                onClick={handleSubmit}
                className="bg-orange-600 font-bold text-white text3 w-32 py-2  md:py-3 rounded-3xl mt-5"
              >
                Submit
              </button>

              <button
                onClick={resetThis}
                className="bg-orange-600 font-bold text-white text3 w-32 py-2 md:py-3 rounded-3xl mt-5"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
