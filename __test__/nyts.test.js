/* global beforeEach, expect, test */

const nock = require('nock');

const Nyts = require('../lib/nyts');

const response = [
  {
    id: 6858,
    url: 'https://yts.ag/movie/hope-and-glory-1987',
    imdb_code: 'tt0093209',
    title: 'Hope and Glory',
    title_english: 'Hope and Glory',
    title_long: 'Hope and Glory (1987)',
    slug: 'hope-and-glory-1987',
    year: 1987,
    rating: 7.4,
    runtime: 113,
    genres: ['Comedy', 'Drama', 'Romance'],
    summary:
      'A semi-autobiographical project by John Boorman about a nine year old boy called Bill as he grows up in London during the blitz of World War 2. For a young boy, this time in history was more of an adventure, a total upheaval of order, restrictions and discipline. The liberating effect of the war on the women left behind. And the joy when Hitler blows up your school.',
    description_full:
      'A semi-autobiographical project by John Boorman about a nine year old boy called Bill as he grows up in London during the blitz of World War 2. For a young boy, this time in history was more of an adventure, a total upheaval of order, restrictions and discipline. The liberating effect of the war on the women left behind. And the joy when Hitler blows up your school.',
    synopsis:
      'A semi-autobiographical project by John Boorman about a nine year old boy called Bill as he grows up in London during the blitz of World War 2. For a young boy, this time in history was more of an adventure, a total upheaval of order, restrictions and discipline. The liberating effect of the war on the women left behind. And the joy when Hitler blows up your school.',
    yt_trailer_code: '32wyLEBf60c',
    language: 'English',
    mpa_rating: 'PG-13',
    background_image:
      'https://yts.ag/assets/images/movies/hope_and_glory_1987/background.jpg',
    background_image_original:
      'https://yts.ag/assets/images/movies/hope_and_glory_1987/background.jpg',
    small_cover_image:
      'https://yts.ag/assets/images/movies/hope_and_glory_1987/small-cover.jpg',
    medium_cover_image:
      'https://yts.ag/assets/images/movies/hope_and_glory_1987/medium-cover.jpg',
    large_cover_image:
      'https://yts.ag/assets/images/movies/hope_and_glory_1987/large-cover.jpg',
    state: 'ok',
    torrents: [
      {
        url:
          'https://yts.ag/torrent/download/98EE1D5485442A5B6BD1869A9E396B6FB7EFE54C',
        hash: '98EE1D5485442A5B6BD1869A9E396B6FB7EFE54C',
        quality: '720p',
        seeds: 296,
        peers: 108,
        size: '806.51 MB',
        size_bytes: 845687030,
        date_uploaded: '2017-11-06 02:01:13',
        date_uploaded_unix: 1509951673,
      },
      {
        url:
          'https://yts.ag/torrent/download/9570D78E26DD094327A46CF03495EC1315789BEB',
        hash: '9570D78E26DD094327A46CF03495EC1315789BEB',
        quality: '1080p',
        seeds: 351,
        peers: 133,
        size: '1.69 GB',
        size_bytes: 1814623683,
        date_uploaded: '2017-11-06 06:50:31',
        date_uploaded_unix: 1509969031,
      },
    ],
    date_uploaded: '2017-11-06 02:01:13',
    date_uploaded_unix: 1509951673,
  },
];

beforeEach(() => {
  nock('http://example.com').get('/').reply(200, response);
});

test('this should pass', () => {
  const n = new Nyts(null, null, false);
  n.getMovies(1).then(({ movies }) => expect(movies).toEqual(response));
});
