import { initialState, stopWatchState } from './StopWatchState';

// export const rootState: {  stopWatch: stopWatchState, } = {
//   stopWatch: initialState
// };

export default function rootInitialState(stopWatchStateValue?:stopWatchState):  {  stopWatch: stopWatchState } {
  return {
    stopWatch: stopWatchStateValue === undefined ? initialState : stopWatchStateValue,
  };
}

export interface iRootState {
  stopWatch: stopWatchState
}