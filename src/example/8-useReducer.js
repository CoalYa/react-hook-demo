import React, { useReducer } from "react";

const initialState = {
  count: 1,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{`count: ${state.count}`}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "increment" })}>-+</button>
    </div>
  );
};
