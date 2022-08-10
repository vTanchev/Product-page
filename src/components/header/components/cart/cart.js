import React from "react";

import "./cart.css";

import LoginPanel from "./loginPanel";
import shoppingCart from "./cart-images/shopping-cart.png";

const Cart = () => {
  const handleCart = (e) => {
    console.log(e.target, "click here");
  };

  return (
    <div class="cart">
      <img
        class="img-cart"
        src={shoppingCart}
        alt="Shopping cart"
        onClick={handleCart}
        height={40}
        width={40}
        style={{ cursor: "pointer" }}
      />
      <LoginPanel />
    </div>
  );
};

export default Cart;
