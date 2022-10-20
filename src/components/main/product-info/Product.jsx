import React from "react";

import Type from "./components/product-details/Type";
import Title from "./components/product-details/Title";
import Description from "./components/product-details/Description";
import PriceBeforeDiscount from "./components/product-details/PriceBeforeDiscount";
import RealPrice from "./components/product-discount/RealPrice";
import ProductPricePercent from "./components/product-discount/ProductPricePercent";
import AddToCart from "./components/product-purchase/AddToCart";
import ItemsToBuy from "./components/items-to-buy/ItemsToBuy";

import productImg from "./components/items-to-buy/assets/product-image.jpg";

import "./product.css";

const productDetails = {
  type: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
  image: productImg,
};

const Product = ({ itemsInCart, setItemsInCart, count, setCount }) => {
  const priceAffterDiscount =
    productDetails.price -
    (productDetails.price * productDetails.discount) / 100;

  const realPrice =
    productDetails.discount > 0
      ? priceAffterDiscount.toFixed(2)
      : productDetails.price.toFixed(2);

  return (
    <div className="product-info md:w-[400px]">
      <div className="product-menu">
        <div className="product ">
          <Type type={productDetails.type} />
          <Title name={productDetails.name} />
          <Description description={productDetails.description} />
          <div className="product-prices">
            <div className="discount md:my-2">
              <RealPrice realPrice={realPrice} />
              {productDetails.discount > 0 ? (
                <ProductPricePercent discount={productDetails.discount} />
              ) : null}
            </div>
            {productDetails.discount > 0 ? (
              <PriceBeforeDiscount price={productDetails.price} />
            ) : null}
          </div>
          <div className="add-to-cart flex md:flex-row flex-col my-4">
            <ItemsToBuy count={count} setCount={setCount} />
            <AddToCart
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
              name={productDetails.name}
              price={realPrice}
              numberOfitems={count}
              image={productDetails.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
