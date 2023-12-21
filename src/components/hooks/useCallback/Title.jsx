import React from "react";

const Title = ({ text }) => {
  console.log(`${text} - renders`);
  return <div>{text}</div>;
};

export default React.memo(Title);
