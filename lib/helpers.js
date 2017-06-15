/* eslint-disable no-useless-escape */

module.exports = {
  encode: str => encodeURIComponent(str),
  isValidURL: url => !!url.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),
};
