import React from 'react';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';
// import UserAction, {PauseAction} from '../redux/actions/UserAction';
// import {useDispatch} from 'react-redux';

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

export default function Buttons(props:ButtonsProps) {
  /* status => INITIAL, STARTED, PAUSED */

  return (
    <div id="buttons" className ="buttons">
      <button id="lapResetBtn" 
              onClick = {() => newLapOrResetClicked(props.status)} 
              className={`button buttonLapWhen${props.status}`}>   
              { props.status === StopWatchStatusEnum.PAUSED ? "Reset" : "Lap"} </button>
      
      <button id="startStopBtn" 
              onClick = {() => startOrPauseClicked(props.status)} 
              className={`button buttonStartWhen${props.status}`}>
                { props.status === StopWatchStatusEnum.STARTED ? "Stop" : "Start" } </button>
      
      {props.status}
  </div>
  );
}