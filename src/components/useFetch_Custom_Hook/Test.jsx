import React from "react";
import { useFetch } from "./UseFetch";

const Test = () => {
  console.log(useFetch("https://jsonplaceholder.typicode.com/todos"));
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      <h1>{loading && "Loading.."}</h1>
      {error && "Error.."}
      {data.map((d) => {
        return (
          <>
            <p
              style={{
                backgroundColor: "blue",
                color: "white",
                margin: "1rem",
                textAlign: "center",
              }}
            >
              {d.title}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Test;
