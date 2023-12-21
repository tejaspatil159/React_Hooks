import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secoundCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment counter one":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement counter one":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset counter one":
      return initialState;
    case "increment counter two":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "decrement counter two":
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    case "reset counter two":
      return initialState;
    default:
      return state;
  }
};

const ComplexStateAndAction = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Counter : {count.firstCounter}</div>
      <div>Second Counter : {count.secoundCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment counter one", value: 1 });
        }}
      >
        Increment Counter one
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement counter one", value: 1 });
        }}
      >
        Decrement Counter one
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset counter one" });
        }}
      >
        Reset Counter one
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment counter one", value: 5 });
        }}
      >
        Increment Counter one by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement counter one", value: 5 });
        }}
      >
        Decrement Counter one by 5
      </button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment counter two", value: 1 });
          }}
        >
          Increment Counter Two{" "}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement counter two", value: 1 });
          }}
        >
          Decrement Counter Two
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset counter two" });
          }}
        >
          Reset Counter Two
        </button>
      </div>
    </div>
  );
};

export default ComplexStateAndAction;
