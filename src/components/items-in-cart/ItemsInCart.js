import React from "react";

const ItemsInCart = ({ isOpen, itemsInCart }) => {
  if (itemsInCart.length === 0) {
    return (
      <p
        style={{
          display: isOpen ? "flex" : "none",
          position: "absolute",
          width: "300px",
          height: "300px",
          backgroundColor: `red`,
        }}
      >
        Your Cart is Empty
      </p>
    );
  } else {
    return itemsInCart.map((item) => {
      return (
        <div
          style={{
            display: isOpen ? "flex" : "none",
            position: "absolute",
            width: "300px",
            height: "300px",
            backgroundColor: `red`,
          }}
        >
          <p>{item.name}</p>
        </div>
      );
    });
  }
};

export default ItemsInCart;
