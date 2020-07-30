
export default function FormatMilliSeconds(milliSeconds:number){
  if (!milliSeconds || milliSeconds === null || milliSeconds === 0) return "00:00,00";

  let elapsedSeconds = Math.floor(milliSeconds / 1000);
  
  let cs = Math.floor((milliSeconds % 999) / 10).toString().padStart(2, '0');
  let s = (elapsedSeconds % 60).toString().padStart(2, '0');
  let m = (Math.floor(elapsedSeconds / 60) % 60).toString().padStart(2, '0');
  let hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, '0');
  hours = hours !== '00' ? `${hours}:` : '';

  return `${hours}${m}:${s},${cs}`;
}
