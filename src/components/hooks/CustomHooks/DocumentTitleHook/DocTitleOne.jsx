import React, { useState } from "react";
import useDocumentTitle from "../CustomHook/useDocumentTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
    </div>
  );
};

export default DocTitleOne;
