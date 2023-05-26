import { useEffect, useState } from "react"


function Counter() {
    const [counter, setCounter] = useState(1)
    const [multiplier, setMultiplier] = useState(1)
  
    useEffect(()=> {
      const interval = setInterval(() => {
        setCounter(counter + 1)
      }, 1000)
  
      return () => clearInterval(interval)
    }, [counter])
  
    
    function incrementMultiplier(){
      setMultiplier(multiplier + 1)
    }
    
    function decrementMultiplier(){
      setMultiplier(multiplier - 1)
    }
    const multiplyingCounter = multiplier * counter
    
    return (
      <>
        <div>
          <button onClick={incrementMultiplier}>Increment Multiplier</button>
          <button onClick={decrementMultiplier}>Decrement Multiplier</button>
        </div>
        <h1>Original Counter is: {counter} </h1>
        <h1>Multiply By: {multiplier}</h1>
        <h1>Manipulated number: {multiplyingCounter}</h1>
        
      </>
    );
  }
  
  export default Counter;