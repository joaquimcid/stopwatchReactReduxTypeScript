
import { initialState, stopWatchState } from './StopWatchState';
import userAction, { StartAction, ContinueAction, InitialAction, NewLapAction, PauseAction, ResetAction } from '../../actions/userAction';

export function reducerStopWatch(currentState?:stopWatchState, action?:userAction) {
  console.log(action);
  console.log(currentState);

  if (!currentState) return initialState;

  if (!action) return initialState;

  switch(action?.type) {
    case StartAction.type:
      return {
          status: "STARTED",
          startedTime: Date.now(),
          pausedTime: null,
          laps: [],
          sumOfLaps: currentState.sumOfLaps
        };

    case PauseAction.type:
      return {
          status: "PAUSED",      
          startedTime: currentState.startedTime,
          pausedTime: Date.now(),
          laps: currentState.laps,
          sumOfLaps: currentState.sumOfLaps
        };
        
    case ContinueAction.type:
      let updateStartedTime = currentState.startedTime + Date.now() - (currentState.pausedTime || 0);
      return {
          status: "STARTED",
          startedTime: updateStartedTime,
          pausedTime: null,
          laps: currentState.laps,
          sumOfLaps: currentState.sumOfLaps
        };

    case NewLapAction.type:
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

    case InitialAction.type:
    case ResetAction.type:
      return initialState;
    default: return currentState;
  }
  
}