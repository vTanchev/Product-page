import React from "react";

import Product from "./product-info/product";
import "./main.css";

const Main = ({ itemsInCart, setItemsInCart }) => {
  return (
    <div className="main">
      <Product itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
    </div>
  );
};

export default Main;
