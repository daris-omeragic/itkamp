import { useState, useEffect } from "react";
//import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import StyledButton from './components/styledButton/StyledButton';
import StyleHeader from './components/styledButton/StyleHeader';
import Text from './components/styledButton/StyleText';



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










function App() {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  }, [clicked]);



  function buttonClick() {
    setClicked(!clicked);
  }

  return (
    <div className="App">
      <header className="App-header">
        <StyleHeader text="React" />
        <Text text="Ovo je React" />
        <img src={logo} className="App-logo" alt="logo" />
        <StyledButton innerText={innerText} onClickHandler={buttonClick} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;

//export default ExampleFunctionalComponent;