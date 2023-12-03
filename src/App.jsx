import React, { useLayoutEffect } from "react";
import UseStateComponent from "./components/UseState/UseStateComponent";
import UseReducerComponent from "./components/useReducer/UseReducerComponent";
import UseEffectComponent from "./components/useEffect/UseEffectComponent";
import UseRefComponent from "./components/useRef/UseRefComponent";
import IndianGovernMent from "./components/useContext/IndianGovernMent";
import MoneyState from "./components/useContext/context/MoneyState";
import UseLayOutComponent from "./components/useLayouEffect/UseLayOutComponent";
import UseCallbackComponent from "./components/useCallback/UseCallbackComponent";
import UseMemoComponent from "./components/useMemo/UseMemoComponent";
import Test from "./components/useFetch_Custom_Hook.jsx/Test";
const App = () => {
  return (
    <MoneyState>
      {/* <UseStateComponent /> */}
      {/* <UseReducerComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseRefComponent /> */}
      {/* <IndianGovernMent /> */}
      {/* <UseLayOutComponent /> */}
      {/* <UseCallbackComponent /> */}
      {/* <UseMemoComponent /> */}
      <Test />
      
    </MoneyState>
  );
};

export default App;
