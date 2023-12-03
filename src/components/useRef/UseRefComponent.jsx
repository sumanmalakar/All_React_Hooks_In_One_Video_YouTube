import React from "react";
import { useRef } from "react";

const UseRefComponent = () => {
  const myRef = useRef(null);
  // console.log(myRef);

  const focusInput = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default UseRefComponent;
