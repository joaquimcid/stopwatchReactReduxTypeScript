import { Action } from "redux";
import { UserActionType } from "./UserAction";

export default interface IAction extends Action<UserActionType> {

}
