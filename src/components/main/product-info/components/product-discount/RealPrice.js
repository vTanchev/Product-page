import React from "react";

const RealPrice = ({ realPrice }) => {
  return (
    <div className="product-discount-price">
      <p className="discount-price">${realPrice}</p>
    </div>
  );
};

export default RealPrice;
