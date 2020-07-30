const isDebugMode:boolean = false;

export default function log(message?: any, ...optionalParams: any[]): void {
  if (isDebugMode)
  {
    console.log(message, ...optionalParams);
  }
}