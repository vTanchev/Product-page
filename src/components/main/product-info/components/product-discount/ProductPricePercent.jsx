import React from "react";

const productPricePercent = ({ discount }) => {
  return (
    <div className="product-price-discount self-center">
      <p className="discount-percent mx-6">{discount}%</p>
    </div>
  );
};
export default productPricePercent;
