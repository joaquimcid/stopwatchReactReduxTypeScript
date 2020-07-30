import React from 'react';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';
import { useSelector } from 'react-redux';
import { statusSelector } from '../redux/selectors/statusSelector';
import { useDispatch } from 'react-redux'
import { StartAction, NewLapAction, ResetAction, ContinueAction, PauseAction } from '../redux/actions/UserAction';
import log from './LogDebug';

export default function Buttons() {
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();
  /* status => INITIAL, STARTED, PAUSED */
  function newLapOrResetClicked (status:StopWatchStatusEnum) {
    if (status === StopWatchStatusEnum.PAUSED) {
      log('LAP_RESET_BTN: PAUSED -> Dispatch(RESET)');
      return dispatch(ResetAction);
    }
  
    if(status === StopWatchStatusEnum.STARTED) {
      log('LAP_RESET_BTN: STARTED -> Dispatch(NEWLAP)');
      return dispatch(NewLapAction);
    }
  };
  
  function startOrPauseClicked(status:StopWatchStatusEnum) {
   
    if(status === StopWatchStatusEnum.INITIAL)
    {
      log('START_PAUSE_BTN: INITIAL -> Dispatch(START)');
      return dispatch(StartAction);
    }
  
    if (status === StopWatchStatusEnum.PAUSED)
    {
      log('START_PAUSE_BTN: PAUSED -> Dispatch(CONTINUE)');
      return dispatch(ContinueAction);
    }
  
    if(status === StopWatchStatusEnum.STARTED)
    {
      log('START_PAUSE_BTN: STARTED -> Dispatch(PAUSE)');
      return dispatch(PauseAction);
    }
  };

  return (
    <div id="buttons" className ="buttons">
      <button id="lapResetBtn" 
              onClick = {() => newLapOrResetClicked(status)} 
              className={`button buttonLapWhen${status}`}>   
              { status === StopWatchStatusEnum.PAUSED ? "Reset" : "Lap"} </button>
      
      <button id="startStopBtn" 
              onClick = {() => startOrPauseClicked(status)} 
              className={`button buttonStartWhen${status}`}>
                { status === StopWatchStatusEnum.STARTED ? "Stop" : "Start" } </button>
      {status}
  </div>
  );
}