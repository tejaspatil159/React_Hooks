import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const MultipleUseReducers = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter : {count}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <div>Counter Two : {count2}</div>
      <button
        onClick={() => {
          dispatch2({ type: "increment", value: 10 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch2({ type: "decrement", value: 10 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch2({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default MultipleUseReducers;
