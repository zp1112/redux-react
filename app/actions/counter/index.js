import * as counter from '../../constants/counter/TrafficCounter';

export function startCount(){
  return {type:counter.STARTCOUNT}
}
export function resetCount(num){
  return {
    type:counter.RESETCOUNT,
    text: num
  }
}
