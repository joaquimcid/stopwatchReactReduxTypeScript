import { stopWatchState, initialState } from '../state/StopWatchState';
import UserAction from '../actions/UserAction';

const state:stopWatchState = initialState;

function whenGetState():stopWatchState {
  return state;
}

function whenDispatch(action: UserAction):void {
  
}

function whenSubscribe(callback: Function):void {

}

export const customStore = {
  getState: () => whenGetState,
  dispatch: (action: UserAction) => whenDispatch(action),
  subscribe: (callback: Function) => whenSubscribe(callback),
}