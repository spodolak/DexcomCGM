import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppControl from './AppControl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <AppControl />    
      </header>
    </div>
  );
}

export default App;
