import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const AddToCart = ({
  itemsInCart,
  setItemsInCart,
  name,
  price,
  numberOfitems,
  image,
}) => {
  const handleOnClick = () => {
    const isProductInCart = itemsInCart.find(
      (product) => product.name === name
    );

    if (isProductInCart) {
      const updateState = itemsInCart.map((item) => {
        if (item.name === name) {
          return { ...item, numberOfitems: numberOfitems };
        } else {
          return item;
        }
      });
      //console.log("update");
      setItemsInCart(updateState);
    } else {
      //console.log("initialState");
      setItemsInCart([{ name, price, numberOfitems, image }]);
    }
  };
  return (
    <div className="cart-div">
      <button
        className=" btn addToCart md:mx-12 md:w-[80%] w-full"
        onClick={handleOnClick}
      >
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
