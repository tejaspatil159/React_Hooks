import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef();

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Count : {count}
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Timer;
