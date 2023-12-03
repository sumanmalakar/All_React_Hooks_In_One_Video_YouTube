import React, { useMemo, useState } from 'react'

const UseMemoComponent = () => {
    const [inputValue, setInputValue] = useState(" ");

    const calculateResult = (input) =>{
        console.log("Calculating Result...")
        return input.length*100;
    }

    const memoizedResult = useMemo(()=>calculateResult(inputValue),[inputValue])

  return (
    <div>UseMemoComponent
        <input
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
         type="text" />
         <h1>InputLength = {memoizedResult}</h1>
    </div>
  )
}

export default UseMemoComponent