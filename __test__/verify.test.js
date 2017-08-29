/* global describe, test, expect */
import verifyParams from '../lib/utils/verify';

describe('Test if valid Params', () => {
  test('correct inputs', () => {
    const user_add_comment = {
      user_key: 'MY_FANCY_KEY',
      movie_id: 12345,
      application_key: 98765,
      comment_text: 'THIS A NICE MOVIE FAM',
    };

    expect(verifyParams('COMMENT_ADD', user_add_comment)).toBe(true);
  });

  test('missing a required input', () => {
    const user_add_comment = {
      user_key: 'MY_FANCY_KEY',
      application_key: 98765,
      comment_text: 'THIS A NICE MOVIE FAM',
    };
    expect(verifyParams('COMMENT_ADD', user_add_comment)).toBe(false);
  });
  test('wrong type of input', () => {
    const user_add_comment = {
      user_key: 'MY_FANCY_KEY',
      movie_id: '12345',
      application_key: 98765,
      comment_text: 'THIS A NICE MOVIE FAM',
    };
    expect(verifyParams('COMMENT_ADD', user_add_comment)).toBe(false);
  });
});
