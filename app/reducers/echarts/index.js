import {START} from '../../constants/echarts/echarts';
// 定义初始化状态，初始化状态是常量
// 初始状态是10s
const initState = {
  options: {
    title: {
      text: '动态数据',
      subtext: '纯属虚构'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['最新成交价', '预购队列']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (() => {
          var now = new Date();
          var res = [];
          var len = 10;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            now = new Date(now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (() => {
          var res = [];
          var len = 10;
          while (len--) {
            res.push(len + 1);
          }
          return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '价格',
        max: 20,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: '预购量',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: '预购队列',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: (() => {
          var res = [];
          var len = 10;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: '最新成交价',
        type: 'line',
        data: (() => {
          var res = [];
          var len = 0;
          while (len < 10) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      }
    ]
  }
};

// 定义灯转换的reducer函数
export default function start(state = initState, action) {
  switch (action.type) {
    case START:
      return {
        options: action.options
      };
    default:
      return state;
  }
}
