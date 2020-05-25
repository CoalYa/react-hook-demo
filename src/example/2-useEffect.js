import React, { useEffect, useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("use Effect");
    // const I = setTimeout(() => {
    //   setCount((x) => x + 1);
    // }, 1000);
    // return () => {
    //   clearTimeout(I);
    //   console.log("here---");
    // };
    console.log(count);
  }, [count]);
  console.log("render: ", count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((x) => x + 1)}>button</button>
    </div>
  );
};
