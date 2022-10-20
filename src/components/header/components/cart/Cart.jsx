import React from "react";

import "./cart.css";

import LoginPanel from "./LoginPanel";
import shoppingCart from "../../../../assets/images/shopping-cart.png";

const Cart = ({ itemsInCart, isPopupOpen, setIsPopupOpen }) => {
  const handleCart = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const countNumberOfItems = itemsInCart
    .map((item) => item.numberOfitems)
    .reduce((acc, price) => acc + price, 0);

  return (
    <div className="cart my-auto">
      <img
        className="img-cart"
        src={shoppingCart}
        alt="Shopping cart"
        onClick={handleCart}
        style={{ cursor: "pointer" }}
      />
      {countNumberOfItems <= 0 ? null : (
        <p className="cartItems">{countNumberOfItems}</p>
      )}
      <LoginPanel />
    </div>
  );
};

export default Cart;
