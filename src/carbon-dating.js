const { NotImplementedError } = require('../extensions/index.js');

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sample) {
  let k = 0.693/HALF_LIFE_PERIOD
  if (typeof sample !== typeof 'string') {
    return false
  } 
  sample = +sample
  if (sample.toString() === 'NaN') {
    return false
  }
  if (typeof sample !== typeof 1) {
    return false
  } else if (sample === undefined || sample <= 0) {
    return false
  } else if (Math.ceil(Math.log(MODERN_ACTIVITY/sample)/k) < 0) {
    return false
  } else if (Math.ceil(Math.log(MODERN_ACTIVITY/sample)/k) == NaN || Math.ceil(Math.log(MODERN_ACTIVITY/sample)/k) == Infinity) {
    return false
  } else {
      return Math.ceil(Math.log(MODERN_ACTIVITY/sample)/k)
    }
}

module.exports = {
  dateSample
};
