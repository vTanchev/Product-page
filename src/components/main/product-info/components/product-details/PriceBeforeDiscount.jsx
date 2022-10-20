import React from "react";

const PriceBeforeDiscount = ({ price }) => {
  return (
    <div className="product-price">
      <p className="real-price">${price.toFixed(2)}</p>
    </div>
  );
};

export default PriceBeforeDiscount;
