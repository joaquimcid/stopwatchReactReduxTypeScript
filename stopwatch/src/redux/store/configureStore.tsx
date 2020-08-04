import { loggerMiddleware } from '../middleWares/loggerMiddleware';
import { applyMiddleware, createStore, Store } from 'redux';
import { IStopWatchAction } from '../actions/StopWatchAction';
import { rootReducer } from '../reducers/index';
import rootInitialState from '../state';

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
  return createStore(rootReducer, rootInitialState(), applyMiddleware(loggerMiddleware));
}