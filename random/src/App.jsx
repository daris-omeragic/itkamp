//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import "./Count/Count.css"


function App() {
  const [count, setCount] = useState(0);
  const isDisabled = count <= 0 ? true : false
  return (
    <div className='div'>
      <button className='button' onClick={() => setCount(count + 1)}>
        +
      </button>
      <p className='paragraph'>You clicked {count} times</p>
      <button className='button' onClick={() => setCount(count - 1)} disabled = {isDisabled} >
        -
      </button>
    </div>
  );
}



export default App;
