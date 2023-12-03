import React, { useState } from "react";

const UseStateComponent = () => {

    const [counter,setCounter] = useState(0)

  const increase = () => {
    // counter++;
    setCounter(counter+1)
    // superman("ram")
    console.log("Increase Fun ",counter);
  };

  const decrease = () => {
    // counter--;
    setCounter(counter - 1);
    console.log("Decrease Fun ",counter);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default UseStateComponent;
