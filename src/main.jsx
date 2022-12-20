import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MyContextApi } from "./Components/MyUseContext/MyContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextApi>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContextApi>
);
