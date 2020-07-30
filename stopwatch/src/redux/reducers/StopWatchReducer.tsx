
import {initialState, stopWatchState } from '../state/StopWatchState';
import UserAction, 
{ StartAction, 
  PauseAction, 
  ContinueAction, 
  NewLapAction, 
  ResetAction } from '../actions/UserAction';
import { StopWatchStatusEnum } from './StopWatchStatusEnum';
import log from '../../components/LogDebug';

export function reducerStopWatch(state = initialState, action: UserAction): stopWatchState {
  log('Reducer received action ' + action);
  log('Reducer received action type ' + action.type);

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