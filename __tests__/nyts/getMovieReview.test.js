import test from 'ava';

import Nyts from '../../lib/nyts';

const n = new Nyts(null, null, false);

// This endpoint currently doesn't return anything
test.failing(async t => {
  // Add a test when this enpoint is working
});
