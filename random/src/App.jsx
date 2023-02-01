//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import CustomDiv from './CustomDiv/CustomDiv';
import "./CustomDiv/Button.css"


function App() {
  const [count, setCount] = useState(0);
  const isDisabled = count <= 0 ? true : false ;
  return (
    <CustomDiv borderRadius={"15px"}>
      <button className='button' onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className='button' onClick={() => setCount(count + 2)}>
        + +
      </button>
      <button className='button' onClick={() => setCount(count + 3)}>
        + + +
      </button>
      <button className='button' onClick={() => setCount(count + 4)}>
        + + + +
      </button>
      <button className='button' onClick={() => setCount(count + 5)}>
        + + + + +
      </button>
      <p className='paragraph'>You clicked {count} times</p>
      <button className='button' onClick={() => setCount(count - 1)} disabled = {isDisabled} >
        -
      </button>
      <button className='button' onClick={() => setCount(count - 2)} disabled = {isDisabled} >
        - -
      </button>
      <button className='button' onClick={() => setCount(count - 3)} disabled = {isDisabled} >
        - - -
      </button>
      <button className='button' onClick={() => setCount(count - 4)} disabled = {isDisabled} >
        - - - -
      </button>
      <button className='button' onClick={() => setCount(count - 5)} disabled = {isDisabled} >
        - - - - -
      </button>
    </CustomDiv>
  );
}



export default App;
