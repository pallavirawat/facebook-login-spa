import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type={"button"} onClick={login} value={"login with fb"}/>
      </header>
    </div>
  );
}

export default App;
