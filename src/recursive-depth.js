const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(input) {
    let out = 1
    function each(arr) {
      arr.forEach(e => {
        if (typeof e === 'object') {
          each(e)
          out = out+1
        }
      })
    }
    input.forEach(e => {
      if (typeof e === 'object') {
        each(e)
        out = out +1
      }
    })
    return out
  }
}

module.exports = {
  DepthCalculator
};
