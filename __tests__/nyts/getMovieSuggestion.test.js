import test from 'ava';

import Nyts from '../../lib/nyts';

const n = new Nyts(null, null, false);

test('Returns 4 movies at ANY given time', async t => {
  t.deepEqual(
    await n.getMovieSuggestion(307).then(data => data.movie_count),
    4
  );
});
