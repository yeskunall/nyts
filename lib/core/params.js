module.exports = {
  COMMENT_ADD: {
    user_key: {
      required: true,
      type: "string",
      default: null,
    },
    movie_id: {
      required: true,
      type: "number",
      default: null,
    },
    application_key: {
      required: true,
      type: "number",
      default: null,
    },
    comment_text: {
      required: true,
      type: "string",
      default: null,
    },
  },
  COMMENT_DELETE: {
    user_key: null,
    comment_id: null,
    application_key: null,
  },
  COMMENT_LIKE: {
    user_key: null,
    comment_id: null,
    application_key: null,
  },
  COMMENT_REPORT: {
    user_key: null,
    comment_id: null,
    application_key: null,
  },
  LIKE_MOVIE: {
    user_key: null,
    movie_id: null,
    application_key: null,
  },
  LIST_MOVIES: {
    limit: 20,
    page: 1,
    quality: 'all',
    minimum_rating: 0,
    query_term: '0',
    genre: 'all',
    sort_by: 'date_added',
    order_by: 'desc',
    with_rt_ratings: false,
  },
  MOVIE_BOOKMARK_ADD: {
    user_key: null,
    movie_id: null,
    application_key: null,
  },
  MOVIE_BOOKMARK_DELETE: {
    user_key: null,
    movie_id: null,
    application_key: null,
  },
  MOVIE_BOOKMARK_GET: {
    user_key: null,
    with_rt_ratings: false,
  },
  MOVIE_COMMENTS: { movie_id: null },
  MOVIE_DETAILS: {
    movie_id: null,
    with_images: false,
    with_cast: false,
  },
  MOVIE_PARENTAL_GUIDES: { movie_id: null },
  MOVIE_REVIEWS: { movie_id: null },
  MOVIE_SUGGESTIONS: { movie_id: null },
  REQUEST_MAKE: {
    user_key: null,
    movie_title: null,
    request_message: null,
    application_key: null,
  },
  USER_DETAILS: {
    user_id: null,
    with_recently_downloaded: null,
  },
  USER_FORGOT_PASSWORD: {
    email: null,
    application_key: null,
  },
  USER_KEY: {
    username: null,
    password: null,
    application_key: null,
  },
  USER_PROFILE: { user_key: null },
  USER_REGISTER: {
    application_key: null,
    username: null,
    password: null,
    email: null,
  },
  USER_RESET_PASSWORD: {
    reset_code: null,
    new_password: null,
    application_key: null,
  },
  USER_SETTINGS_EDIT: {
    user_key: null,
    application_key: null,
    new_password: null,
    about_text: null,
  },
};
