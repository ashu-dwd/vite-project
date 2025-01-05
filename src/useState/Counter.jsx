import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button className="counter" onClick={decrement}>
        -
      </button>
      <button className="counter" onClick={reset}>
        Reset
      </button>
      <button className="counter" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
