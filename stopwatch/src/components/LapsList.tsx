import React from 'react';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import log, { ComponentsEnum } from './LogDebug';
import { useSelector } from 'react-redux';
import { lapsSelector } from '../redux/selectors/lapsSelector';


interface lapRecordProps {
  index:number,
  // value:string,
  milliSeconds:number,
}

function LapRecord(lapRecord:lapRecordProps) {
  return (<li key={lapRecord.index}>
            <div className="lapRecordLabel">Lap {lapRecord.index}</div>
            <div className="lapRecordValue">{FormatMilliSeconds(lapRecord.milliSeconds)}</div>
          </li>);

}


export default function LapsList(){
  const laps = useSelector(lapsSelector);

  log(ComponentsEnum.LapsList, 'laps component');
  
  const listItems = laps.map((item, index, array) =>
    <LapRecord index={index+1} milliSeconds={item.totalTime} />
  );

  return <div className="laps"><ul>{listItems}</ul></div>;
}
