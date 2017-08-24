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
function _get(endpoint, params, debug = true) {
  return instance
    .get(constructURLWithParams(endpoint, params))
    .then(response => {
      const { data, status, statusText, headers, config, request } = response;
      // if `debug` not set, simply return the response
      // this is temporary
      if (!debug) {
        return data.data;
      }
      return data;
    })
    .catch(err => console.error(err));
}

/**
 *
 * @private
 * @param {*} endpoint
 * @param {*} body
 * @param {*} debug
 */
function _post(endpoint, body, debug = true) {
  return instance
    .get(constructURLWithParams(endpoint, body))
    .then(response => {
      const { data, status, statusText, headers, config, request } = response;
      // if `debug` not set, simply return the response
      // this is temporary
      if (!debug) {
        return data.data;
      }
      return data;
    })
    .catch(err => console.error(err));
}

module.exports = { get: _get, post: _post };
