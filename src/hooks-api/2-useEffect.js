import React, { useEffect, useState } from "react";

const Hello = () => {
  return <div>hello world</div>;
};

export default () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  // useEffect(() => {
  //   console.log("use Effect");
  //   const I = setTimeout(() => {
  //     setCount(count + 1);
  //     // setCount((x) => x + 1);
  //   }, 1000);
  //   return () => {
  //     console.log("clear");
  //     clearTimeout(I);
  //   };
  //   // console.log(count);
  // }, [count > 5 ? 5 : count]);

  // if (count > 5) {
  //   setDisplay(true);
  // }

  console.log("render: ", count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((x) => x + 1)}>button</button>
      {display && <Hello />}
    </div>
  );
};
