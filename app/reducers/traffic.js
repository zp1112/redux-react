import { combineReducers } from 'redux';
import light from './light/';
import count from './counter/';
import api from './api';
import echarts from './echarts';

const rootReducer = combineReducers({
  light,
  count,
  api,
  echarts
});

export default rootReducer;
