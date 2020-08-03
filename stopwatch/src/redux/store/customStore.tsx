import { stopWatchState, initialState } from '../state/StopWatchState';

import { Action, createStore } from 'redux';
import { useDispatch } from 'react-redux';
import { UserActionEnum } from '../actions/UserAction';

const state:stopWatchState = initialState;
const dispatch = useDispatch();

function whenCreateStore(store:string):void {
  // createStore(StopWatchReducer)
}

function whenGetState():stopWatchState {
  return state;
}

function whenDispatch(action: Action<UserActionEnum>):void {
  dispatch(action);
}

function whenSubscribe(callback: Function):void {

}

export const customStore = {
  createStore: (store:string) => whenCreateStore(store),
  getState: () => whenGetState,
  dispatch: (action: Action<UserActionEnum>) => whenDispatch(action),
  subscribe: (callback: Function) => whenSubscribe(callback),
}