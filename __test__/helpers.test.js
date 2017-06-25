/* global describe, test, expect */

const { isValidURL, verifyParams } = require("../lib/utils/helpers");

describe("Test if valid URL(s)", () => {
  test("with no special characters", () => {
    expect(isValidURL("http://example.com")).toBe(true);
    expect(isValidURL("https://kimchi.surge.sh")).toBe(true);
    expect(isValidURL("http://")).toBe(false);
    expect(isValidURL("http://foo.bar?q=Spaces should be encoded")).toBe(false);
  });
});

describe("Test if valid Pramas", () => {
  test("correct inputs", () => {
    const user_add_comment = {
      user_key: "MY_FANCY_KEY",
      movie_id: 12345,
      application_key: 98765,
      comment_text: "THIS A NICE MOVIE FAM",
    };

    expect(verifyParams("COMMENT_ADD", user_add_comment)).toBe(true);
  });

  test("missing a required input", () => {
    const user_add_comment = {
      user_key: "MY_FANCY_KEY",
      application_key: 98765,
      comment_text: "THIS A NICE MOVIE FAM",
    };
    expect(verifyParams("COMMENT_ADD", user_add_comment)).toBe(false);
  });
  test("wrong type of input", () => {
    const user_add_comment = {
      user_key: "MY_FANCY_KEY",
      movie_id: "12345",
      application_key: 98765,
      comment_text: "THIS A NICE MOVIE FAM",
    };
    expect(verifyParams("COMMENT_ADD", user_add_comment)).toBe(false);
  });
});
