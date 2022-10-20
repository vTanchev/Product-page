import React from "react";

const RealPrice = ({ realPrice }) => {
  return (
    <div className="product-discount-price">
      <p className="discount-price text-[30px] md:text-[24px]  font-semibold">
        ${realPrice}
      </p>
    </div>
  );
};

export default RealPrice;
