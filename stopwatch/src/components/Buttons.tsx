import React from 'react';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';
import { useSelector } from 'react-redux';
// import { currentStatus } from '../redux/selectors/statusSelector';
// import UserAction, {PauseAction} from '../redux/actions/UserAction';
// import { useDispatch, useSelector } from 'react-redux';
import {statusSelector} from '../redux/selectors/statusSelector';

function onButtonClick(action:string) {
  //console.log(action);
  // const dispatch = useDispatch();
  // () => dispatch(PauseAction);
}


function newLapOrResetClicked (status:StopWatchStatusEnum) {
  if (status === StopWatchStatusEnum.PAUSED) {
    console.log('LAP_RESET_BTN: PAUSED -> RESET');
    return onButtonClick('RESET');
  }

  if(status === StopWatchStatusEnum.STARTED) {
    console.log('LAP_RESET_BTN: STARTED -> NEWLAP');
    return onButtonClick('NEWLAP');
  }
};

function startOrPauseClicked(status:StopWatchStatusEnum) {
 
  if(status === StopWatchStatusEnum.INITIAL)
  {
    console.log('START_PAUSE_BTN: INITIAL -> START');
    return onButtonClick('START');
  }

  if (status === StopWatchStatusEnum.PAUSED)
  {
    console.log('START_PAUSE_BTN: PAUSED -> CONTINUE');
    return onButtonClick('CONTINUE');
  }

  if(status === StopWatchStatusEnum.STARTED)
  {
    console.log('START_PAUSE_BTN: STARTED -> PAUSE');
    return onButtonClick('PAUSE');
  }
};

interface ButtonsProps {
  status:StopWatchStatusEnum;
}

export default function Buttons() {
  /* status => INITIAL, STARTED, PAUSED */
  
  const status = useSelector(statusSelector);

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