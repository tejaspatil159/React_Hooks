import React, { useState } from "react";
import useCounter from "../CustomHook/useCounter";

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      Count - {count}
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
};

export default CounterOne;
