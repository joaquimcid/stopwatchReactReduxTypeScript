import React, {useState, useEffect} from 'react';
import Display from'./Display';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import { useSelector } from 'react-redux';
import { startedTimeSelector } from '../redux/selectors/startedTimeSelector';
import { pausedTimeSelector } from '../redux/selectors/pausedTimeSelector';
import log, { ComponentsEnum } from './LogDebug';

function timeToShow( whenStartedTime: number, whenPausedTime: number|undefined)
{
  if (!whenStartedTime) return 0;

  if (!whenPausedTime || whenPausedTime !== null) return Date.now() - whenStartedTime;
  
  return whenPausedTime!-whenStartedTime;
}

export default function ElapsedTimeDisplay()
{ 
  const startedTime = useSelector(startedTimeSelector);
  const pausedTime = useSelector(pausedTimeSelector);
  const timeToShowInMilliSeconds = timeToShow(startedTime, pausedTime);
  const valueToDisplayPretty = FormatMilliSeconds(timeToShowInMilliSeconds);
  
  const [value, setValue] = useState(valueToDisplayPretty);
  useEffect(() => {
    const request = requestAnimationFrame(() => {
      log(ComponentsEnum.ElapsedTimeDisplay, `elapsedTimeDisplay ${valueToDisplayPretty}. timeToShowInMilliSeconds: ${timeToShowInMilliSeconds}, startedTime: ${startedTime}, pausedTime: ${pausedTime}`);
      setValue(FormatMilliSeconds(timeToShow(startedTime, pausedTime)));
    });
    return () => cancelAnimationFrame(request);
  });
  
  return (
    <div className="elapsedTime">
      <Display value={value} />
    </div>
  );
}

