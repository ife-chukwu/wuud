import React, { createContext, useState } from "react";

const myContext = createContext();

const MyContextApi = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [input, setInput] = useState({
    Email: "",
    password: "",
  });

  const signUpHandler = () => {
    setSignUp((prev) => !prev);
    if (signUp) {
      setSignIn(false);
    }
  };

  const signInHandler = () => {
    setSignIn((prev) => !prev);
    if (signIn) {
      setSignUp(false);
    }
  };

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const showSearchArea = () => {
    setShowSearch((prev) => !prev);
  };

  const cancelSearchArea = () => {
    setShowSearch(false);
  };

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

    if (input.Email && input.password.length > 5) {
      setInput({
        Email: "",
        password: "",
      });

      if (input.Email && input.password) {
        setSignIn(false);
      }
    }

    if (input.Email.trim() === "") {
      setError("Enter email");
    }
    if (input.password.trim() === "") {
      setError2("Enter password");
    } else if (input.password.length <= 5) {
      setError2("Password is not strong");
    }
    if (input.Email && input.password) {
      console.log(input);
    } else {
      return;
    }
  };

  const hideSignIn = () => {
    setSignIn(false);
  };

  const hideSignUp = () => {
    setSignUp(false);
  };

  const goBackHandler = () => {
    setSignUp(false);
    setSignIn(false);
  };
  const value = {
    showSearchArea,
    showSearch,
    cancelSearchArea,
    handleSubmit,
    input,
    singInInputHandler,
    error,
    error2,
    signUpHandler,
    signUp,
    goBackHandler,
    signIn,
    signInHandler,
    hideSignIn,
    hideSignUp,
  };

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

export { myContext, MyContextApi };
