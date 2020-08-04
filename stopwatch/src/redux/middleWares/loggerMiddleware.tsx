import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import IAction from '../actions/IAction';
import log, { ComponentsEnum, logGroup, logGroupEnd } from '../../components/LogDebug';

// TODO Understand this line
export const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<IAction>) => (action:IAction) => {
  logGroup(ComponentsEnum.LoggerMiddleWare, action.type);

  log(ComponentsEnum.LoggerMiddleWare, `state before dispatch ${action.type} action`, api.getState());

  const actionValue = next(action);

  log(ComponentsEnum.LoggerMiddleWare, `state after dispatch ${action.type} action`, api.getState());
  logGroupEnd(ComponentsEnum.LoggerMiddleWare);

  return actionValue;
};
