const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let out = [],
    count = 0,
    step = 0
  s1 = s1.split('').sort()
  s2 = s2.split('').sort()
  for (; s1.length > 0; s1.pop()) {
    step = 0
    s2.forEach((e, i) => {
      if (e === s1[s1.length - 1] && step === 0) {
        s2[i] = null
        count++
        step = 1
      }
    })
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};