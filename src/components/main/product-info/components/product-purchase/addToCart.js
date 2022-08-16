import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const AddToCart = () => {
  return (
    <div className="cart-div">
      <button className=" btn addToCart">
        {" "}
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
