import { useContext } from "react";
import { CounterContext } from '../CounterContext.js';
import { Button } from "@mui/material";


const Increment = () => {
  const {count, setCount} = useContext(CounterContext);
  return (
    <div className="App">
      <h1>Increment</h1>
      <Button variant="contained" onClick={()=>{setCount(count + 1)}}>{count}</Button>
    </div>
  );
  };
  
  export default Increment;