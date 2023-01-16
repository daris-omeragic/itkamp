import logo from './logo.svg';
import './App.css';
import StyledButton from './components/styledButton/StyledButton';
import StyleHeader from './components/styledButton/StyleHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledButton innerText = "CLICK"/>
        <StyleHeader text="Naslov"/>
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
