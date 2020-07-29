import React from 'react';
import { createStore } from 'redux';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';
import { StartAction, PauseAction } from './redux/actions/UserAction';
import { reducerStopWatch } from './redux/reducers/StopWatchReducer';
import lap from './model/Lap';

function App() {

  var store = createStore(() => reducerStopWatch());

  store.dispatch({ type: 'PAUSED'});
  console.log(store.getState());
  
  store.dispatch(StartAction);
  console.log(store.getState());
  
  store.dispatch(PauseAction);
  console.log(store.getState());

  const statusDummy = store.getState().status;
  const lapsDummy:lap[] = store.getState().laps;
  
  return (
    <div className="App">
      <ElapsedTimeDisplay whenStartedTime={2} whenPausedTime={4994} />
      <Buttons status={statusDummy}/>
      <LapsList laps={lapsDummy} />
    </div>
  );
}

export default App;
