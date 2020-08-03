import { Action } from "redux";

export enum UserActionType {
  START = "START",
  PAUSE = "PAUSE",
  CONTINUE = "CONTINUE",
  NEWLAP = "NEWLAP",
  RESET = "RESET",
}

export default function UserAction(actionType: UserActionType): Action<UserActionType> {
  return {type: actionType};
}