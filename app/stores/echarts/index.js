import {createStore} from 'redux';
import echartsReducer from '../../reducers/echarts/';

export default function counterStore(initState) {
  return createStore(echartsReducer, initState); // 初始化创建
}
