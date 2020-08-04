import { combineReducers } from 'redux';
import StopWatchReducer from './StopWatch/StopWatchReducer';

// https://stackoverflow.com/questions/38652789/correct-usage-of-reduce-reducers/44371190#44371190
export const rootReducer = combineReducers({
  stopWatch: StopWatchReducer
});