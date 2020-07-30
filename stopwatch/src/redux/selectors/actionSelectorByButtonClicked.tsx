// TODO NOT SURE IF IS GONNA WORK OR SHOULD USE 
// CREATESELECTOR

import IHaveStatus from '../state/IHaveStatus';
import { StopWatchStatusEnum } from '../reducers/StopWatchStatusEnum';
import log, { ComponentsEnum } from '../../components/LogDebug';

function newLapOrResetClicked(status: StopWatchStatusEnum) {
  if (status === StopWatchStatusEnum.PAUSED) {
    log(ComponentsEnum.Redux, 'LAP_RESET_BTN: PAUSED -> RESET');
    return 'RESET';
  }

  if (status === StopWatchStatusEnum.STARTED) {
    log(ComponentsEnum.Redux, 'LAP_RESET_BTN: STARTED -> NEWLAP');
    return 'NEWLAP';
  }
}

function startOrPauseClicked(status: StopWatchStatusEnum) {

  if (status === StopWatchStatusEnum.INITIAL) {
    log(ComponentsEnum.Redux, 'START_PAUSE_BTN: INITIAL -> START');
    return 'START';
  }

  if (status === StopWatchStatusEnum.PAUSED) {
    log(ComponentsEnum.Redux, 'START_PAUSE_BTN: PAUSED -> CONTINUE');
    return 'CONTINUE';
  }

  if (status === StopWatchStatusEnum.STARTED) {
    log(ComponentsEnum.Redux, 'START_PAUSE_BTN: STARTED -> PAUSE');
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
    log(ComponentsEnum.Redux, actionSelectorByButtonClicked + ": buttonClicked not recognised")
    return undefined;
  }
}
