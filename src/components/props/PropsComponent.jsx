import React from "react";

const Superheroes = (props) => {
  return (
    <div>
      Hello {props.name} a.k.a. {props["supername"]} {props["children"]}
    </div>
  );
};

export default Superheroes;
