import { iRootState } from '../state/index';
export const lapsSelector = (state: iRootState) => state.stopWatch.laps;
