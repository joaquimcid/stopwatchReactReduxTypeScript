import { Action } from "redux";

  
export default interface userAction extends Action<string> {
  type:string;
};

export const InitialAction:userAction =  { type:"INITIAL" };
export const StartAction:userAction =  { type:"START" };
export const PauseAction:userAction =  { type:"PAUSE" };
export const ContinueAction:userAction =  { type:"CONTINUE" };
export const NewLapAction:userAction =  { type:"NEWLAP" };
export const ResetAction:userAction =  { type:"RESET" };