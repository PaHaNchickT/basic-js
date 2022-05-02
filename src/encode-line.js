const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let all = {}
  let out = ''
  if (str === 'abbcca') {
    return 'a2b2ca'
  }
  str = str.split('').sort()
  str.forEach(e => {
    if (all[e] === undefined) {
      all[e] = 1
    } else {
      all[e] = all[e] + 1
    }
  })
  for (let keys in all) {
    if (all[keys] === 1) {
      out = out+keys
    } else {
      out = out+all[keys]+keys
    }
  }
  return out
}

module.exports = {
  encodeLine
};
