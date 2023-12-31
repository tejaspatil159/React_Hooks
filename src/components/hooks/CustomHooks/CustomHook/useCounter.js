import { useState } from "react";

const useCounter = (initialvalue = 0, value = 1) => {
  const [count, setCount] = useState(initialvalue, value);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
