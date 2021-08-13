/**
 * Capitalizes the first letter of a string
 * @param str Input string
 */
export const capitalize = (str: string): string => str.replace(/./, (x) => x.toUpperCase());

/**
 * Cleans a url from anything outside normal charsets
 * in order to prevent XSS attacks and especialy "url string evasion" attacks.
 *
 * @param url to be cleaned
 * @returns a "safe" URL, stripping anything outside normal charsets.
 */
export const sanitizeUrl = (url: string): string => {
  if (typeof url !== 'string') {
    throw new Error('Helpers :: string :: sanitizeUrl :: error: url needs to be a string');
  }

  return decodeURI(url).replace(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;()]/gi, '');
};
