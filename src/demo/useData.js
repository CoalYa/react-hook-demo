import { useEffect, useState } from "react";

export const useData = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (url) {
      fetch(url)
        .then((x) => {
          console.log(x);
          return x.json();
        })
        .then((y) => {
          console.log(y);
          setData((data) => (data = y));
        });
    }
  }, [url]);

  return [data, setUrl];
};
