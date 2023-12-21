import React, { useContext } from "react";
import { countContext } from "./GlobalStateManagement";

const A = () => {
  const count = useContext(countContext);

  return (
    <div>
      <div>
        A - {count.countContext}
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
    </div>
  );
};

export default A;
