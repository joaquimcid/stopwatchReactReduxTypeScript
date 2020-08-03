import React, {useState, useEffect} from 'react';
import Display from'./Display';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import IPausedTimeState from '../redux/state/IPausedTimeState';
import IStartedTimeState from '../redux/state/IStartedTimeState';
import log, { ComponentsEnum } from './LogDebug';


interface ElapsedTimeDisplayProps extends 
  IStartedTimeState,
  IPausedTimeState{
}

export default function ElapsedTimeDisplay(props:ElapsedTimeDisplayProps)
{ 
  const [value, setValue] = useState(0);
  useEffect(() => {
    let lastRequest:number = -1;

    function performUpdate(started:number, paused?:number):void {
      let newValue:[number, string] = started === 0 ?  [0, 'INITIAL'] 
                       : ( !!paused ?  [paused! - started, 'PAUSED'] 
                                    :  [Date.now() - started, 'STARTED']);
      
      log(ComponentsEnum.ElapsedTimeDisplay, `useEffect status: ${newValue[1]} value ${value} newValue ${newValue[0]} `)
     
      // if (value !== newValue[0]) 
      setValue(newValue[0]);
    }
    
    lastRequest = requestAnimationFrame(() => performUpdate(props.startedTime, props.pausedTime));
    
    return () => { if (lastRequest !== -1) return cancelAnimationFrame(lastRequest);};
  }, [props.startedTime, props.pausedTime, value]);
  
  return (
    <div className="elapsedTime">
      <Display value={FormatMilliSeconds(value)} />
    </div>
  );
}

