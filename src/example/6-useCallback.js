import React, { useCallback, useState, useRef } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const preRef = useRef();
  //   const ins = () => {
  //     setCount(count + 1);
  //   };
  const ins = useCallback(() => {
    console.log("onClick");
    setCount(count + 1);
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
