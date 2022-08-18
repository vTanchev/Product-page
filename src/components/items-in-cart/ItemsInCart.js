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

  if (itemsInCart.length === 0) {
    return (
      <div
        style={{
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          position: "absolute",
          top: 70,
          right: 140,
          zIndex: 20,
          width: "400px",
          height: "250px",
          backgroundColor: `white`,
          boxShadow: `8px 7px 24px -3px rgba(0,0,0,0.62)`,
        }}
      >
        <h3 className="cart-title">Cart</h3>
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    );
  } else {
    return itemsInCart.map((item) => {
      return (
        <div
          style={{
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            top: 70,
            right: 140,
            zIndex: 20,
            width: "400px",
            height: "250px",
            backgroundColor: `white`,
            boxShadow: `8px 7px 24px -3px rgba(0,0,0,0.62)`,
          }}
        >
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
