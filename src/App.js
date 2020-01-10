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
    console.log("inside the userdata of react")
  }

  function loginStatus() {
    window.fbLoginStatus()
    console.log("inside the loginstatus findinf of react")
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with"
             data-auto-logout-link="false" data-use-continue-as="false" data-onlogin={login}></div>
        <input type={"button"} onClick={login} value={"login with fb"}/>
        <input type={"button"} onClick={userData} value={"print fb data"}/>
        <input type={"button"} onClick={loginStatus} value={"print login status"}/>
      </header>
    </div>
  );
}

export default App;
