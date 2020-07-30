import React from 'react';
interface ValueToShow {
  value: string;
}
export default function Display (props:ValueToShow){
  return ( <div id="display" className ="display">{props.value}</div>) 
}