import React from "react";
import "./App.css";
import CustomForm from "./components/CustomForm/CustomForm";
import "./components/CustomForm/CustomForm.css"



const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <CustomForm />
      </header>
    </div>
  );
};

export default App;













































//import { useState, useEffect } from "react";
//import { useState } from 'react';
/*
import logo from './logo.svg';

import './App.css';
import StyledButton from './components/styledButton/StyledButton';
import StyleHeader from './components/styledButton/StyleHeader';
import Text from './components/styledButton/StyleText';
*/
//import StyledInput from "./components/styledButton/StyledInput/StyledInput";

/*
function App() {
  //const [innerText, setInnerText] = useState("");
  //const [clicked, setClicked] = useState(false);
  //const [InputValue,setInputValue] = useState("");
  const [name,setName] = useState ("");
  const [age,setAge] = useState ("");

  //useEffect(() => {
    //clicked ? setInnerText("Clicked") : setInnerText("Click me");
  //}, [clicked]);
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }


  //function buttonClick() {
    //setClicked(!clicked);
  //}
  //function onChangeFunction(event){
    //setInputValue(event.target.value)
  //}

  return (
    <div className="App">
      <header className="App-header">
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
    </form>
      </header>
    </div>
  );
}


export default App;
*/

//export default ExampleFunctionalComponent;











/*
function ExampleFunctionalComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  useEffect(() => {
    if (age < 0 || age > 100) {
      setAge(0);
    }
  }, [age]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }


  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
    </form>
  );
}

*/