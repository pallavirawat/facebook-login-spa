import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function login() {
    window.fblogin()
    console.log("inside the login of react")
  }

  function userData() {
    window.fbApi()
    console.log("inside the eserdata of react")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type={"button"} onClick={login} value={"login with fb"}/>
        <input type={"button"} onClick={userData} value={"print fb data"}/>
      </header>
    </div>
  );
}

export default App;
