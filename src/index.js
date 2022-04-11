/**
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
  return string
    .split('')
    .map((item) =>
      item.toLowerCase() === 'z' || item.toLowerCase() === 'v' ? '*' : item
    )
    .join('');
};

/**
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
  const startWith = string.indexOf(word);

  return `${string.slice(0, startWith)}${newWord}`;
};

/**
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => string.slice(0, length);
