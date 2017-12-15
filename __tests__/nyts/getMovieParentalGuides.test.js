import test from 'ava';

import Nyts from '../../lib/nyts';

const n = new Nyts(null, null, false);

test(async t => {
  // Parental guides will be republished soon.
  // Until then, just do a check that a parental
  // guide (or guides) exist(s)
  t.true(
    Array.isArray(
      await n.getMovieParentalGuides(118).then(data => data.parental_guides)
    )
  );
});
