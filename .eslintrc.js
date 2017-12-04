module.exports = {
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    camelcase: [0, { properties: 'never' }],
    'no-console': 0,
    'comma-dangle': 1,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
};
