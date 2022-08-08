import React from "react";

import Navbar from "./components/navigation/navbar";
import Logo from "./components/navigation/logo";
import Cart from "./components/cart/cart";

const Header = () => {
  return (
    <div>
      HEADER HERE
      <Navbar />
      <Logo />
      <Cart />
    </div>
  );
};

export default Header;
