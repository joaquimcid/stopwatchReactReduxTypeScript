import './App.css';
import React from 'react';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';

function App() {

  // const elapsedTime = ElapsedTimeDisplay({whenStartedTime:''});

  return (
    <div className="App">
      <ElapsedTimeDisplay whenStartedTime={1} whenPausedTime={2} />
      <Buttons />
      <LapsList />
    </div>
  );
}

export default App;
