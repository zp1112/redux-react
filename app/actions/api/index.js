import * as api from '../../constants/api/api';
import {apiCaller} from '../../common';
function receivePosts(type, res) {
  switch (type) {
    case 'APPLICATIONS':
      return {
        type: api.APPLICATIONS,
        // data: JSON.parse(res.text).applications
        data: JSON.parse(res.text).applications
      };
    case 'APPLICATIONHOSTS':
      return {
        type: api.APPLICATIONHOSTS,
        data: JSON.parse(res.text).application_hosts
      };
    case 'APPLICATIONINSTANCES':
      return {
        type: api.APPLICATIONINSTANCES,
        data: JSON.parse(res.text).application_instances
      };
    case 'SERVERS':
      return {
        type: api.SERVERS,
        data: JSON.parse(res.text).servers
      };
    default:
      return {
        type: api.APPLICATIONS,
        data: [{host: 'aaa'}]
      };
  }
}
// 此处被AdBlock广告拦截插件阻止，后面会把请求转到后台
export function callApi(type, endpoint) {
  return (dispatch) => {
    return apiCaller(endpoint, {API_ROOT: 'http://localhost:3000/'})
      .then((response) => {
        dispatch(receivePosts(type, response));
      }).catch((err) => {
        throw err;
      });
  };
}
