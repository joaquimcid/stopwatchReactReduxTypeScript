import React from 'react';
import FormatMilliSeconds from '../converter/FormatMilliSeconds';
import log, { ComponentsEnum } from './LogDebug';
import { useSelector } from 'react-redux';
import { lapsSelector } from '../redux/selectors/lapsSelector';


interface lapRecordProps {
  index:number,
  milliSeconds:number,
  isMinValue:boolean,
  isMaxValue:boolean,
}

function LapRecord(lapRecord:lapRecordProps) {
  let classMinMaxValue = lapRecord.isMaxValue ? "lapRecordMaxium" : "";
  classMinMaxValue = lapRecord.isMinValue ? "lapRecordMinium" : classMinMaxValue;

  return (<li key={lapRecord.index} className={classMinMaxValue}>
            <div className="lapRecordLabel">Lap {lapRecord.index}</div>
            <div className="lapRecordValue">{FormatMilliSeconds(lapRecord.milliSeconds)}</div>
          </li>);

}

export default function LapsList(){
  const laps = useSelector(lapsSelector);

  log(ComponentsEnum.LapsList, 'laps component');
  log(ComponentsEnum.LapsList, laps);
  
  const listItems = laps.records.map((item, index, array) =>
    <LapRecord key={item.index}
               index={item.index} 
               milliSeconds={item.totalTime} 
               isMinValue={laps.minValueIndex === index} 
               isMaxValue={laps.maxValueIndex === index}/>
  );

  return <div className="laps"><ul>{listItems}</ul></div>;
}
