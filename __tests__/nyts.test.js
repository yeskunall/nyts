/* eslint-disable arrow-parens */

import test from 'ava';
import nock from 'nock';

import Nyts from '../lib/nyts';

const response = [
  {
    id: 6914,
    url: 'https://yts.am/movie/how-the-grinch-stole-christmas-1966',
    imdb_code: 'tt0060345',
    title: 'How the Grinch Stole Christmas!',
    title_english: 'How the Grinch Stole Christmas!',
    title_long: 'How the Grinch Stole Christmas! (1966)',
    slug: 'how-the-grinch-stole-christmas-1966',
    year: 1966,
    rating: 8.4,
    runtime: 26,
    genres: ['Animation', 'Comedy', 'Family', 'Fantasy', 'Musical'],
    summary:
      'Bitter and hateful, the Grinch is irritated at the thought of the nearby village having a happy time celebrating Christmas. So disguised as Santa Claus, with his dog made to look like a reindeer, he raids the village to steal all the Christmas things. The village is sure to have a sad Christmas this year.',
    description_full:
      'Bitter and hateful, the Grinch is irritated at the thought of the nearby village having a happy time celebrating Christmas. So disguised as Santa Claus, with his dog made to look like a reindeer, he raids the village to steal all the Christmas things. The village is sure to have a sad Christmas this year.',
    synopsis:
      'Bitter and hateful, the Grinch is irritated at the thought of the nearby village having a happy time celebrating Christmas. So disguised as Santa Claus, with his dog made to look like a reindeer, he raids the village to steal all the Christmas things. The village is sure to have a sad Christmas this year.',
    yt_trailer_code: 'XYRnwWmteac',
    language: 'English',
    mpa_rating: 'NR',
    background_image:
      'https://yts.am/assets/images/movies/how_the_grinch_stole_christmas_1966/background.jpg',
    background_image_original:
      'https://yts.am/assets/images/movies/how_the_grinch_stole_christmas_1966/background.jpg',
    small_cover_image:
      'https://yts.am/assets/images/movies/how_the_grinch_stole_christmas_1966/small-cover.jpg',
    medium_cover_image:
      'https://yts.am/assets/images/movies/how_the_grinch_stole_christmas_1966/medium-cover.jpg',
    large_cover_image:
      'https://yts.am/assets/images/movies/how_the_grinch_stole_christmas_1966/large-cover.jpg',
    state: 'ok',
    torrents: [
      {
        url:
          'https://yts.am/torrent/download/801E6EE764B1C34FA4D4D150868154E74FF82937',
        hash: '801E6EE764B1C34FA4D4D150868154E74FF82937',
        quality: '720p',
        seeds: 348,
        peers: 63,
        size: '183.61 MB',
        size_bytes: 192529039,
        date_uploaded: '2017-12-02 16:45:32',
        date_uploaded_unix: 1512251132,
      },
      {
        url:
          'https://yts.am/torrent/download/E17C26153FAC8FA0BE33F3ACEC087B386B1F415B',
        hash: 'E17C26153FAC8FA0BE33F3ACEC087B386B1F415B',
        quality: '1080p',
        seeds: 662,
        peers: 116,
        size: '395.52 MB',
        size_bytes: 414732780,
        date_uploaded: '2017-12-02 17:38:47',
        date_uploaded_unix: 1512254327,
      },
    ],
    date_uploaded: '2017-12-02 16:45:32',
    date_uploaded_unix: 1512251132,
  },
];

test.before(() => {
  nock('http://example.com')
    .get('/')
    .reply(200, response);
});

test('this is a very useless test', async t => {
  // OK seriously, I really need to
  // write some better tests 🙄
  const n = new Nyts(null, null, false);
  t.deepEqual(await n.getMovies(1).then(({ movies }) => movies), response);
});
