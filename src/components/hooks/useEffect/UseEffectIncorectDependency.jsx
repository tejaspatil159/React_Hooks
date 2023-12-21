import React, { useEffect, useState } from "react";

const UseEffectIncorectDependency = () => {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default UseEffectIncorectDependency;
