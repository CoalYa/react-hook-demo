import React, { useState, useEffect, useRef } from "react";

const useTimout = (cb, timeout, deps = []) => {
  console.log(deps);
  useEffect(() => {
    const I = setTimeout(cb, timeout);
    return () => {
      clearTimeout(I);
    };
  }, deps);
};

export default () => {
  const [count, setCount] = useState(0);
  const [countInTimeont, setCountInTimeout] = useState(0);
  //   const countRef = useRef();
  useTimout(
    () => {
      setCountInTimeout(count);
    },
    3000,
    [count]
  );
  useEffect(() => {
    setCount(5);
    //countRef.current = 5;
    // setTimeout(() => {
    //   console.log(countRef.current, count);
    //   setCountInTimeout(count);
    // }, 3000);
  }, []);
  return (
    <div>
      Count: {count}
      <br />
      CountInTimeont: {countInTimeont}
    </div>
  );
};
