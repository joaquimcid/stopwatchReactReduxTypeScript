import { Action } from "redux";

export enum UserActionEnum {
  START = "START",
  PAUSE = "PAUSE",
  CONTINUE = "CONTINUE",
  NEWLAP = "NEWLAP",
  RESET = "RESET",
}

export default function UserAction(typeAction:UserActionEnum):Action<UserActionEnum> {
  return  { type: typeAction };
} 
