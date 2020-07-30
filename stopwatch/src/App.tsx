import React from 'react';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';
import lap from './model/Lap';

function App() {

  // console.log("dispatch to LITERAL PAUSED");
  // store.dispatch({ type: 'PAUSE'});

  // console.log("dispatch to LITERAL PAUSED");
  // store.dispatch({ type: UserActionEnum.PAUSE});
  // // console.log(store.getState());
  
  // console.log("dispatch to START ACTION");
  // store.dispatch(StartAction);
  // // console.log(store.getState());
  
  // console.log("dispatch to PAUSE ACTION");
  // store.dispatch(PauseAction);
  // // console.log(store.getState());

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
