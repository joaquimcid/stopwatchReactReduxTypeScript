import StopWatchReducer from '../reducers/StopWatch/StopWatchReducer';
import { loggerMiddleware } from '../middleWares/loggerMiddleware';
import { applyMiddleware, createStore, Store } from 'redux';
// import { ApplicationInitialState, ApplicationState } from '../state/ApplicationState';
import { initialState } from '../state/StopWatchState';
import { IStopWatchAction } from '../actions/StopWatchAction';

export function configureStore(): Store<any, IStopWatchAction> {
  // const enhancers: never[] = [];
  // const middleware = [loggerMiddleware];

  // let store = createStore(
  //   reducerStopWatch,
  //   initialState,
  //   compose(applyMiddleware(...middleware), ...enhancers)
  // );
  // return store;

  // const initState:ApplicationState = ApplicationInitialState; 

  // return createStore(reducer,  initState, applyMiddleware(loggerMiddleware));
  return createStore(StopWatchReducer, initialState, applyMiddleware(loggerMiddleware));
}
