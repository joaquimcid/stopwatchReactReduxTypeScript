import { Action, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { UserActionType } from '../actions/UserAction';
import log, { ComponentsEnum } from '../../components/LogDebug';

// TODO Understand this line
export const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<Action<UserActionType>>) => (action) => {
  
  log(ComponentsEnum.LoggerMiddleWare, 'state before dispatch', api.getState());

  const returnValue = next(action);

  log(ComponentsEnum.LoggerMiddleWare, 'state after dispatch', api.getState());

  return returnValue;
};
