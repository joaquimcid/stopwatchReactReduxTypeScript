import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { IStopWatchAction } from '../actions/StopWatchAction';
import log, { ComponentsEnum } from '../../components/LogDebug';
import { iRootState } from '../state/index';
import { logGroup, logGroupEnd } from '../../components/LogDebug';

// TODO Understand this line
export const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<IStopWatchAction>) => (action:IStopWatchAction) => {

  const oldValue:iRootState = api.getState();
  const actionValue = next(action);
  const newValue:iRootState = api.getState();
  
  logGroup(ComponentsEnum.LoggerMiddleWare, `Action dispatched ${action.type}`, action);
  log(ComponentsEnum.LoggerMiddleWare, `before dispatch`, oldValue);
  log(ComponentsEnum.LoggerMiddleWare, `after dispatch`, newValue);
  logGroupEnd(ComponentsEnum.LoggerMiddleWare);

  return actionValue;
};
