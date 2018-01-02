/* eslint-disable no-underscore-dangle */
const axios = require('axios');

const constructURLWithParams = require('../utils/uri');

// https://github.com/yeskunall/nyts/issues/43
const baseURL = { baseURL: 'https://yts.am/api/v2' };
const config = Object.assign(baseURL, {
  timeout: 15000,
  responseType: 'json',
});

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
      const { data } = response;
      // if `debug` not set, simply return the response
      // this is temporary
      if (!debug) {
        return new Promise((resolve, reject) => {
          resolve(data.data);
          // TODO: Figure out a better error message
          reject(new Error(''));
        });
      }
      return new Promise((resolve, reject) => {
        resolve(data);
        // TODO: Figure out a better error message
        reject(new Error(''));
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
    .post(constructURLWithParams(endpoint, body))
    .then(response => {
      const { data } = response;
      // if `debug` not set, simply return the response
      // this is temporary
      if (!debug) {
        return new Promise((resolve, reject) => {
          resolve(data.data);
          // TODO: Figure out a better error message
          reject(new Error(''));
        });
      }
      return new Promise((resolve, reject) => {
        resolve(data);
        // TODO: Figure out a better error message
        reject(new Error(''));
      });
    })
    .catch(err => console.error(err));
}

module.exports.get = _get;
module.exports.post = _post;
