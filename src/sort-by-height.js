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
  let temp = []
  if (arr.includes(-1) === false) {
    return arr.sort((a, b) => a - b)
  }
  arr.forEach((e, i) => {
    if (e !== -1) {
      temp.push(e)
    }
  })
  temp = temp.sort((a, b) => a - b)
  let count = 0
  for(let i = 0;i < arr.length;i++) {
    if (arr[i] !== -1) {
      arr[i] = temp[count]
      count++
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
