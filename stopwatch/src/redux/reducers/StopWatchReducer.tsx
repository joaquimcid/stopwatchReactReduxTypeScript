import {initialState, stopWatchState } from '../state/StopWatchState';
import {IStopWatchAction, StopWatchActionType} from '../actions/StopWatchAction';
import { StopWatchStatusEnum } from './StopWatchStatusEnum';
import log, { ComponentsEnum } from '../../components/LogDebug';
import { lapsList, emptyLapsList } from '../state/ILapsState';

export default function StopWatchReducer(state = initialState, action: IStopWatchAction): stopWatchState {
  log(ComponentsEnum.Redux, 'Reducer received action ' + action);
  log(ComponentsEnum.Redux, 'Reducer received action type ' + action.type);

  // if (!state) return initialState;
  // if (!action) return initialState;
  switch (action.type) {
    case StopWatchActionType.START: {
      return {
        status: StopWatchStatusEnum.STARTED,
        startedTime: Date.now(),
        laps: emptyLapsList,
      };
    }
    case StopWatchActionType.PAUSE:
      return {
          status: StopWatchStatusEnum.PAUSED,      
          startedTime: state.startedTime,
          pausedTime: Date.now(),
          laps: state.laps,
        };
        
    case StopWatchActionType.CONTINUE:
      let updateStartedTime = state.startedTime + Date.now() - (state.pausedTime || 0);
      return {
          status: StopWatchStatusEnum.STARTED,
          startedTime: updateStartedTime,
          laps: state.laps,
        };

    case StopWatchActionType.NEWLAP:
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

    case StopWatchActionType.RESET:
      return initialState;
    default:
      return state
  }
}