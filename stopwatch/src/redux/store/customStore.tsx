import { stopWatchState, initialState } from '../state/StopWatchState';
import IAction from '../actions/IAction';

const state:stopWatchState = initialState;

function whenGetState():stopWatchState {
  return state;
}

function whenDispatch(action: IAction):void {
  
}

function whenSubscribe(callback: Function):void {

}

export const customStore = {
  getState: () => whenGetState,
  dispatch: (action: IAction) => whenDispatch(action),
  subscribe: (callback: Function) => whenSubscribe(callback),
}