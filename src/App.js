import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './countdown';

function App() {
  return (
    <div className="App">
     <Countdown seconds="1000"/>
    </div>
  );
}

export default App;
