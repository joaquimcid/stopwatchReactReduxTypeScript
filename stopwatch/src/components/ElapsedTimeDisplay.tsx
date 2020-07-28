import React from 'react';
import Display from'./Display';


interface ElapsedTimeProps {
  whenStartedTime: number;
  whenPausedTime: number;
}

export default function ElapsedTimeDisplay(props:ElapsedTimeProps)
{ 
  const timeToShow = props.whenStartedTime.toString(); 
  
  return  (
  <div className="elapsedTime">
    <Display value={timeToShow} />
  </div>
  );
}
