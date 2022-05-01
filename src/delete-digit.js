const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let i = 0
  let out = []
  let temp = []
  n = n.toString()
  while (i < n.length) {
   out.push(n.slice(0, i)+n.slice(i+1, n.length))
    i++
  }
  out.forEach(e => {
    temp.push(+e)
  })
  temp = temp.sort((a, b) => {
    return a - b
  })
  return temp[temp.length-1]
}

module.exports = {
  deleteDigit
};
