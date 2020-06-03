import React, { useCallback, useState } from "react";

const s = new Set();
export default () => {
  const [count, setCount] = useState(0);
  // const preRef = useRef();
  // const ins = () => {
  //   setCount(count + 1);
  // };

  const ins = useCallback(() => {
    console.log("onClick");
    setCount((x) => x + 1);
  }, []);
  // console.log(preRef.current === ins);
  // preRef.current = ins;
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={ins}>+1</button>
    </div>
  );
};
