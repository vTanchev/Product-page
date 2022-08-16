import React from "react";

const Description = ({ description }) => {
  return (
    <div className="product-description">
      <p className="text-description">{description}</p>
    </div>
  );
};

export default Description;
