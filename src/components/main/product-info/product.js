import React from "react";

import Type from "./components/product-details/type";
import Title from "./components/product-details/title";
import Description from "./components/product-details/description";
import Price from "./components/product-details/price";
import DiscountPrice from "./components/product-discount/discountPrice";
import ProductPricePercent from "./components/product-discount/productPricePercent";
import AddToCart from "./components/product-purchase/addToCart";
import DecreaseNumberOfItems from "./components/items-to-buy/decreaseNumberOfItems";
import IncreaseNumberOfItems from "./components/items-to-buy/increaseNumberOfItems";
import NumberOfItems from "./components/items-to-buy/numberOfItems";

const Product = () => {
  return (
    <div className="product-info">
      <div className="product">
        <Type />
        <Title />
        <Description />
        <div className="product-prices">
          <Price />
          <DiscountPrice />
          <ProductPricePercent />
        </div>
        <div className="add-to-cart">
          <DecreaseNumberOfItems />
          <IncreaseNumberOfItems />
          <NumberOfItems />
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default Product;
