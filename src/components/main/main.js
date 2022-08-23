import React from "react";

import Product from "./product-info/product";

import "./main.css";
import ProductImageSlider from "./product-images/productImageSlider";

const Main = ({ itemsInCart, setItemsInCart, count, setCount,showGallery,setShowGallery }) => {
  return (
    <div className="main">
      <ProductImageSlider showGallery={showGallery} setShowGallery={setShowGallery}/>
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
