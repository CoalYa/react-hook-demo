import React, { useState, useCallback } from "react";

// const initialState = {
//   count: 1,
// };

// const reducer = function (state, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         count: state.count - 1,
//       };
//     default:
//       throw new Error();
//   }
// };

// export default () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>{`count: ${state.count}`}</p>
//       <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
//       <button onClick={() => dispatch({ type: "increment" })}>-+</button>
//     </div>
//   );
// };

export default () => {
  const [count, setCount] = useState(0);
  const ins = useCallback(() => {
    console.log("onClick");
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={ins}>+1</button>
    </div>
  );
};
