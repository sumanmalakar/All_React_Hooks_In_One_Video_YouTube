import { useState } from "react";
import MyContext from "./MyContext";

const MoneyState = (props) => {
  const yojna = {
    money: 5000,
    rashan: true,
    penstion: 500,
  };
  const [counter, setCounter] = useState(0);
  return (
    <MyContext.Provider
      value={{
        yojna,
        counter,
        setCounter,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MoneyState;
