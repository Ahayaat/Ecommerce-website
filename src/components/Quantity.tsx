"use client";

import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="flex items-center gap-x-2">
      {/* {Minus} */}
      <button
        className="border rounded-full w-6 h-6 center"
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
      >
        -
      </button>
      {/* {Number} */}
      <span className="text-sm">{num}</span>
      {/* {Plus} */}
      <button
        className="border rounded-full w-6 h-6 center"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
