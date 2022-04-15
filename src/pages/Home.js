import '../App.css';
import { useState } from "react";
import { TextField, Button } from '@mui/material';

function Home() {

  const [text, setText] = useState("");


  return (
    <div className="App">
    <header>
      <div><Button variant="contained" type='button' onClick={() => setText("")}>Clear</Button></div>
      <br></br>
      <div><TextField variant="filled" value={text} onChange={(e) => setText(e.target.value)} /></div>
      <br></br>
      <label>{text}</label>
    </header>
    </div>
  );
}

export default Home;
