const e = require('./core/endpoints');
const r = require('./core/request');

class Nyts {
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
    return r.get(
      e.LIST_MOVIES,
      {
        limit,
        page,
        quality,
        minimum_rating,
        query_term,
        genre,
        sort_by,
        order_by,
        with_rt_ratings,
      },
      this.debug,
    );
  }

  /**
   * Returns the information about a specific movie
   * @param {Number} movie_id
   * @param {boolean} with_images
   * @param {boolean} with_cast
   * @return {Promise}
   */
  getMovie(movie_id, with_images = false, with_cast = false) {
    return r.get(
      e.MOVIE_DETAILS,
      { movie_id, with_images, with_cast },
      this.debug,
    );
  }

  /**
   * Returns 4 related movies as suggestions for the user
   * @param {Number} movie_id
   * @return {Promise}
   */
  getMovieSuggestion(movie_id) {
    return r.get(e.MOVIE_SUGGESTIONS, { movie_id }, this.debug);
  }

  /**
   * Returns all the comments for the specified movie
   * @param {Number} movie_id
   * @return {Promise}
   */
  getMovieComments(movie_id) {
    return r.get(e.MOVIE_COMMENTS, { movie_id }, this.debug);
  }

  /**
   * Returns all the IMDb movie reviews for the specified movie
   * @param {Number} movie_id
   * @return {Promise}
   */
  getMovieReview(movie_id) {
    return r.get(e.MOVIE_REVIEWS, { movie_id }, this.debug);
  }

  /**
   * Returns all the parental guide ratings for the specified movie
   * @param {Number} movie_id
   * @return {Promise}
   */
  getMovieParentalGuides(movie_id) {
    return r.get(e.MOVIE_REVIEWS, { movie_id }, this.debug);
  }

  /**
   * Returns the 4 latest upcoming movies
   * @return {Promise}
   */
  listUpcomingMovies() {
    return r.get(e.LIST_UPCOMING, {}, this.debug);
  }
}

module.exports = Nyts;
