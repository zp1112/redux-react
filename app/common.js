import request from 'superagent';
import {getDefer} from 'wulian-common';

exports.apiCaller = (endpoint, {API_ROOT = '', headers = null} = {}, {data = null, method = 'get'} = {}) => {
  const deferred = getDefer();
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  const callee = request[method](fullUrl).set('Accept', 'application/json');

  if (data !== null) {
    callee[method === 'get' ? 'query' : 'send'](data);
  }
  if (headers !== null) {
    const keys = Object.keys(headers);
    for (let i = 0; i < keys.length; i++) {
      callee.set(keys[i], headers[keys[i]]);
    }
  }

  callee.timeout(5000)
    .end((err, res) => {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(res);
    });
  return deferred.promise;
};
