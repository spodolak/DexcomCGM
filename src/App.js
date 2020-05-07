import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dexcom from './Dexcom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dexcom />
        <p>{window.location.search}</p>
      </header>
    </div>
  );
}

export default App;
