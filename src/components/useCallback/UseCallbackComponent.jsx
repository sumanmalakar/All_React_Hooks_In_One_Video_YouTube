import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallbackComponent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

//   const handleClick = () => setCounter1(counter1 + 1);

const handleClick = useCallback(()=>setCounter1(counter1+1), [counter1])


  return (
    <div>
      UseCallbackComponent
      <h1>Counter2 = {counter2}</h1>
      <ChildComponent handleClick={handleClick} />
      <button onClick={() => setCounter2(counter2 + 1)}>Counter_2_Increase</button>
    </div>
  );
};

export default UseCallbackComponent;
