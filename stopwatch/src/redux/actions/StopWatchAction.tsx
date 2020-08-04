import { Action } from "redux";

export enum StopWatchActionType {
  START = "START",
  PAUSE = "PAUSE",
  CONTINUE = "CONTINUE",
  NEWLAP = "NEWLAP",
  RESET = "RESET",
}

export interface IStopWatchAction extends Action<StopWatchActionType> {};

export default function StopWatchAction(actionType: StopWatchActionType): IStopWatchAction {
  return {type: actionType};
}

