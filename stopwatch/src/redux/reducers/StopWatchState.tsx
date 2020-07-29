import lap from '../../model/Lap';
import { StopWatchStatusEnum } from './StopWatchStatusEnum';

export const initialState:stopWatchState = {
  status: StopWatchStatusEnum.INITIAL,
  startedTime: 0,
  // pausedTime: null,
  laps: [],
  sumOfLaps: 0,
};

export interface stopWatchState {
  status:StopWatchStatusEnum,
  startedTime:number,
  pausedTime?:number,
  laps: lap[],
  sumOfLaps: number,
}

// export default function InitialStopWatchStateValue () {
//   const init:stopWatchState = {
//     status: StopWatchStatusEnum.STARTED,
//     startedTime: 0,
//     // pausedTime: null,
//     laps: [],
//     sumOfLaps: 0,
//   }; 

//   return init;
// }