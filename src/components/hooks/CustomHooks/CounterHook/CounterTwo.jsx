import React, { useState } from "react";
import { useContext } from "react";
import useCounter from "../CustomHook/useCounter";

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(10, 10);
  return (
    <div>
      Count - {count}
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
};

export default CounterTwo;
