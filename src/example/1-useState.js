import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <div>{count1}</div>
      <button
        onClick={() => {
          setCount((x) => x + 1);
          setCount1((x) => x + 1);
        }}
      >
        button
      </button>
    </div>
  );
};
