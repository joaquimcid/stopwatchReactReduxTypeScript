import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { IStopWatchAction } from '../actions/StopWatchAction';
import log, { ComponentsEnum } from '../../components/LogDebug';

// TODO Understand this line
export const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<IStopWatchAction>) => (action:IStopWatchAction) => {

  log(ComponentsEnum.LoggerMiddleWare, `state before dispatch ${action.type} action`, api.getState());

  const actionValue = next(action);

  log(ComponentsEnum.LoggerMiddleWare, `state after dispatch ${action.type} action`, api.getState());

  return actionValue;
};
