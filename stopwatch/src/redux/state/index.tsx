import { initialState, stopWatchState } from './StopWatch/StopWatchState';

export default function rootInitialState(stopWatchStateValue?:stopWatchState):iRootState {
  return {
    stopWatch: stopWatchStateValue === undefined ? initialState : stopWatchStateValue,
  };
}

export interface iRootState {
  stopWatch: stopWatchState
}