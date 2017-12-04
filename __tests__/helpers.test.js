/* eslint-disable arrow-parens */

import test from 'ava';

import { isValidURL } from '../lib/utils/helpers';

test('Test if valid URLS', t => {
  t.true(isValidURL('http://example.com'));
  t.true(isValidURL('https://kimchi.surge.sh'));
  t.false(isValidURL('http://'));
  t.false(isValidURL('http://foo.bar?q=Spaces should be encoded'));
});
