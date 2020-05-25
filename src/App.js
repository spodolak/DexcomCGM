import React from 'react';
import './App.css';
import DexcomControl from './components/DexcomControl';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DexcomControl />   
        <Footer />    
      </header>
    </div>
  );
}

export default App;
