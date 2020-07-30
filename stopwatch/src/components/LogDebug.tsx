
const isDebugMode:boolean = true;
export enum ComponentsEnum {
  Buttons,
  Display,
  ElapsedTimeDisplay,
  LapsList,
  Redux,
}
const isDebugOnlyComponents:ComponentsEnum[] = []; // [ComponentsEnum.ElapsedTimeDisplay];

export default function log(component:ComponentsEnum, message?: any, ...optionalParams: any[]): void {
  if (isDebugMode)
  {
    if (!isDebugOnlyComponents || isDebugOnlyComponents.indexOf(component) > -1)
    console.log(message, ...optionalParams);
  }
}