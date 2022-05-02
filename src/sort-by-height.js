const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let ind = []
  let elem = []
  arr.forEach((e, i) => {
    if (e !== -1) {
      ind.push(i)
      elem.push(e)
    }
  })
  elem = elem.sort()
  if (arr.length === elem.length) {
    elem = arr.sort(function(a, b) {
      return a - b
    })
  }
  let i = 0
  while (i< ind.length) {
    arr[ind[i]] = elem[i]
    i++
  }
  return arr
}

module.exports = {
  sortByHeight
};
