import React, { useState } from "react";

const UseStateWithObjects = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const setFirstName = (e) => {
    setName({ ...name, firstName: e.target.value });
  };

  const setLastName = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange={setFirstName} />
        <input type="text" value={name.lastName} onChange={setLastName} />
        <p>
          My name is {name.firstName} {name.lastName}
        </p>
      </form>
    </div>
  );
};

export default UseStateWithObjects;
