import React from "react";

import Navbar from "./components/navigation/navbar";
import "./header.css";

import Cart from "./components/cart/cart";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Cart />
    </div>
  );
};

export default Header;
