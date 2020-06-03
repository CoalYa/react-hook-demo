import { useState, useEffect } from "react";

export const useFetch = (url) => {
  let [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((x) => {
        console.log(x);
        return x.json();
      })
      .then((y) => {
        setData((data) => (data = y));
      });
  }, [url]);
  return data;
};
