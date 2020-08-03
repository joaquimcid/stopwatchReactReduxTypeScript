import { reducerStopWatch } from '../reducers/StopWatchReducer';
import { loggerMiddleware } from '../middleWares/loggerMiddleware';
import { Action, applyMiddleware, createStore, Store } from 'redux';
// import { Action, applyMiddleware, compose, createStore, Store } from 'redux';
import { initialState } from '../state/StopWatchState';
import { UserActionType } from '../actions/UserAction';

export function configureStore(): Store<any, Action<UserActionType>> {
  // const enhancers: never[] = [];
  // const middleware = [loggerMiddleware];

  // let store = createStore(
  //   reducerStopWatch,
  //   initialState,
  //   compose(applyMiddleware(...middleware), ...enhancers)
  // );
  // return store;

  return createStore(reducerStopWatch, initialState, applyMiddleware(loggerMiddleware));
}
