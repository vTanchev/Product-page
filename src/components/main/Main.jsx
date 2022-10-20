import React from "react";

import Product from "./product-info/Product";

import "./main.css";
import ProductImageSlider from "./product-images/ProductImageSlider";

const Main = ({
  itemsInCart,
  setItemsInCart,
  count,
  setCount,
  showGallery,
  setShowGallery,
}) => {
  return (
    <div className="main md:mt-[70px] mt-0 flex-col md:flex-row">
      <ProductImageSlider
        showGallery={showGallery}
        setShowGallery={setShowGallery}
      />
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
