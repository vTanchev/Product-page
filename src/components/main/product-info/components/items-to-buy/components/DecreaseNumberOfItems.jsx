import React from "react";

import decrease from "../assets/icon-minus.svg";

const DecreaseNumberOfItems = ({ count, setCount }) => {
  return (
    <div>
      <button
        className="decrease btn"
        onClick={() => setCount(count - 1)}
        disabled={count <= 1}
      >
        <img src={decrease} alt="minus" />
      </button>
    </div>
  );
};

export default DecreaseNumberOfItems;
