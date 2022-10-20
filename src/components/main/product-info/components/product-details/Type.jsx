import React from "react";

const Type = ({ type }) => {
  return (
    <div className="product-type">
      <h3 className="main-type font-bold md:text-[16px] text-[22px]">
        {type.toUpperCase()}
      </h3>
    </div>
  );
};

export default Type;
