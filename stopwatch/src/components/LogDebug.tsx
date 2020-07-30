
const isDebugMode:boolean = true;
export enum ComponentsEnum {
  Buttons = "Buttons",
  Display = "Display",
  ElapsedTimeDisplay ="ElapsedTimeDisplay",
  LapsList="LapsList",
  Redux="Redux",
}
const isDebugOnlyComponents:ComponentsEnum[] = []; // [ComponentsEnum.ElapsedTimeDisplay];

export default function log(component:ComponentsEnum, message?: any, ...optionalParams: any[]): void {
  if (isDebugMode)
  {
    if (isDebugOnlyComponents.length === 0 || isDebugOnlyComponents.indexOf(component) > -1)
    {
      console.log(`Component ${component}:`);
      console.log(message, ...optionalParams);
    }
  }
}