import { Action } from 'redux';
import { UserActionEnum } from '../actions/UserAction';
import { stopWatchState, initialState } from '../state/StopWatchState';
import {IStopWatchAction} from '../actions/StopWatchAction';

const state:stopWatchState = initialState;

function whenGetState():stopWatchState {
  return state;
}

function whenDispatch(action: IStopWatchAction):void {
  
}

function whenSubscribe(callback: Function):void {

}

export const customStore = {
  getState: () => whenGetState,
  dispatch: (action: IStopWatchAction) => whenDispatch(action),
  subscribe: (callback: Function) => whenSubscribe(callback),
}