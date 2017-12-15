import test from 'ava';

import Nyts from '../../lib/nyts';

const n = new Nyts(null, null, false);

test('Returns the correct name for the first ever movie uploaded to YTS', async t => {
  t.deepEqual(
    await n.getMovie(1).then(({ movie }) => movie.title),
    'Bikini Model Academy'
  );
});
