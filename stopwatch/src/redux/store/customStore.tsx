import { Action } from 'redux';
import { UserActionEnum } from '../actions/UserAction';
import { stopWatchState, initialState } from '../state/StopWatchState';

const state:stopWatchState = initialState;

function whenGetState():stopWatchState {
  return state;
}

function whenDispatch(action: Action<UserActionEnum>):void {
  
}

function whenSubscribe(callback: Function):void {

}

export const customStore = {
  getState: () => whenGetState,
  dispatch: (action: Action<UserActionEnum>) => whenDispatch(action),
  subscribe: (callback: Function) => whenSubscribe(callback),
}