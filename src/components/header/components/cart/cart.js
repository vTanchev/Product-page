import React from "react";

import "./cart.css";

import LoginPanel from "./loginPanel";
import shoppingCart from "./cart-images/shopping-cart.png";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ itemsInCart, setItemsInCart, isPopupOpen, setIsPopupOpen }) => {
  const handleCart = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const countNumberOfItems = itemsInCart
    .map((item) => item.numberOfitems)
    .reduce((acc, price) => acc + price, 0);

  return (
    <div className="cart">
      <img
        className="img-cart"
        src={shoppingCart}
        alt="Shopping cart"
        onClick={handleCart}
        height={40}
        width={40}
        style={{ cursor: "pointer" }}
      />
      <p>{countNumberOfItems}</p>
      <LoginPanel />
    </div>
  );
};

export default Cart;
