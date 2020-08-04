import { iRootState } from "../state";

export const pausedTimeSelector = (state: iRootState) => state.stopWatch.pausedTime;
