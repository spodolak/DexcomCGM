import React from 'react';
import logo from './logo.svg';
import './App.css';
import DexcomControl from './DexcomControl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DexcomControl />    
      </header>
    </div>
  );
}

export default App;
