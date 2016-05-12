import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/traffic';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

export default function trafficStore(initState) {
  return createStore(rootReducer, initState, applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  ), window.devToolsExtension ? window.devToolsExtension() : undefined);
}
