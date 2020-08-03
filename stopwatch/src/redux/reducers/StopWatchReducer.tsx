
import { initialState, stopWatchState } from '../state/StopWatchState';
import { StopWatchStatusEnum } from './StopWatchStatusEnum';
import log, { ComponentsEnum } from '../../components/LogDebug';
import { lapsList, emptyLapsList } from '../state/ILapsState';
import { Action } from 'redux';
import { UserActionEnum } from '../actions/UserAction';

export function reducerStopWatch(state:stopWatchState = initialState, action: Action<UserActionEnum>): stopWatchState {
  log(ComponentsEnum.Redux, 'Reducer received action ' + action);
  log(ComponentsEnum.Redux, 'Reducer received action type ' + action.type);

  switch (action.type) {
    case UserActionEnum.START: {
      return {
        status: StopWatchStatusEnum.STARTED,
        startedTime: Date.now(),
        laps: emptyLapsList,
      };
    }
    case UserActionEnum.PAUSE:
      return {
          status: StopWatchStatusEnum.PAUSED,      
          startedTime: state.startedTime,
          pausedTime: Date.now(),
          laps: state.laps,
        };
        
    case  UserActionEnum.CONTINUE:
      let updateStartedTime = state.startedTime + Date.now() - (state.pausedTime || 0);
      return {
          status: StopWatchStatusEnum.STARTED,
          startedTime: updateStartedTime,
          laps: state.laps,
        };

    case  UserActionEnum.NEWLAP:
      const currentLapTime = Date.now()-state.startedTime-state.laps.sumOfLaps;
      const newLap = {
        index: state.laps.records.length+1,
        totalTime: currentLapTime,
      }
      const newRecords = state.laps.records.concat(newLap);
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

    case UserActionEnum.RESET:
      return initialState;
    default:
      return state
  }
}