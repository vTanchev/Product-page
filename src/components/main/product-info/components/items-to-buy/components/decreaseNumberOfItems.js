import React from "react";

const DecreaseNumberOfItems = ({ count, setCount }) => {
  return (
    <div>
      <button
        className="decrease btn"
        onClick={() => setCount(count - 1)}
        disabled={count <= 0}
      >
        -
      </button>
    </div>
  );
};

export default DecreaseNumberOfItems;
