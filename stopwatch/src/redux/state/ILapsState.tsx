export interface lap {
    index: number;
    totalTime: number;  
}

export interface lapsList {
  records:lap[],
  sumOfLaps:number,
  minValueIndex:number,
  maxValueIndex:number,
}
export const emptyLapsList:lapsList = {
  records:[],
  sumOfLaps:0,
  minValueIndex:-1,
  maxValueIndex:-1,
}
export default interface ILapsState {
  laps:lapsList
}