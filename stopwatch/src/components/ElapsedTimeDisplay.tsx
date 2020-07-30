import React, {useState, useEffect} from 'react';
import Display from'./Display';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import log, { ComponentsEnum } from './LogDebug';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';
import IHavePausedTime from '../redux/state/IHavePausedTime';
import IHaveStatus from '../redux/state/IHaveStatus';
import IHaveStartedTime from '../redux/state/IHaveStartedTime';

interface ElapsedTimeDisplayProps extends 
  IHaveStatus,
  IHaveStartedTime,
  IHavePausedTime{
}

// TODO: Use effect to dont rerender with same value
// is not stopping, we should subscribe when there are state change or paused/start times
export default function ElapsedTimeDisplay(props:ElapsedTimeDisplayProps)
{ 
  const [value, setValue] = useState(0);

  useEffect(() => {
    const request = requestAnimationFrame(() => {
      
      if (props.status === StopWatchStatusEnum.PAUSED) {
        log(ComponentsEnum.ElapsedTimeDisplay, ` Status: ${props.status}, Value: ${props.pausedTime! - props.startedTime}`);
        setValue(props.pausedTime! - props.startedTime);          
      } else if(props.status === StopWatchStatusEnum.STARTED)
      {
        log(ComponentsEnum.ElapsedTimeDisplay, ` Status: ${props.status}, Value: ${Date.now() - props.startedTime}`);
        setValue(Date.now() - props.startedTime);
      } else {
        log(ComponentsEnum.ElapsedTimeDisplay, ` Status: ${props.status}, Value: ${0}`);
        setValue(0);
      }
      
    });
    return () => cancelAnimationFrame(request);
  });
  
  return (
    <div className="elapsedTime">
      <Display value={FormatMilliSeconds(value)} />
    </div>
  );
}

