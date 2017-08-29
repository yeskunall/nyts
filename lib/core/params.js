/**
 * @todo range and string regex validations
 */
module.exports = {
  COMMENT_ADD: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
    comment_text: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  COMMENT_DELETE: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    comment_id: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  COMMENT_LIKE: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    comment_id: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  COMMENT_REPORT: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    comment_id: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  LIKE_MOVIE: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  LIST_MOVIES: {
    limit: {
      required: false,
      type: 'number',
      default: 20,
    },
    page: {
      required: false,
      type: 'number',
      default: 1,
    },
    quality: {
      required: false,
      type: 'string',
      default: 'all',
    },
    minimum_rating: {
      required: false,
      type: 'number',
      default: 0,
    },
    query_term: {
      required: false,
      type: 'number',
      default: 0,
    },
    genre: {
      required: false,
      type: 'string',
      default: 'all',
    },
    sort_by: {
      required: false,
      type: 'string',
      default: 'date_added',
    },
    order_by: {
      required: false,
      type: 'string',
      default: 'desc',
    },
    with_rt_ratings: {
      required: false,
      type: 'boolean',
      default: false,
    },
  },
  MOVIE_BOOKMARK_ADD: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  MOVIE_BOOKMARK_DELETE: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  MOVIE_BOOKMARK_GET: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    with_rt_ratings: {
      required: false,
      type: 'boolean',
      default: false,
    },
  },
  MOVIE_COMMENTS: {
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
  },
  MOVIE_DETAILS: {
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
    with_images: {
      required: false,
      type: 'boolean',
      default: false,
    },
    with_cast: {
      required: false,
      type: 'boolean',
      default: false,
    },
  },
  MOVIE_PARENTAL_GUIDES: {
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
  },
  MOVIE_REVIEWS: {
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
  },
  MOVIE_SUGGESTIONS: {
    movie_id: {
      required: true,
      type: 'number',
      default: null,
    },
  },
  REQUEST_MAKE: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    movie_title: {
      required: true,
      type: 'string',
      default: null,
    },
    request_message: {
      required: false,
      type: 'string',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  USER_DETAILS: {
    user_id: {
      required: true,
      type: 'number',
      default: null,
    },
    with_recently_downloaded: {
      required: false,
      type: 'boolean',
      default: false,
    },
  },
  USER_FORGOT_PASSWORD: {
    email: {
      required: true,
      type: 'number',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  USER_KEY: {
    username: {
      required: true,
      type: 'string',
      default: null,
    },
    password: {
      required: true,
      type: 'string',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  USER_PROFILE: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  USER_REGISTER: {
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
    username: {
      required: true,
      type: 'string',
      default: null,
    },
    password: {
      required: true,
      type: 'string',
      default: null,
    },
    email: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  USER_RESET_PASSWORD: {
    reset_code: {
      required: true,
      type: 'string',
      default: null,
    },
    new_password: {
      required: true,
      type: 'string',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
  },
  /**
   * @todo add avatar_image parameter of type image
   * */
  USER_SETTINGS_EDIT: {
    user_key: {
      required: true,
      type: 'string',
      default: null,
    },
    application_key: {
      required: true,
      type: 'string',
      default: null,
    },
    new_password: {
      required: false,
      type: 'string',
      default: null,
    },
    about_text: {
      required: false,
      type: 'string',
      default: null,
    },
  },
};
