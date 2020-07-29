import React from 'react';

function onButtonClick(action:string) {
  console.log(action);
}

function newLapOrResetClicked (status:string) {
  if (status === 'PAUSED') {
    console.log('LAP_RESET_BTN: PAUSED -> RESET');
    return onButtonClick('RESET');
  }

  if(status === 'STARTED') {
    console.log('LAP_RESET_BTN: STARTED -> NEWLAP');
    return onButtonClick('NEWLAP');
  }
};

function startOrPauseClicked(status:string) {
 
  if(status === 'INITIAL')
  {
    console.log('START_PAUSE_BTN: INITIAL -> START');
    return onButtonClick('START');
  }

  if (status === 'PAUSED')
  {
    console.log('START_PAUSE_BTN: PAUSED -> CONTINUE');
    return onButtonClick('CONTINUE');
  }

  if(status === 'STARTED')
  {
    console.log('START_PAUSE_BTN: STARTED -> PAUSE');
    return onButtonClick('PAUSE');
  }
};

interface ButtonsProps {
  status:string;
}

export default function Buttons(props:ButtonsProps) {
  /* status => INITIAL, STARTED, PAUSED */

  return (
    <div id="buttons" className ="buttons">
      <button id="lapResetBtn" 
              onClick = {() => newLapOrResetClicked(props.status)} 
              className={`button buttonLapWhen${props.status}`}>   
              { props.status === "PAUSED" ? "Reset" : "Lap"} </button>
      
      <button id="startStopBtn" 
              onClick = {() => startOrPauseClicked(props.status)} 
              className={`button buttonStartWhen${props.status}`}>
                { props.status === "STARTED" ? "Stop" : "Start" } </button>
      
      {props.status}
  </div>
  );
}