import React, { useReducer } from "react";
import A from "./A";
import B from "./B";
import C from "./C";

export const countContext = React.createContext();

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

const GlobalStateManagement = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <countContext.Provider
      value={{ countContext: count, dispatchContext: dispatch }}
    >
      <div>
        <div>Count : {count}</div>
        <A />
        <B />
        <C />
      </div>
    </countContext.Provider>
  );
};

export default GlobalStateManagement;
