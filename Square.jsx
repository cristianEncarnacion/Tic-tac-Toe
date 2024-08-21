import React from "react";

import "./style.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <div>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </div>
  );
};

export default Square;
