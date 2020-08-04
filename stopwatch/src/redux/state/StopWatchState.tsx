import { StopWatchStatusEnum } from '../reducers/StopWatch/StopWatchStatusEnum';
import IStatusState from './IStatusState';
import IStartedTimeState from './IStartedTimeState';
import IPausedTimeState from './IPausedTimeState';
import ILapsState, {emptyLapsList} from './ILapsState';

export const initialState:stopWatchState = {
  status: StopWatchStatusEnum.INITIAL,
  startedTime: 0,
  laps: emptyLapsList,
};

export interface stopWatchState extends
  IStatusState,
  IStartedTimeState,
  IPausedTimeState,
  ILapsState  {  }