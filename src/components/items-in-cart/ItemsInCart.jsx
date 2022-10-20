import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./itemsInCart.css";

const ItemsInCart = ({
  isOpen,
  itemsInCart,
  setItemsInCart,
  count,
  setCount,
}) => {
  const removeItemsFromCart = () => {
    setItemsInCart([]);
    setCount(0);
  };

  const showOn = isOpen ? "cart-show" : "cart-close";

  if (itemsInCart.length === 0) {
    return (
      <div className={showOn}>
        <h3 className="cart-title">Cart</h3>
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    );
  } else {
    return itemsInCart.map((item, index) => {
      return (
        <div key={index} className={showOn}>
          <h3 className="cart-title">Cart</h3>
          <div className="container">
            <div className="img-div">
              <img
                src={item.image}
                alt="img"
                style={{ width: "50px", borderRadius: "5px" }}
              />
            </div>
            <div className="item-div">
              <p className="item-title">{item.name}</p>
              <p className="price">
                ${item.price} x {count}
                <span className="totalPrice">${item.price * count}.00</span>
              </p>
            </div>
            <div className="remove-items">
              <button className="btn-remove" onClick={removeItemsFromCart}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
          <div className="cart-checkout">
            <button className="cart-btn">Checkout</button>
          </div>
        </div>
      );
    });
  }
};

export default ItemsInCart;
