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

 let depth = 1,
 temp = 1

// class DepthCalculator {
// calculateDepth(arr) {
 
//  arr.forEach((e, i) => {
//    if (typeof e === 'object' && e.length > 0) {
//      if (i === 0) {
//        temp = temp+1
//        console.log(temp)
//      }
     
     
//      new DepthCalculator().calculateDepth(e)
//    }
//  })
//  return temp
// }
// }

class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};