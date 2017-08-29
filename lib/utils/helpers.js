module.exports = {
  encode: str => encodeURIComponent(str),
  isValidURL: URL =>
    !!URL.match(/^(https?:\/\/)?([\da-z.-]+).([a-z.]{2,6})([/\w .-]*)*\/?$/),
};
