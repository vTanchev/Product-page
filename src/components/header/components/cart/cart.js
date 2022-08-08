import React from "react";

import avatar from "./cart-images/image-avatar.png";
import shoppingCart from "./cart-images/shopping-cart.png";

const Cart = () => {
  const handleCart = (e) => {
    console.log(e.target, "click here");
  };

  return (
    <div>
      <img
        src={shoppingCart}
        alt="Shopping cart"
        onClick={handleCart}
        height={40}
        width={40}
        style={{ cursor: "pointer" }}
      />
      <img src={avatar} alt="Avatar Logo" height={40} width={40} />
    </div>
  );
};

export default Cart;
