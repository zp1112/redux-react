import React from 'react';
import { Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

module.exports = (
  <Route component={require('react-router?name=default!../components/layout/demo.js')}>
    <Route path="/" component={require('react-router?name=default!../components/counter/demo.js')}/>
  </Route>
);
