
import {initialState, stopWatchState } from '../state/StopWatchState';
import UserAction, 
{ StartAction, 
  PauseAction, 
  ContinueAction, 
  NewLapAction, 
  ResetAction } from '../actions/UserAction';
import { StopWatchStatusEnum } from './StopWatchStatusEnum';
import log, { ComponentsEnum } from '../../components/LogDebug';
import { lapsList, emptyLapsList } from '../state/IHaveLaps';

export function reducerStopWatch(state = initialState, action: UserAction): stopWatchState {
  log(ComponentsEnum.Redux, 'Reducer received action ' + action);
  log(ComponentsEnum.Redux, 'Reducer received action type ' + action.type);

  // if (!state) return initialState;
  // if (!action) return initialState;
  switch (action) {
    case StartAction: {
      return {
        status: StopWatchStatusEnum.STARTED,
        startedTime: Date.now(),
        laps: emptyLapsList,
      };
    }
    case PauseAction:
      return {
          status: StopWatchStatusEnum.PAUSED,      
          startedTime: state.startedTime,
          pausedTime: Date.now(),
          laps: state.laps,
        };
        
    case ContinueAction:
      let updateStartedTime = state.startedTime + Date.now() - (state.pausedTime || 0);
      return {
          status: StopWatchStatusEnum.STARTED,
          startedTime: updateStartedTime,
          laps: state.laps,
        };

    case NewLapAction:
      const currentLapTime = Date.now()-state.startedTime-state.laps.sumOfLaps;
      const newLap = {
        index: state.laps.records.length+1,
        totalTime: currentLapTime,
      }
      const newRecords = state.laps.records.concat(newLap);
      // TODO GET INDEX OF MIN AND MAX LAP
      const newLapsList:lapsList = {
        records:newRecords, 
        sumOfLaps:state.laps.sumOfLaps+currentLapTime, 
        minValueIndex:newRecords.reduce((iMin, x, i, arr) => x.totalTime < arr[iMin].totalTime ? i : iMin, 0), 
        maxValueIndex:newRecords.reduce((iMin, x, i, arr) => x.totalTime > arr[iMin].totalTime ? i : iMin, 0)
      }
      return {
          status: StopWatchStatusEnum.STARTED,
          startedTime: state.startedTime,
          laps: newLapsList,
        };

    case ResetAction:
      return initialState;
    default:
      return state
  }
}