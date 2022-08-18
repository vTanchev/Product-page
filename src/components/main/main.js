import React from "react";

import Product from "./product-info/product";
import "./main.css";

const Main = ({ itemsInCart, setItemsInCart, count, setCount }) => {
  return (
    <div className="main">
      <Product
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default Main;
