import React from "react";

const Type = ({ type }) => {
  return (
    <div className="product-type">
      <h3 className="main-type">{type.toUpperCase()}</h3>
    </div>
  );
};

export default Type;
