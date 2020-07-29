import './App.css';
import React from 'react';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';
import { createStore } from 'redux'
// import reducer from './components/State';

interface lap {
  index: number;
  totalTime: number;
  isMin: boolean;
  isMax: boolean;
} 

interface state {
  status:string,
  startedTime:number,
  pausedTime?:number,
  laps: lap[],
  sumOfLaps: number,
}

const initialState:state = {
  status: "INITIAL",
  startedTime: 0,
  // pausedTime: null,
  laps: [],
  sumOfLaps: 0,
};

// export function reducer() {
//   return reducer(initialState, '');
// }

function reducer(currentState?:state, action?:string) {
  console.log(action);
  console.log(currentState);

  if (!currentState) return initialState;

  switch(action) {
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

    case "RESET":
      return initialState;
    default: return currentState;
  }
  
}

function App() {

  var store = createStore((state, string) => reducer());

  // store.dispatch({ type: 'INITIAL'});
  console.log(store.getState());
  store.dispatch(reducer('STARTED'));
  store.dispatch({ type: 'STARTED'});
  console.log(store.getState());
  store.dispatch({ type: 'PAUSED'});
  console.log(store.getState());

  
  // const elapsedTime = ElapsedTimeDisplay({whenStartedTime:''});
  /* status => INITIAL, STARTED, PAUSED */
  // const statusDummy = store.getState().status; 
  const statusDummy = "INITIAL";
  return (
    <div className="App">
      <ElapsedTimeDisplay whenStartedTime={4994} whenPausedTime={2} />
      <Buttons status={statusDummy}/>
      <LapsList />

    </div>
  );
}

export default App;
