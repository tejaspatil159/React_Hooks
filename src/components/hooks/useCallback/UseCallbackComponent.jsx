import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const UseCallBackComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const IncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const IncrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title text="UseCallback Hook" />
      <Count text="Age" count={age} />
      <Button handleClick={IncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={IncrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default UseCallBackComponent;
