import React from "react";

import increase from "../assets/icon-plus.svg";

const IncreaseNumberOfItems = ({ count, setCount }) => {
  return (
    <div>
      <button className="increase btn" onClick={() => setCount(count + 1)}>
        <img src={increase} alt="plus" />
      </button>
    </div>
  );
};

export default IncreaseNumberOfItems;
