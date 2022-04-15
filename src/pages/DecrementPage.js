import { useContext } from "react";
import { CounterContext } from '../CounterContext.js';


const Decrement = () =>   {
    const {count, setCount} = useContext(CounterContext);
    return (
        <div className="App">
            <h1>Decrement</h1>
            <button onClick={() => {setCount(count - 1)}}>{count}</button>
        </div>
    );
  };
  
  export default Decrement;