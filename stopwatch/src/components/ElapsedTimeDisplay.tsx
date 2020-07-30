import React, {useState, useEffect} from 'react';
import Display from'./Display';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import IHavePausedTime from '../redux/state/IHavePausedTime';
import IHaveStartedTime from '../redux/state/IHaveStartedTime';
import log, { ComponentsEnum } from './LogDebug';

function isStoppedOrPausedOrRunning(started:number, paused:number|undefined):[number, string] { 
  return started === 0 ?  [0, 'INITIAL'] 
                       : ( !!paused ?  [paused! - started, 'PAUSED'] 
                                    :  [Date.now() - started, 'STARTED']);
}

interface ElapsedTimeDisplayProps extends 
  IHaveStartedTime,
  IHavePausedTime{
}

export default function ElapsedTimeDisplay(props:ElapsedTimeDisplayProps)
{ 
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    const request = requestAnimationFrame(() => {
      let currentValueState:[number, string] = isStoppedOrPausedOrRunning(props.startedTime, props.pausedTime);
      log(ComponentsEnum.ElapsedTimeDisplay, `useEffect status: ${currentValueState[1]} value ${currentValueState[0]}`)
      setValue(currentValueState[0]);
    });
    return () => cancelAnimationFrame(request);
  });
  
  return (
    <div className="elapsedTime">
      <Display value={FormatMilliSeconds(value)} />
    </div>
  );
}

