import React, { useEffect, useState } from "react";

const UseEffectSingleRender = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseAction = (e) => {
    console.log("Mouse action");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect from single render");
    window.addEventListener("mousemove", mouseAction);
  }, []);
  return (
    <div>
      X : {x}, Y : {y}
    </div>
  );
};

export default UseEffectSingleRender;
