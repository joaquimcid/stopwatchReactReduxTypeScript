import { StopWatchStatusEnum } from '../reducers/StopWatchStatusEnum';
import IHaveStatus from './IHaveStatus';
import IHaveStartedTime from './IHaveStartedTime';
import IHavePausedTime from './IHavePausedTime';
import IHaveLaps from './IHaveLaps';
import IHaveSumOfLaps from './IHaveSumOfLaps';

export const initialState:stopWatchState = {
  status: StopWatchStatusEnum.INITIAL,
  startedTime: 0,
  // pausedTime: null,
  laps: [],
  sumOfLaps: 0,
};

export interface stopWatchState extends
  IHaveStatus,
  IHaveStartedTime,
  IHavePausedTime,
  IHaveLaps,
  IHaveSumOfLaps {  
}