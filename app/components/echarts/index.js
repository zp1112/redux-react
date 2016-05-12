import React, { Component } from 'react';
import ReactEcharts from 'react-echarts-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EchartsActions from '../../actions/echarts';
class Echarts extends Component {
  constructor() {
    super();
    this.bindHandler('startMove', 'autoChange', 'handleClick', 'handleChart');
    this.state = {
      height: 400,
      timeId: null,
      text: 'stop'
    };
  }
  // 将组件类方法绑定到实例的this上
  bindHandler(...methods) {
    methods.forEach((method) => (this[method] = this[method].bind(this)));
  }
  // 执行action函数
  autoChange() {
    const { actions } = this.props;
    actions.timeTicket(this.props.options.options);
    this.state.timeId = setTimeout(() => {
      this.autoChange();
    }, 2000);
  }
  // 自动开始
  startMove() {
    if (this.state.timeId) {
      clearTimeout(this.state.timeId);
      this.state.timeId = null;
    } else {
      this.autoChange();
    }
  }
  // 改变state
  handleClick() {
    this.setState({
      height: 500
    });
  }
  // 控制动画
  handleChart() {
    this.setState({
      text: 'start'
    });
    this.startMove();
  }

  render() {
    const { options } = this.props;
    return (
      <div>
        <button onClick={this.handleChart}>{this.state.text}</button>
        <button onClick={this.handleClick}>Change height</button>
        <ReactEcharts
          height={this.state.height}
          option={options.options}
          onReady={this.startMove}
        />
      </div>
    );
  }
}

Echarts.propTypes = {
  actions: React.PropTypes.object.isRequired,
  options: React.PropTypes.object.isRequired
};
// 声明 connect 连接
// 将 redux 中的 state传给 App
function mapStateToProps(state) {
  return {
    options: state.echarts
  };
}

function mapDispatchToProps(dispatch) {
  const boundEcharts = bindActionCreators(EchartsActions, dispatch);
  return {
    actions: Object.assign({}, boundEcharts)
  };
}

// 声明 connect 连接
export default connect(mapStateToProps, mapDispatchToProps)(Echarts);
