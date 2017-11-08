/* eslint-disable no-underscore-dangle */
const axios = require('axios');

const constructURLWithParams = require('../utils/uri');

const baseURL = 'https://yts.ag/api/v2';
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
 * @return {Promise} A Promise containing the JSON
 * response
 */
function _get(endpoint, params, debug = true) {
  return instance
    .get(constructURLWithParams(endpoint, params))
    .then(response => {
      const { data, status, statusText, headers, config, request } = response;
      // if `debug` not set, simply return the response
      // this is temporary
      if (!debug) {
        return new Promise((resolve, reject) => {
          resolve(data.data);
          reject(err => {
            throw new Error(err);
          });
        });
      }
      return new Promise((resolve, reject) => {
        resolve(data);
        reject(err => {
          throw new Error(err);
        });
      });
    })
    .catch(err => console.error(err));
}

/**
 *
 * @private
 * @param {*} endpoint
 * @param {*} body
 * @param {*} debug
 * @return {Promise} A Promise containing the JSON
 * response
 */
function _post(endpoint, body, debug = true) {
  return instance
    .get(constructURLWithParams(endpoint, body))
    .then(response => {
      const { data, status, statusText, headers, config, request } = response;
      // if `debug` not set, simply return the response
      // this is temporary
      if (!debug) {
        return new Promise((resolve, reject) => {
          resolve(data.data);
          reject(err => {
            throw new Error(err);
          });
        });
      }
      return new Promise((resolve, reject) => {
        resolve(data);
        reject(err => {
          throw new Error(err);
        });
      });
    })
    .catch(err => console.error(err));
}

module.exports.get = _get;
module.exports.post = _post;
