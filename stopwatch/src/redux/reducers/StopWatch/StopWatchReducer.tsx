import {initialState, stopWatchState } from '../../state/StopWatch/StopWatchState';
import {IStopWatchAction, StopWatchActionType} from '../../actions/StopWatchAction';
import { StopWatchStatusEnum } from './StopWatchStatusEnum';
import log, { ComponentsEnum } from '../../../components/LogDebug';
import { lapsList, emptyLapsList } from '../../state/StopWatch/ILapsState';
import { logGroup, logGroupEnd } from '../../../components/LogDebug';

function isAllowedThisStateChange(state:StopWatchStatusEnum, actionType: StopWatchActionType):boolean {

  if (actionType.startsWith('@@redux/INIT') || actionType.startsWith('@@redux/PROBE_UNKNOWN')) return false;

  if(state === StopWatchStatusEnum.INITIAL
    && actionType === StopWatchActionType.START) return true;
  // log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: INITIAL -> Dispatch(START)');

  if(state === StopWatchStatusEnum.STARTED
    && actionType === StopWatchActionType.NEWLAP) return true;
  //   log(ComponentsEnum.Buttons, 'LAP_RESET_BTN: STARTED -> Dispatch(NEWLAP)');

  if(state === StopWatchStatusEnum.STARTED
    && actionType === StopWatchActionType.PAUSE) return true;
  //     log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: STARTED -> Dispatch(PAUSE)');

  if (state === StopWatchStatusEnum.PAUSED
    && actionType === StopWatchActionType.RESET ) return true;
  //   log(ComponentsEnum.Buttons, 'LAP_RESET_BTN: PAUSED -> Dispatch(RESET)');

  if (state === StopWatchStatusEnum.PAUSED
    && actionType === StopWatchActionType.CONTINUE) return true;
  //     log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: PAUSED -> Dispatch(CONTINUE)');

  log(ComponentsEnum.StopWatchReducer, `Not allowed transition [${actionType.toString()}] when state is [${state}] `);
  return false;
}

export default function StopWatchReducer(state = initialState, action: IStopWatchAction): stopWatchState {
  logGroup(ComponentsEnum.StopWatchReducer, `Reducer received action ${action.type}`);
  log(ComponentsEnum.StopWatchReducer, 'Current state value:', state);
  // if (!action || action.type.startsWith('@@redux/INIT')) return initialState;
  let result:stopWatchState = state;

  if (isAllowedThisStateChange(state.status, action.type)) 
  {
    switch (action.type) {
      case StopWatchActionType.START: {
        result = {
          status: StopWatchStatusEnum.STARTED,
          startedTime: Date.now(),
          laps: emptyLapsList,
        };
        break;
      }
      case StopWatchActionType.PAUSE:
        result = {
            status: StopWatchStatusEnum.PAUSED,      
            startedTime: state.startedTime,
            pausedTime: Date.now(),
            laps: state.laps,
          };
        break;
      case StopWatchActionType.CONTINUE:
        let updateStartedTime = state.startedTime + Date.now() - (state.pausedTime || 0);
        result = {
            status: StopWatchStatusEnum.STARTED,
            startedTime: updateStartedTime,
            laps: state.laps,
          };
        break;
      case StopWatchActionType.NEWLAP:
        result = NewLap(state);
        break;

      case StopWatchActionType.RESET:
        result = initialState;
        break;
      default:
        result =  state
        break;
    }
  }
  log(ComponentsEnum.StopWatchReducer, 'Return state value:', state);
  logGroupEnd(ComponentsEnum.StopWatchReducer);
  return result;
}

function NewLap(state: stopWatchState) : stopWatchState {
  const currentLapTime = Date.now() - state.startedTime - state.laps.sumOfLaps;
  const newLap = {
    index: state.laps.records.length + 1,
    totalTime: currentLapTime,
  };
  const newRecords = state.laps.records.concat(newLap);
  const newLapsList: lapsList = {
    records: newRecords,
    sumOfLaps: state.laps.sumOfLaps + currentLapTime,
    minValueIndex: newRecords.reduce((iMin, x, i, arr) => x.totalTime < arr[iMin].totalTime ? i : iMin, 0),
    maxValueIndex: newRecords.reduce((iMin, x, i, arr) => x.totalTime > arr[iMin].totalTime ? i : iMin, 0)
  };
  
  return {
    status: StopWatchStatusEnum.STARTED,
    startedTime: state.startedTime,
    laps: newLapsList,
  };
}
