import React, {useState, useEffect} from 'react';
import Display from'./Display';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
// import { useSelector } from 'react-redux';
// import { startedTimeSelector } from '../redux/selectors/startedTimeSelector';
// import { pausedTimeSelector } from '../redux/selectors/pausedTimeSelector';
import log, { ComponentsEnum } from './LogDebug';
import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';
import IHavePausedTime from '../redux/state/IHavePausedTime';
import IHaveStatus from '../redux/state/IHaveStatus';
import IHaveStartedTime from '../redux/state/IHaveStartedTime';
// import { statusSelector } from '../redux/selectors/statusSelector';
// import { StopWatchStatusEnum } from '../redux/reducers/StopWatchStatusEnum';

function timeToShow( whenStartedTime: number, whenPausedTime: number|undefined)
{
  if (!whenStartedTime) return 0;

  if (!whenPausedTime || whenPausedTime !== null) return Date.now() - whenStartedTime;
  
  return whenPausedTime!-whenStartedTime;
}

interface ElapsedTimeDisplayProps extends 
  IHaveStatus,
  IHaveStartedTime,
  IHavePausedTime{
}

// TODO: Use effect to dont rerender with same value
// is not stopping, we should subscribe when there are state change or paused/start times
export default function ElapsedTimeDisplay(props:ElapsedTimeDisplayProps)
{ 
  // const startedTime = useSelector(startedTimeSelector);
  // const pausedTime = useSelector(pausedTimeSelector);
  const timeToShowInMilliSeconds = timeToShow(props.startedTime, props.pausedTime);
  const valueToDisplayPretty = FormatMilliSeconds(timeToShowInMilliSeconds);
  const [value, setValue] = useState(valueToDisplayPretty);

  useEffect(() => {
    const request = requestAnimationFrame(() => {
     if (props.status !== StopWatchStatusEnum.PAUSED) {
        log(ComponentsEnum.ElapsedTimeDisplay, `elapsedTimeDisplay ${valueToDisplayPretty}. timeToShowInMilliSeconds: ${timeToShowInMilliSeconds}, startedTime: ${props.startedTime}, pausedTime: ${props.pausedTime}`);
        setValue(FormatMilliSeconds(timeToShow(props.startedTime, props.pausedTime)));          
      } else
      {
        log(ComponentsEnum.ElapsedTimeDisplay, 'UseEffect skip')
      }
    });
    return () => cancelAnimationFrame(request);
  }, [timeToShow(props.startedTime, props.pausedTime)]);
  
  return (
    <div className="elapsedTime">
      <Display value={value} />
    </div>
  );
}

