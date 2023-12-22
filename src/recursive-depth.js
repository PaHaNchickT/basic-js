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

// class DepthCalculator {

//   constructor() {
//     this.temp = []
//     this.count = 1
//   }
  
//   calculateDepth(arr) {
//     let that = this
//     arr.forEach(e => {
//         if (e instanceof Array) {
//           that.temp.push(that.count += 1)
//           that.calculateDepth(e)
//           that.temp.push(that.count -= 1)
//         }
//       })
//     that.temp = that.temp.sort(function (a, b) { return b - a; })
//     if (that.temp[0] === undefined) {
//       return 1
//     } else {
//       return that.temp[0]
//     }
//   }
// }

class DepthCalculator {
  calculateDepth(arr) {
    let temp = [],
      count = 1
    deep(arr)

    function deep(arr) {
      arr.forEach(e => {
        if (e instanceof Array) {
          temp.push(count += 1)
          deep(e)
          temp.push(count -= 1)
        }
      })
    }

    temp = temp.sort(function (a, b) { return b - a; })
    if (temp[0] === undefined) {
      return 1
    } else {
      return temp[0]
    }
  }
}

module.exports = {
  DepthCalculator
};