import React from 'react';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';

function App() {
  return (
    <div className="App">
      <ElapsedTimeDisplay />
      <Buttons />
      <LapsList />
    </div>
  );
}

export default App;
