import { initialState, stopWatchState } from './StopWatch/StopWatchState';

export default function rootInitialState(stopWatchStateValue?:stopWatchState):  {  stopWatch: stopWatchState } {
  return {
    stopWatch: stopWatchStateValue === undefined ? initialState : stopWatchStateValue,
  };
}

export interface iRootState {
  stopWatch: stopWatchState
}