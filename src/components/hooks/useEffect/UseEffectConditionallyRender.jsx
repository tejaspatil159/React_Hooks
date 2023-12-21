import React, { useState, useEffect } from "react";

const UseEffectConditionallyRender = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect");
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div>
      <input type="text" />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count : {count}
      </button>
    </div>
  );
};

export default UseEffectConditionallyRender;
