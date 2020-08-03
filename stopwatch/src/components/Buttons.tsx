import React from 'react';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';
import { useSelector } from 'react-redux';
import { statusSelector } from '../redux/selectors/statusSelector';
import { useDispatch } from 'react-redux'
import UserAction, { UserActionEnum } from '../redux/actions/UserAction';
import log, { ComponentsEnum } from './LogDebug';

export default function Buttons() {
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();
  /* status => INITIAL, STARTED, PAUSED */
  function newLapOrResetClicked (status:StopWatchStatusEnum) {
    if (status === StopWatchStatusEnum.PAUSED) {
      log(ComponentsEnum.Buttons, 'LAP_RESET_BTN: PAUSED -> Dispatch(RESET)');
      return dispatch(UserAction(UserActionEnum.RESET));
    }
  
    if(status === StopWatchStatusEnum.STARTED) {
      log(ComponentsEnum.Buttons, 'LAP_RESET_BTN: STARTED -> Dispatch(NEWLAP)');
      return dispatch(UserAction(UserActionEnum.NEWLAP));
    }
  };
  
  function startOrPauseClicked(status:StopWatchStatusEnum) {
   
    if(status === StopWatchStatusEnum.INITIAL)
    {
      log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: INITIAL -> Dispatch(START)');
      return dispatch(UserAction(UserActionEnum.START));
    }
  
    if (status === StopWatchStatusEnum.PAUSED)
    {
      log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: PAUSED -> Dispatch(CONTINUE)');
      return dispatch(UserAction(UserActionEnum.CONTINUE));
    }
  
    if(status === StopWatchStatusEnum.STARTED)
    {
      log(ComponentsEnum.Buttons, 'START_PAUSE_BTN: STARTED -> Dispatch(PAUSE)');
      return dispatch(UserAction(UserActionEnum.PAUSE));
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