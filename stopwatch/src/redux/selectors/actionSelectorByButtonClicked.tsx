// TODO NOT SURE IF IS GONNA WORK OR SHOULD USE 
// CREATESELECTOR

import IHaveStatus from '../state/IHaveStatus';
import { StopWatchStatusEnum } from '../reducers/StopWatchStatusEnum';

function newLapOrResetClicked(status: StopWatchStatusEnum) {
  if (status === StopWatchStatusEnum.PAUSED) {
    console.log('LAP_RESET_BTN: PAUSED -> RESET');
    return 'RESET';
  }

  if (status === StopWatchStatusEnum.STARTED) {
    console.log('LAP_RESET_BTN: STARTED -> NEWLAP');
    return 'NEWLAP';
  }
}

function startOrPauseClicked(status: StopWatchStatusEnum) {

  if (status === StopWatchStatusEnum.INITIAL) {
    console.log('START_PAUSE_BTN: INITIAL -> START');
    return 'START';
  }

  if (status === StopWatchStatusEnum.PAUSED) {
    console.log('START_PAUSE_BTN: PAUSED -> CONTINUE');
    return 'CONTINUE';
  }

  if (status === StopWatchStatusEnum.STARTED) {
    console.log('START_PAUSE_BTN: STARTED -> PAUSE');
    return 'PAUSE';
  }
}


export default function actionSelectorByButtonClicked(buttonClicked: string, state: IHaveStatus) 
{
  if(buttonClicked === "lapResetBtn")
  return newLapOrResetClicked(state.status);
  else if(buttonClicked === "startStopBtn")
  return startOrPauseClicked(state.status);
  else {
    console.log(actionSelectorByButtonClicked + ": buttonClicked not recognised")
    return undefined;
  }
}
