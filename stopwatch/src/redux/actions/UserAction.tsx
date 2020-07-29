import { Action } from "redux";
import { UserActionEnum } from './UserActionEnum';

export default interface UserAction extends Action<UserActionEnum> {
  type:UserActionEnum;
};

export const StartAction:UserAction =  { type: UserActionEnum.START };
export const PauseAction:UserAction =  { type: UserActionEnum.PAUSE };
export const ContinueAction:UserAction =  { type:UserActionEnum.CONTINUE };
export const NewLapAction:UserAction =  { type:UserActionEnum.NEWLAP };
export const ResetAction:UserAction =  { type: UserActionEnum.RESET };