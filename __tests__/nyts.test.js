/* eslint-disable arrow-parens */

import test from 'ava';
import nock from 'nock';

import Nyts from '../lib/nyts';

const response = [
  {
    id: 6860,
    url: 'https://yts.ag/movie/lipstick-under-my-burkha-2016',
    imdb_code: 'tt4807830',
    title: 'Lipstick Under My Burkha',
    title_english: 'Lipstick Under My Burkha',
    title_long: 'Lipstick Under My Burkha (2016)',
    slug: 'lipstick-under-my-burkha-2016',
    year: 2016,
    rating: 7,
    runtime: 117,
    genres: ['Drama'],
    summary:
      'Set in the crowded by-lanes of small town India, Lipstick Under My Burkha chronicles the secret lives of four women in search of a little freedom. Though stifled and trapped in their worlds, these four women claim their desires through small acts of courage and stealthy rebellion.',
    description_full:
      'Set in the crowded by-lanes of small town India, Lipstick Under My Burkha chronicles the secret lives of four women in search of a little freedom. Though stifled and trapped in their worlds, these four women claim their desires through small acts of courage and stealthy rebellion.',
    synopsis:
      'Set in the crowded by-lanes of small town India, Lipstick Under My Burkha chronicles the secret lives of four women in search of a little freedom. Though stifled and trapped in their worlds, these four women claim their desires through small acts of courage and stealthy rebellion.',
    yt_trailer_code: 'fxwXMpZ7AF8',
    language: 'English',
    mpa_rating: 'NR',
    background_image:
      'https://yts.ag/assets/images/movies/lipstick_under_my_burkha_2016/background.jpg',
    background_image_original:
      'https://yts.ag/assets/images/movies/lipstick_under_my_burkha_2016/background.jpg',
    small_cover_image:
      'https://yts.ag/assets/images/movies/lipstick_under_my_burkha_2016/small-cover.jpg',
    medium_cover_image:
      'https://yts.ag/assets/images/movies/lipstick_under_my_burkha_2016/medium-cover.jpg',
    large_cover_image:
      'https://yts.ag/assets/images/movies/lipstick_under_my_burkha_2016/large-cover.jpg',
    state: 'ok',
    torrents: [
      {
        url:
          'https://yts.ag/torrent/download/74D7E62A2830E098A74D001651FBBCE3EC606211',
        hash: '74D7E62A2830E098A74D001651FBBCE3EC606211',
        quality: '720p',
        seeds: 898,
        peers: 957,
        size: '871.11 MB',
        size_bytes: 913425039,
        date_uploaded: '2017-11-08 07:29:39',
        date_uploaded_unix: 1510144179,
      },
      {
        url:
          'https://yts.ag/torrent/download/3D845B04761F4A7F38A77EFB60021124C8FA4AD6',
        hash: '3D845B04761F4A7F38A77EFB60021124C8FA4AD6',
        quality: '1080p',
        seeds: 656,
        peers: 591,
        size: '1.8 GB',
        size_bytes: 1932735283,
        date_uploaded: '2017-11-08 11:22:31',
        date_uploaded_unix: 1510158151,
      },
    ],
    date_uploaded: '2017-11-08 07:29:39',
    date_uploaded_unix: 1510144179,
  },
];

test.before(() => {
  nock('http://example.com')
    .get('/')
    .reply(200, response);
});

test('this is a very useless test', async t => {
  // better tests coming up!
  const n = new Nyts(null, null, false);
  t.deepEqual(await n.getMovies(1).then(({ movies }) => movies), response);
});
