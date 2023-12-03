import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await api.json();

      // console.log(result)
      console.table(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      UseEffectComponent
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default UseEffectComponent;
