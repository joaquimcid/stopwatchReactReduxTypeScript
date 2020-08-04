import { iRootState } from "../state";

export const startedTimeSelector = (state: iRootState) => state.stopWatch.startedTime;
