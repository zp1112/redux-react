import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
// import routes from './routes';
import trafficStore from './stores/traffic';

// 声明store
let store = trafficStore();


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={require('react-router?name=default!./components/layout/demo.js')}>
        <Route path="/" component={require('react-router?name=default!./components/home/demo.js')} />
        <Route path="/lights" component={require('react-router?name=default!./components/counter/demo.js')} />
        <Route path="/echarts" component={require('react-router?name=default!./components/echarts/index.js')} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
