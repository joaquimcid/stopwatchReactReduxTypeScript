import React from 'react';
import { createStore, Action } from 'redux';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';


interface lap {
  index: number;
  totalTime: number;
  isMin: boolean;
  isMax: boolean;
} 

interface stopWatchState {
  status:string,
  startedTime:number,
  pausedTime?:number,
  laps: lap[],
  sumOfLaps: number,
}

interface userAction extends Action<string> {
  type:string;
}

const initialState:stopWatchState = {
  status: "INITIAL",
  startedTime: 0,
  // pausedTime: null,
  laps: [],
  sumOfLaps: 0,
};

function reducerStopWatch(currentState?:stopWatchState, action?:userAction) {
  console.log(action);
  console.log(currentState);

  if (!currentState) return initialState;

  if (!action) return initialState;

  switch(action?.type) {
    case "START":
      return {
          status: "STARTED",
          startedTime: Date.now(),
          pausedTime: null,
          laps: [],
          sumOfLaps: currentState.sumOfLaps
        };

    case "PAUSE":
      return {
          status: "PAUSED",      
          startedTime: currentState.startedTime,
          pausedTime: Date.now(),
          laps: currentState.laps,
          sumOfLaps: currentState.sumOfLaps
        };
        
    case "CONTINUE":
      let updateStartedTime = currentState.startedTime + Date.now() - (currentState.pausedTime || 0);
      return {
          status: "STARTED",
          startedTime: updateStartedTime,
          pausedTime: null,
          laps: currentState.laps,
          sumOfLaps: currentState.sumOfLaps
        };

    case "NEWLAP":
      const currentLapTime = Date.now()-currentState.startedTime-currentState.sumOfLaps;

      const newLap = {
        index: currentState.laps.length+1,
        totalTime: currentLapTime,
        isMin: false,
        isMax: false,
      } 

      return {
          status: "STARTED",
          startedTime: currentState.startedTime,
          pausedTime: null,
          laps: currentState.laps.concat(newLap),
          sumOfLaps: currentState.sumOfLaps+currentLapTime
        };

    case "INITIAL":
    case "RESET":
      return initialState;
    default: return currentState;
  }
  
}

function createUserAction(actionName:string) {
  const newAction:userAction = { type:actionName };
  return newAction;
}

function App() {

  var store = createStore(() => reducerStopWatch(initialState, createUserAction('INITIAL')));

  // store.dispatch({ type: 'INITIAL'});
  console.log(store.getState());
  
  store.dispatch(createUserAction('STARTED'));
  console.log(store.getState());
  
  store.dispatch(createUserAction('PAUSED'));
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
