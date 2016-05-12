import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../actions/counter/';
import * as LightActions from '../../actions/light/';
import * as ApiActions from '../../actions/api';
import Counter from './index';
import Light from '../light';

class App extends Component {
  constructor() {
    super();
    this.bindHandler('changeColor', 'handleClick', 'autoChange', 'handlerData');
    this.state = {
      timeId: null
    };
  }
  bindHandler(...methods) {
    methods.forEach((method) => (this[method] = this[method].bind(this)));
  }
  changeColor(light, actions) { // 红路灯变换规则
    switch (light.color) {
      case 'red':
        actions.changeGreen();
        break;
      case 'green':
        actions.changeYellow();
        break;
      case 'yellow':
        actions.changeRed();
        break;
      default:
        actions.changeRed();
    }
  }
  autoChange() { // 自动更改红绿灯
    const { light, count, actions } = this.props;

    actions.startCount();

    let curState = count.count - 1;
    if (curState < 1) {
      this.changeColor(light, actions);
      // 获取最新的state
      curState = this.props.light.time;
      actions.resetCount(curState);
    }
      // 自动更改
    this.state.timeId = setTimeout(() => {
      this.autoChange();
    }, 1000);
  }
  handleClick() {  // 用点击模拟红路灯
    if (this.state.timeId) {
      clearTimeout(this.state.timeId);
      this.state.timeId = null;
    } else {
      this.autoChange();
    }
  }
  // 获取异步网络请求，用到中间件辅助插件
  handlerData() {
    const { actions } = this.props;
    actions.callApi('APPLICATIONS', 'applications');
    // actions.callApi('SERVERS', 'servers');
  }
  render() {
      // 通过connect 注入 redux 的 dispatch 方法
    const { light, count, data } = this.props;
    return (
      <div>
        <div id="traffic" onClick={this.handleClick}>
          <Light light={light} />
          <Counter counter={count.count} />
        </div>
        <div onClick={this.handlerData}>
          servers
          <br />
          {this.props.data.data[0].id}
        </div>
        {this.props.children}
      </div>
      );
  }
}

App.propTypes = {
  light: React.PropTypes.object.isRequired,
  count: React.PropTypes.object.isRequired,
  data: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  children: React.PropTypes.element
};
// 声明 connect 连接
// 将 redux 中的 state传给 App
function mapStateToProps(state) {
  return {
    light: state.light,
    count: state.count,
    data: state.api
  };
}

// 绑定多个actions
function mapDispatchToProps(dispatch) {
  const boundLight = bindActionCreators(LightActions, dispatch);
  const boundCount = bindActionCreators(CounterActions, dispatch);
  const boundApi = bindActionCreators(ApiActions, dispatch);
  return {
    actions: Object.assign({}, boundLight, boundCount, boundApi)
  };
}

// 声明 connect 连接
export default connect(mapStateToProps, mapDispatchToProps)(App);
