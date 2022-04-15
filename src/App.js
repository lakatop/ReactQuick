import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { TextField } from '@mui/material';

function App() {

  const [text, setText] = useState("");


  return (
    <div className="App">
    <header className="App-header">
      <button type='button' onClick={() => setText("")}>Clear</button>
      <TextField label="Text" value={text} onChange={(e) => setText(e.target.value)} />
      <label>{text}</label>
    </header>
    </div>
  );
}

export default App;
