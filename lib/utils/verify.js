/* eslint-disable valid-typeof */
import params_config from '../core/params';

export default (endpoint_type, user_input) => {
  // go through each user_input and check if its valid or not
  const endpoint_valid_params = params_config[endpoint_type];

  // check if user passed all the requirements
  // get all the requirements first
  let verified = Object.keys(endpoint_valid_params)
    .filter(param => endpoint_valid_params[param].required === true)
    .reduce((isValid, param) => isValid && param in user_input, true);

  if (verified === false) return verified;

  // Check the type for each user input
  verified = Object.keys(user_input).reduce((verification, param) => {
    const input = user_input[param];
    const requirements = endpoint_valid_params[param];
    // here check for types
    return verification && typeof input === requirements.type;
  }, verified);

  return verified;
};
