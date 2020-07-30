import React from 'react';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';
import lap from './model/Lap';

function App() {
  const lapsDummy:lap[] = [];
  
  return (
    <div className="App">
      <ElapsedTimeDisplay whenStartedTime={2} whenPausedTime={4994} />
      <Buttons />
      <LapsList laps={lapsDummy} />
    </div>
  );
}

export default App;
