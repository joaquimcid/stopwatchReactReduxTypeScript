import React from 'react';
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

  const valueToDisplay = FormatMilliSeconds(timeToShow(startedTime, pausedTime)); 
  log(ComponentsEnum.ElapsedTimeDisplay, `elapsedTimeDisplay: valueToDisplay: ${valueToDisplay}, startedTime: ${startedTime}, pausedTime: ${pausedTime}`);
  
  return (
    <div className="elapsedTime">
      <Display value={valueToDisplay} />
    </div>
  );
}

