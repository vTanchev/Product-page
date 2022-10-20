import React from "react";

const Title = ({ name }) => {
  return (
    <div className="product-title">
      <h1 className="md:text-[40px] text-[30px] font-bold my-2">{name}</h1>
    </div>
  );
};

export default Title;
