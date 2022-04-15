import { useContext } from "react";
import { CounterContext } from '../CounterContext.js';


const Increment = () => {
  const {count, setCount} = useContext(CounterContext);
  return (
    <div className="App1">
      <h1>Increment</h1>
      <button onClick={()=>{setCount(count + 1)}}>{count}</button>
    </div>
  );
  };
  
  export default Increment;