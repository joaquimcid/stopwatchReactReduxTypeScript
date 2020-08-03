import { Action, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { UserActionType } from '../actions/UserAction';
import log, { ComponentsEnum, logGroup, logGroupEnd } from '../../components/LogDebug';

// TODO Understand this line
export const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<Action<UserActionType>>) => (action:Action<UserActionType>) => {
  logGroup(ComponentsEnum.LoggerMiddleWare, action.type);

  log(ComponentsEnum.LoggerMiddleWare, `state before dispatch ${action.type} action`, api.getState());

  const actionValue = next(action);

  log(ComponentsEnum.LoggerMiddleWare, `state after dispatch ${action.type} action`, api.getState());
  logGroupEnd(ComponentsEnum.LoggerMiddleWare);

  return actionValue;
};
