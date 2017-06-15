/* global describe, test, expect */

const { isValidURL } = require('../lib/helpers');

describe('Test if valid URL(s)', () => {
  test('with no special characters', () => {
    expect(isValidURL('http://example.com')).toBe(true);
    expect(isValidURL('https://kimchi.surge.sh')).toBe(true);
    expect(isValidURL('http://')).toBe(false);
    expect(isValidURL('http://foo.bar?q=Spaces should be encoded')).toBe(false);
  });
});
