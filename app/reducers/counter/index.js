import {STARTCOUNT, RESETCOUNT} from '../../constants/counter/TrafficCounter';
// 定义初始化状态，初始化状态是常量
// 初始状态是10s
const initState = {
  count:7 // 持续时间20ms
}

// 定义灯转换的reducer函数
export default function count(state=initState,action){
  switch(action.type){
    case STARTCOUNT:
      return {
        count:state.count-1
      };
    case RESETCOUNT:
    return {
      count:action.text
    };
    default:
      return state
    }
  }
