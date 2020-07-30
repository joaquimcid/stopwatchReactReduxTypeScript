import React from 'react';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import log, { ComponentsEnum } from './LogDebug';
import { useSelector } from 'react-redux';
import { lapsSelector } from '../redux/selectors/lapsSelector';

export default function LapsList(){
  const laps = useSelector(lapsSelector);

  log(ComponentsEnum.LapsList, 'laps component');
  
  const listItems = laps.map((item, index, array) =>
    <li key={index}>Lap {item.index}__________{FormatMilliSeconds(item.totalTime)}__________{item.totalTime}</li>
  );

  return <div className="laps"><ul>{listItems}</ul></div>;
}
