import { StopWatchStatusEnum } from '../reducers/StopWatchStatusEnum';
import IHaveStatus from './IHaveStatus';
import IHaveStartedTime from './IHaveStartedTime';
import IHavePausedTime from './IHavePausedTime';
import IHaveLaps, {emptyLapsList} from './IHaveLaps';

export const initialState:stopWatchState = {
  status: StopWatchStatusEnum.INITIAL,
  startedTime: 0,
  laps: emptyLapsList,
};

export interface stopWatchState extends
  IHaveStatus,
  IHaveStartedTime,
  IHavePausedTime,
  IHaveLaps  {  }