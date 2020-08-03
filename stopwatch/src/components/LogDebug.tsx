
const isDebugMode:boolean = true;
export enum ComponentsEnum {
  Buttons = "Buttons",
  ElapsedTimeDisplay ="ElapsedTimeDisplay",
  LapsList="LapsList",
  Redux="Redux",
  LoggerMiddleWare="LoggerMiddleWare",
}
const isDebugOnlyComponents:ComponentsEnum[] = [ComponentsEnum.ElapsedTimeDisplay];

export default function log(component:ComponentsEnum, message?: any, ...optionalParams: any[]): void {
  if (isDebugMode)
  {
    if (isDebugOnlyComponents.length === 0 || isDebugOnlyComponents.indexOf(component) > -1)
    {
      console.log(`${component}:${message}`, ...optionalParams);
      // console.log();
    }
  }
}