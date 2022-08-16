import React from "react";

const IncreaseNumberOfItems = ({ count, setCount }) => {
  return (
    <div>
      <button className="increase btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default IncreaseNumberOfItems;
