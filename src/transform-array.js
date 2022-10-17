const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let out = [],
      ind = -1
  if (arr instanceof Array === false) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  arr.forEach((e, i) => {
    switch (e) {
      case '--discard-next': {
        if (i === arr.length-1) {
          return arr
        }
        if (arr[i+2] === '--double-prev') {
          arr[i+1] = null
        }
        ind = arr[i+1]
        break;
      }
      case '--discard-prev': {
        if (i === 0) {
          return arr
        }
        out.pop()
        break;
      }
      case '--double-next': {
        if (i === arr.length-1) {
          return arr
        }
        out.push(arr[i+1])
        break;
      }
      case '--double-prev': {
         if (i === 0) {
          return arr
        }
        if (arr[i-1] !== null) {
          out.push(arr[i-1])
        }
        break;
      }
      default: {
        if (i !== ind && e !== null) {
          out.push(e)
        }
        break;
      }
    }
  })
  return out
}

module.exports = {
  transform
};
