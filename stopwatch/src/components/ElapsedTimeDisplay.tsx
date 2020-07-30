import React, {useState, useEffect} from 'react';
import Display from'./Display';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import log, { ComponentsEnum } from './LogDebug';
import IHavePausedTime from '../redux/state/IHavePausedTime';
import IHaveStartedTime from '../redux/state/IHaveStartedTime';

interface ElapsedTimeDisplayProps extends 
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
      // INITAL
      if(props.startedTime === 0)
      {
        log(ComponentsEnum.ElapsedTimeDisplay, ` Status: INITAL, Value: ${0}`);
        setValue(0);
      }
      // PAUSED
      else if (!!props.pausedTime) {
        log(ComponentsEnum.ElapsedTimeDisplay, ` Status: PAUSED, Value: ${props.pausedTime! - props.startedTime}`);
        setValue(props.pausedTime! - props.startedTime);  
      }
      // STARTED
      else {
        log(ComponentsEnum.ElapsedTimeDisplay, ` Status: STARTED, Value: ${Date.now() - props.startedTime}`);
        setValue(Date.now() - props.startedTime);
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

