import React from 'react';
import Display from'./Display';
import FormatMilliSeconds from './FormatMilliSeconds';

interface ElapsedTimeProps {
  whenStartedTime: number;
  whenPausedTime: number;
}

function timeToShow(props:ElapsedTimeProps)
{
  if (!props.whenStartedTime) return 0;

  if (props.whenPausedTime !== null) return props.whenPausedTime-props.whenStartedTime;
  
  return Date.now() - props.whenStartedTime;
}

export default function ElapsedTimeDisplay(props:ElapsedTimeProps)
{ 
  const valueToDisplay = FormatMilliSeconds(timeToShow(props)); 
  
  return (
    <div className="elapsedTime">
      <Display value={valueToDisplay} />
    </div>
  );
}

