import * as echarts from '../../constants/echarts/echarts';

let count = 11;
export function timeTicket(option) {
  const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
  const data0 = option.series[0].data;
  const data1 = option.series[1].data;
  data0.shift();
  data0.push(Math.round(Math.random() * 1000));
  data1.shift();
  data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

  option.xAxis[0].data.shift();
  option.xAxis[0].data.push(axisData);
  option.xAxis[1].data.shift();
  option.xAxis[1].data.push(count++);
  return {
    type: echarts.START,
    options: option
  };
}
