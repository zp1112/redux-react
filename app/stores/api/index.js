import {createStore} from 'redux'
import apiReducer from '../../reducers/api/'

export default function apiStore(initState){
  return createStore(apiReducer,initState); // 初始化创建
}
