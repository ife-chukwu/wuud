import React from "react";
import { NavArea } from "./Components/NavArea";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/MyPages/Home";
import { About } from "./Components/MyPages/About";
import { Contact } from "./Components/MyPages/Contact";
import { Categories } from "./Components/MyPages/Categories";
import { Products } from "./Components/MyPages/Products";

const App = () => {
  return (
    <div className="overflow-hidden">
      <NavArea />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
