
import {initialState, stopWatchState } from '../state/StopWatchState';
import UserAction, 
{ StartAction, 
  PauseAction, 
  ContinueAction, 
  NewLapAction, 
  ResetAction } from '../actions/UserAction';
import { StopWatchStatusEnum } from './StopWatchStatusEnum';

export function reducerStopWatch(state = initialState, action: UserAction): stopWatchState {
  // console.log('Reducer received action ' + action);
  // console.log('Reducer received action type ' + action.type);

  // if (!state) return initialState;
  // if (!action) return initialState;

  switch (action) {
    case StartAction: {
      return {
        status: StopWatchStatusEnum.STARTED,
        startedTime: Date.now(),
        laps: [],
        sumOfLaps: state.sumOfLaps
      };
    }
    case PauseAction:
      return {
          status: StopWatchStatusEnum.PAUSED,      
          startedTime: state.startedTime,
          pausedTime: Date.now(),
          laps: state.laps,
          sumOfLaps: state.sumOfLaps
        };
        
    case ContinueAction:
      let updateStartedTime = state.startedTime + Date.now() - (state.pausedTime || 0);
      return {
          status: StopWatchStatusEnum.STARTED,
          startedTime: updateStartedTime,
          laps: state.laps,
          sumOfLaps: state.sumOfLaps
        };

    case NewLapAction:
      const currentLapTime = Date.now()-state.startedTime-state.sumOfLaps;

      const newLap = {
        index: state.laps.length+1,
        totalTime: currentLapTime,
        isMin: false,
        isMax: false,
      } 

      return {
          status: StopWatchStatusEnum.STARTED,
          startedTime: state.startedTime,
          laps: state.laps.concat(newLap),
          sumOfLaps: state.sumOfLaps+currentLapTime
        };

    case ResetAction:
      return initialState;
    default:
      return state
  }
}

// export function reducerStopWatch(currentState?:stopWatchState, action?:UserAction) {
//   // console.log(action);
//   // console.log(currentState);

//   if (!currentState) return initialState;

//   if (!action) return initialState;

//   switch(action?.type) {
//     case StartAction.type:
//       return {
//           status: StopWatchStatusEnum.STARTED,
//           startedTime: Date.now(),
//           pausedTime: null,
//           laps: [],
//           sumOfLaps: currentState.sumOfLaps
//         };

//     case PauseAction.type:
//       return {
//           status: StopWatchStatusEnum.PAUSED,      
//           startedTime: currentState.startedTime,
//           pausedTime: Date.now(),
//           laps: currentState.laps,
//           sumOfLaps: currentState.sumOfLaps
//         };
        
//     case ContinueAction.type:
//       let updateStartedTime = currentState.startedTime + Date.now() - (currentState.pausedTime || 0);
//       return {
//           status: StopWatchStatusEnum.STARTED,
//           startedTime: updateStartedTime,
//           pausedTime: null,
//           laps: currentState.laps,
//           sumOfLaps: currentState.sumOfLaps
//         };

//     case NewLapAction.type:
//       const currentLapTime = Date.now()-currentState.startedTime-currentState.sumOfLaps;

//       const newLap = {
//         index: currentState.laps.length+1,
//         totalTime: currentLapTime,
//         isMin: false,
//         isMax: false,
//       } 

//       return {
//           status: StopWatchStatusEnum.STARTED,
//           startedTime: currentState.startedTime,
//           pausedTime: null,
//           laps: currentState.laps.concat(newLap),
//           sumOfLaps: currentState.sumOfLaps+currentLapTime
//         };

//     case ResetAction.type:
//       return initialState;
//     default: return currentState;
//   }
  
// }