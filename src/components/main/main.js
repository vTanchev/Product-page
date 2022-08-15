import React from "react";

import Product from "./product-info/product";
import "./main.css";
import ProductImageSlider from "./product-images/components/product-image-slider/productImageSlider";

const Main = () => {
  return (
    <div className="main">
      <Product />
      <ProductImageSlider/>
    </div>
  );
};

export default Main;
