import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href=" https://api.dexcom.com/v2/oauth2/login?client_id=I8FWZf7DOPOdDii3Elv2Xd6U0BrTPffn&redirect_uri=http://localhost:8080&response_type=code&scope=offline_access&state=auth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </header>
    </div>
  );
}

export default App;
