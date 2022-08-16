import React from "react";

import Type from "./components/product-details/type";
import Title from "./components/product-details/title";
import Description from "./components/product-details/description";
import Price from "./components/product-details/price";
import DiscountPrice from "./components/product-discount/discountPrice";
import ProductPricePercent from "./components/product-discount/productPricePercent";
import AddToCart from "./components/product-purchase/addToCart";
import ItemsToBuy from "./components/items-to-buy/itemsToBuy";

import "./product.css";

const Product = () => {
  return (
    <div className="product-info">
      <div className="product-menu">
        <div className="product">
          <Type />
          <Title />
          <Description />
          <div className="product-prices">
            <div className="discount">
              <DiscountPrice />
              <ProductPricePercent />
            </div>
            <Price />
          </div>
          <div className="add-to-cart">
            <ItemsToBuy />
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
