import React from "react";
import { useReducer } from "react";

const UseReducerComponent = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    } };
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      UseReducerComponent
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increse</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrese</button>
    </div>
  );
};

export default UseReducerComponent;
