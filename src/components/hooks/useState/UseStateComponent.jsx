import React, { useState } from "react";

const UseSateComponent = () => {
  let initialCounter = 0;
  const [count, setCount] = useState(initialCounter);

  const IncrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(initialCounter);
        }}
      >
        Reset
      </button>
      <button onClick={IncrementBy5}>Increment by 5</button>
    </div>
  );
};

export default UseSateComponent;
