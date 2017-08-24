import * as e from './core/endpoints';
import * as r from './core/request';

export default class Nyts {
  /**
   * @constructor
   * @param {string} application_key
   * @param {string} user_key
   * @param {boolean} debug
   */
  constructor(application_key = null, user_key = null, debug = false) {
    this.application_key = application_key;
    this.user_key = user_key;
    this.debug = debug;
  }

  /**
   * Used to list and search through out all the available movies
   * Can sort, filter, search and order the results
   * @param {Number} limit
   * @param {Number} page
   * @param {string} quality
   * @param {Number} minimum_rating
   * @param {string} query_term
   * @param {string} genre
   * @param {string} sort_by
   * @param {string} order_by
   * @param {boolean} with_rt_ratings
   * @return {Promise} A Promise, which when resolved returns an
   * object containing the result
   */
  getMovies(
    limit = 20,
    page = 1,
    quality = 'all',
    minimum_rating = 0,
    query_term = '0',
    genre = 'all',
    sort_by = 'date_added',
    order_by = 'desc',
    with_rt_ratings = false,
  ) {
    // TODO: Promisify this
    // testing the waters, this won't
    // look like this 💩
    return r.get(
      e.LIST_MOVIES,
      {
        limit: 10,
        page: 1,
        quality: 'all',
        minimum_rating: 0,
        query_term: '0',
        genre: 'all',
        sort_by: 'date_added',
        order_by: 'desc',
        with_rt_ratings: false,
      },
      this.debug,
    );
  }
}
