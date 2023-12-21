import React, { useContext } from "react";
import { countContext } from "./GlobalStateManagement";

const F = () => {
  const count = useContext(countContext);
  return (
    <div>
      F - {count.countContext}
      <button
        onClick={() => {
          count.dispatchContext({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          count.dispatchContext({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          count.dispatchContext({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default F;
