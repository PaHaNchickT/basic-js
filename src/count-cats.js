const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(neo) {
  let count = 0
  neo.forEach(e1 => {
    e1.forEach(e2 => {
      if (e2 === '^^') {
        count++
      }
    })
  })
  return count
}

module.exports = {
  countCats
};
