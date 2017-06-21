const { encode } = require("./helpers");

module.exports = (endpoint, parameters = null) => {
  let valid_params = null;
  if (typeof parameters === "object" && parameters !== null) {
    valid_params = Object.keys(parameters)
      .map(key => `${key}=${parameters[key]}`)
      .join("&");
  }
  return `${endpoint}/?${encode(valid_params)}`;
};
