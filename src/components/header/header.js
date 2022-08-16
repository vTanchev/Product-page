import React from "react";

import Navbar from "./components/navigation/navbar";
import "./header.css";

import Cart from "./components/cart/cart";

const Header = ({
  itemsInCart,
  setItemsInCart,
  isPopupOpen,
  setIsPopupOpen,
}) => {
  return (
    <div className="header">
      <Navbar />
      <Cart
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </div>
  );
};

export default Header;
