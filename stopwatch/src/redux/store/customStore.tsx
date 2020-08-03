import { stopWatchState, initialState } from '../state/StopWatchState';
import { UserActionType } from '../actions/UserAction';
import { Action } from 'redux';

const state:stopWatchState = initialState;

function whenGetState():stopWatchState {
  return state;
}

function whenDispatch(action: Action<UserActionType>):void {
  
}

function whenSubscribe(callback: Function):void {

}

export const customStore = {
  getState: () => whenGetState,
  dispatch: (action: Action<UserActionType>) => whenDispatch(action),
  subscribe: (callback: Function) => whenSubscribe(callback),
}