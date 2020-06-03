import { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  return [
    value,
    (e) => {
      setValue(e.target.value);
    },
  ];
};
