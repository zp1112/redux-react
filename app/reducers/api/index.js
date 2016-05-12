import {SERVERS, APPLICATIONS, APPLICATIONHOSTS, APPLICATIONINSTANCES} from '../../constants/api/api';

// 定义初始化状态，初始化状态是常量
// 初始状态是10s
const initState = {
  data: [{id: 123456, host: 'sss'}] // 持续时间20ms
};

// 定义灯转换的reducer函数
export default function callApi(state = initState, action) {
  switch (action.type) {
    case APPLICATIONS:
      return {data: action.data};
    case APPLICATIONHOSTS:
      return {data: action.data};
    case APPLICATIONINSTANCES:
      return {data: action.data};
    case SERVERS:
      return {data: action.data};
    default:
      return state;
  }
}
