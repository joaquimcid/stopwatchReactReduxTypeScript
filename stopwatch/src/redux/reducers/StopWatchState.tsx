import lap from './Lap';

export const initialState:stopWatchState = {
  status: "INITIAL",
  startedTime: 0,
  // pausedTime: null,
  laps: [],
  sumOfLaps: 0,
};

export interface stopWatchState {
  status:string,
  startedTime:number,
  pausedTime?:number,
  laps: lap[],
  sumOfLaps: number,
}