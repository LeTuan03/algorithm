/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let lenW1 = word1.length;
  let lenW2 = word2.length;
  let minLen = Math.min(lenW1, lenW2);
  for (let i = 0; i < minLen; i++) {
    result += `${word1[i]}${word2[i]}`;
  }
  if (lenW1 === lenW2) {
    return result;
  } else if (lenW1 > lenW2) {
    return `${result}${word1.slice(lenW2)}`;
  } else {
    return `${result}${word2.slice(lenW1)}`;
  }
};
