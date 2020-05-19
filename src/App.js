import React from 'react';
import { Container } from 'react-bootstrap';
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
