import React, {useState, useEffect} from 'react';
import Display from'./Display';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import IHavePausedTime from '../redux/state/IHavePausedTime';
import IHaveStartedTime from '../redux/state/IHaveStartedTime';
import log, { ComponentsEnum } from './LogDebug';


interface ElapsedTimeDisplayProps extends 
  IHaveStartedTime,
  IHavePausedTime{
}

export default function ElapsedTimeDisplay(props:ElapsedTimeDisplayProps)
{ 
  const [value, setValue] = useState(0);
  useEffect(() => {
    let lastRequestAnimationFrame:number = -1;

    function performUpdate(started:number, paused?:number):void {
      let newValue:[number, string] = started === 0 ?  [0, 'INITIAL'] 
                       : ( !!paused ?  [paused! - started, 'PAUSED'] 
                                    :  [Date.now() - started, 'STARTED']);
     
     log(ComponentsEnum.ElapsedTimeDisplay, `useEffect status: ${newValue[1]} value ${newValue[0]}`)

      setValue(newValue[0]);
      lastRequestAnimationFrame = requestAnimationFrame(() => performUpdate(props.startedTime, props.pausedTime));
    }
    lastRequestAnimationFrame = requestAnimationFrame(() => performUpdate(props.startedTime, props.pausedTime));
    return () => {
      if (lastRequestAnimationFrame !== -1) return cancelAnimationFrame(lastRequestAnimationFrame);
    };
  }, [props.startedTime, props.pausedTime]);
  
  return (
    <div className="elapsedTime">
      <Display value={FormatMilliSeconds(value)} />
    </div>
  );
}

