import React from "react";

const productPricePercent = ({ discount }) => {
  return (
    <div className="product-price-discount">
      <p className="discount-percent">{discount}%</p>
    </div>
  );
};
export default productPricePercent;
