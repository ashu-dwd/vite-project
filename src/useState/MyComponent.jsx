import React, { useState } from "react";

function MyComponent(params) {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    const name = "broCode";
    setName(name);
    console.log(name);
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const updateEmployment = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Employed: {isEmployed ? "yes" : "no"}</p>
      <button onClick={updateEmployment}>Update Employment</button>
    </div>
  );
}
export default MyComponent;
