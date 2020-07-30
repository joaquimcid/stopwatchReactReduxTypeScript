import React from 'react';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';
import { useSelector } from 'react-redux';
import { statusSelector } from '../redux/selectors/statusSelector';
import { useDispatch } from 'react-redux'
import { StartAction, NewLapAction, ResetAction, ContinueAction, PauseAction } from '../redux/actions/UserAction';
import UserAction from '../redux/actions/UserAction';







export default function Buttons() {
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();

  function onButtonClick(action:UserAction) {
    // {() => dispatch({ type: action })}
  
    console.log("onButtonClick, action to dispatch: " + action);
    dispatch(action);
    //console.log(action);
    // const dispatch = useDispatch();
    // () => dispatch(PauseAction);
  }

  /* status => INITIAL, STARTED, PAUSED */
  function newLapOrResetClicked (status:StopWatchStatusEnum) {
    if (status === StopWatchStatusEnum.PAUSED) {
      console.log('LAP_RESET_BTN: PAUSED -> RESET');
      return onButtonClick(ResetAction);
    }
  
    if(status === StopWatchStatusEnum.STARTED) {
      console.log('LAP_RESET_BTN: STARTED -> NEWLAP');
      return onButtonClick(NewLapAction);
    }
  };
  
  function startOrPauseClicked(status:StopWatchStatusEnum) {
   
    if(status === StopWatchStatusEnum.INITIAL)
    {
      console.log('START_PAUSE_BTN: INITIAL -> START');
      return onButtonClick(StartAction);
    }
  
    if (status === StopWatchStatusEnum.PAUSED)
    {
      console.log('START_PAUSE_BTN: PAUSED -> CONTINUE');
      return onButtonClick(ContinueAction);
    }
  
    if(status === StopWatchStatusEnum.STARTED)
    {
      console.log('START_PAUSE_BTN: STARTED -> PAUSE');
      return onButtonClick(PauseAction);
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