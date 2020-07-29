import React from 'react';
import { createStore } from 'redux';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';
import { StartAction, PauseAction } from './actions/userAction';
import { reducerStopWatch } from './redux/reducers/StopWatchReducer';

function App() {

  var store = createStore(() => reducerStopWatch());

  // store.dispatch({ type: 'INITIAL'});
  console.log(store.getState());
  
  store.dispatch(StartAction);
  console.log(store.getState());
  
  store.dispatch(PauseAction);
  console.log(store.getState());

  // const elapsedTime = ElapsedTimeDisplay({whenStartedTime:''});
  /* status => INITIAL, STARTED, PAUSED */
  // const statusDummy = store.getState().status; 
  const statusDummy = store.getState().status;
  return (
    <div className="App">
      <ElapsedTimeDisplay whenStartedTime={4994} whenPausedTime={2} />
      <Buttons status={statusDummy}/>
      <LapsList />

    </div>
  );
}

export default App;
