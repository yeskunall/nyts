module.exports = {
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    camelcase: [0, { properties: 'never' }],
    'no-console': 0,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
};
