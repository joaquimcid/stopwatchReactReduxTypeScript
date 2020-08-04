import React from 'react';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatch/StopWatchStatusEnum';
import { useSelector } from 'react-redux';
import { statusSelector } from '../redux/selectors/statusSelector';
import { useDispatch } from 'react-redux'
import { StopWatchActionType } from '../redux/actions/StopWatchAction';
import log, { ComponentsEnum } from './LogDebug';
import UserAction from '../redux/actions/StopWatchAction';

export default function Buttons() {
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();
  /* status => INITIAL, STARTED, PAUSED */
  function newLapOrResetClicked (status:StopWatchStatusEnum) {
    if (status === StopWatchStatusEnum.PAUSED) {
      log(ComponentsEnum.Buttons, 'LAP_RESET_BTN: PAUSED -> Dispatch(RESET)');
      return dispatch(UserAction(StopWatchActionType.RESET));
    }
  
    if(status === StopWatchStatusEnum.STARTED) {
      log(ComponentsEnum.Buttons, 'LAP_RESET_BTN: STARTED -> Dispatch(NEWLAP)');
      return dispatch(UserAction(StopWatchActionType.NEWLAP));
    }
  };
  
  function startOrPauseClicked(status:StopWatchStatusEnum) {
   
    if(status === StopWatchStatusEnum.INITIAL)
    {
      log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: INITIAL -> Dispatch(START)');
      return dispatch(UserAction(StopWatchActionType.START));
    }
  
    if (status === StopWatchStatusEnum.PAUSED)
    {
      log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: PAUSED -> Dispatch(CONTINUE)');
      return dispatch(UserAction(StopWatchActionType.CONTINUE));
    }
  
    if(status === StopWatchStatusEnum.STARTED)
    {
      log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: STARTED -> Dispatch(PAUSE)');
      return dispatch(UserAction(StopWatchActionType.PAUSE));
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
  </div>
  );
}