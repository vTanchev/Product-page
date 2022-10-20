import React, { useState } from "react";

import DecreaseNumberOfItems from "./components/DecreaseNumberOfItems";
import IncreaseNumberOfItems from "./components/IncreaseNumberOfItems";
import NumberOfItems from "./components/NumberOfItems";

import "./itemsToBuy.css";

const ItemsToBuy = ({ count, setCount }) => {
  return (
    <div className="counter flex flex-col justify-evenly my-2">
      <DecreaseNumberOfItems count={count} setCount={setCount} />
      <NumberOfItems count={count} />
      <IncreaseNumberOfItems count={count} setCount={setCount} />
    </div>
  );
};

export default ItemsToBuy;
