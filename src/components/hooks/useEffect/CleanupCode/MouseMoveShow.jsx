import React, { useEffect, useState } from "react";
import MouseMove from "./MouseMove";

const MouseMoveShow = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <MouseMove />}
    </div>
  );
};

export default MouseMoveShow;
