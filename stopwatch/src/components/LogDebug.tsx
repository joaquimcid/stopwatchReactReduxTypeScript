const isDebugMode:boolean = true;
export enum ComponentsEnum {
  Buttons = "Buttons",
  ElapsedTimeDisplay ="ElapsedTimeDisplay",
  LapsList="LapsList",
  Redux="Redux",
  StopWatchReducer="StopWatchReducer",
  LoggerMiddleWare="LoggerMiddleWare",
}
const isDebugOnlyComponents:ComponentsEnum[] = [ComponentsEnum.LoggerMiddleWare, ComponentsEnum.StopWatchReducer];

function isValid(component:ComponentsEnum):boolean {
  if (!isDebugMode) return false;

  return (isDebugOnlyComponents.length === 0 || isDebugOnlyComponents.indexOf(component) > -1);
}

export default function log(component:ComponentsEnum, message?: any, ...optionalParams: any[]): void {
  if (isValid(component))
  {
      console.log(`${component}:${message}`, ...optionalParams);
  }
}

export function logGroup(component:ComponentsEnum, ...label: any[]): void {
  if (isValid(component)) console.group(label);
}

export function logGroupEnd(component:ComponentsEnum): void {
  if (isValid(component)) console.groupEnd();
}