import React from 'react';
import lap from '../model/Lap';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';

interface LapsProp {
  laps:lap[];
}

export default function LapsList(props:LapsProp){

  console.log('laps component');
  
  const listItems = props.laps.map((item, index, array) =>
    <li key={index}>Lap {item.index}__________{FormatMilliSeconds(item.totalTime)}__________{item.totalTime}</li>
  );

  return <div className="laps"><ul>{listItems}</ul></div>;
}