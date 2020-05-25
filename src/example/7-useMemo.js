import React, { useMemo, useState } from "react";

export default () => {
  const [count, setCount] = useState(1);

  const computeLongestWord = function () {
    console.log("computeLongest");
    return "test";
  };

  const longestWord = useMemo(() => computeLongestWord(), []);
  return (
    <div>
      <span>{longestWord}</span>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount((x) => x + 1)}>+1</button>
    </div>
  );
};
