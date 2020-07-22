import React from 'react';
import './App.css';
import DexcomControl from './components/DexcomControl';
import FootNavigation from './components/AppFooter.js';

function App() {
    return (
        <React.Fragment>
            <div className="App">
                <DexcomControl />   
            </div>
            <div className="footer">
                <FootNavigation />
            </div>
        </React.Fragment>
    );
}

export default App;
