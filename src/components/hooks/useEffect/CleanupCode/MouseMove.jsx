import React, { useEffect, useState } from "react";

const MouseMove = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const MouseAction = (e) => {
    console.log("MouseAction clean up code");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", MouseAction);

    return () => {
      window.removeEventListener("mousemove", MouseAction);
    };
  }, []);

  return (
    <div>
      X : {x}, Y : {y}
    </div>
  );
};

export default MouseMove;
