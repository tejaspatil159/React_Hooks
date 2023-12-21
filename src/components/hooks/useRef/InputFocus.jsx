import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const UsernameRef = useRef();

  useEffect(() => {
    UsernameRef.current.focus();
  }, []);
  return (
    <div>
      <label>Username </label>
      <input ref={UsernameRef} type="text" placeholder="Username" />
    </div>
  );
};

export default InputFocus;
