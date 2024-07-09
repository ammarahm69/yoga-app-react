import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/home";
import About from "./component/about";
import Product from "./component/product";
import Contact from "./component/contact";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/about" element={<About searchQuery={searchQuery} />} />
        <Route
          path="/product"
          element={<Product searchQuery={searchQuery} />}
        />
        <Route
          path="/contact"
          element={<Contact searchQuery={searchQuery} />}
        />
      </Routes>
    </>
  );
}

export default App;
