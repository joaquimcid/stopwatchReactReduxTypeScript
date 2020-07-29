import React from 'react';
import { createStore } from 'redux';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';
import { StartAction, PauseAction } from './redux/actions/UserAction';
import { reducerStopWatch } from './redux/reducers/StopWatchReducer';
import lap from './model/Lap';
import { UserActionEnum } from './redux/actions/UserActionEnum';

function App() {

  var store = createStore(() => reducerStopWatch());

  store.subscribe(() => {
    console.log("Subscribe: ");
    console.log(store.getState()) 
  });

  console.log("dispatch to LITERAL PAUSED");
  store.dispatch({ type: 'PAUSE'});

  console.log("dispatch to LITERAL PAUSED");
  store.dispatch({ type: UserActionEnum.PAUSE});
  // console.log(store.getState());
  
  console.log("dispatch to START ACTION");
  store.dispatch(StartAction);
  // console.log(store.getState());
  
  console.log("dispatch to PAUSE ACTION");
  store.dispatch(PauseAction);
  // console.log(store.getState());

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
