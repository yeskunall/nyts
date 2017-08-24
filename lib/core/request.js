/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import { baseURL } from './defaultConfig';
import constructURLWithParams from '../utils/uri';

const config = Object.assign(
  { baseURL },
  {
    timeout: 15000,
    responseType: 'json',
  },
);

const instance = axios.create(config);

/**
 *
 * @private
 * @param {*} endpoint
 * @param {*} params
 * @param {*} debug
 */
function _get(endpoint, params, debug = false) {
  instance.get(constructURLWithParams(endpoint, params)).then(response => {
    const { data, status, statusText, headers, config, request } = response;
    // 2 things to be done with the response at this point
    // if the `debug` flag is set, edit the response to
    // spit out more info as opposed to when it is not set
  });
}

/**
 *
 * @private
 * @param {*} endpoint
 * @param {*} body
 * @param {*} debug
 */
function _post(endpoint, body, debug = false) {
  instance.post(endpoint, body).then(response => {
    const { data, status, statusText, headers, config, request } = response;
    // 2 things to be done with the response at this point
    // if the `debug` flag is set, edit the response to
    // spit out more info as opposed to when it is not set
  });
}

module.exports = { get: _get, post: _post };
