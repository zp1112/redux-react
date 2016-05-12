
import React, { Component } from 'react';
import NavLink from './NavLink';
class Template extends Component {
  render() {
    return (
      <div>
        <h1>template</h1>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/echarts">echarts</NavLink></li>
          <li><NavLink to="/lights">lights</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default Template;
