import IAction from "./IAction";

export enum UserActionType {
  START = "START",
  PAUSE = "PAUSE",
  CONTINUE = "CONTINUE",
  NEWLAP = "NEWLAP",
  RESET = "RESET",
}

export default function UserAction(actionType: UserActionType): IAction {
  return {type: actionType};
}