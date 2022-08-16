import React, { useState } from "react";

import DecreaseNumberOfItems from "./components/decreaseNumberOfItems";
import IncreaseNumberOfItems from "./components/increaseNumberOfItems";
import NumberOfItems from "./components/numberOfItems";

import "./itemsToBuy.css";

const ItemsToBuy = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <DecreaseNumberOfItems count={count} setCount={setCount} />
      <NumberOfItems count={count} />
      <IncreaseNumberOfItems count={count} setCount={setCount} />
    </div>
  );
};

export default ItemsToBuy;
