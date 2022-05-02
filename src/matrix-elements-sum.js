const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(neo) {
  let i = 0
  let j = 0
  let all = {}
  let out = 0
  neo.forEach(e1 => {
    i = 0
    e1.forEach(e2 => {
      if (e2 === 0 && all[`${i}${j}`] === undefined) {
          all[`${i}${j}`] = 0
      } else if (e2 === 0 && all[`${i}${j}`] !== undefined) {
        all[`${i}${j}`] = all[`${i}${j}`] + 1
      }
      i++
    })
    j++
  })
  i = 0
  j = 0
  neo.forEach(e1 => {
    i = 0
    e1.forEach(e2 => {
      if (all[`${i}${j-1}`] === 0) {
      } else {
        out = out+e2
      }
      i++
    })
    j++
  })
  return out
}

module.exports = {
  getMatrixElementsSum
};
