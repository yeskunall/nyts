import test from 'ava';

import Nyts from '../../lib/nyts';

const n = new Nyts(null, null, false);

test('`getMovies` with the default params returns 20 movies', async t => {
  t.deepEqual(await n.getMovies().then(({ movies }) => movies.length), 20);
});
