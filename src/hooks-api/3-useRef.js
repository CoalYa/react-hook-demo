import React, { useRef, forwardRef } from "react";

const Input = (props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

const MInput = forwardRef(Input);

export default () => {
  const r1 = useRef(),
    r2 = useRef();
  return (
    <div>
      <MInput ref={r1} onChange={(x) => console.log(`1: ${x}`)} />
      <MInput ref={r2} onChange={(x) => console.log(`2: ${x}`)} />
      <div>
        <button onClick={() => r1.current.focus()}>focus1</button>
        <button onClick={() => r2.current.focus()}>focus2</button>
      </div>
    </div>
  );
};
