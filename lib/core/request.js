/* eslint-disable no-underscore-dangle */
const axios = require('axios');

const { baseURL } = require('./defaultConfig');

const config = Object.assign(
  { baseURL },
  {
    timeout: 15000,
    responseType: 'json',
  },
);

console.log(config);

const instance = axios.create(config);

function _get(endpoint, debug = false) {
  instance.get(endpoint).then(response => {
    const { data, status, statusText, headers, config, request } = response;
    // 2 things to be done with the response at this point
    // if the `debug` flag is set, edit the response to
    // spit out more info as opposed to when it is not set
  });
}

module.exports = { get: _get };
