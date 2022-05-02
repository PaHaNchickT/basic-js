const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(mac) {
  const sym = ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  mac = mac.split('-')
  let isFalse = 0
  if (mac.length !== 6) {
    return false
  }
  sym.forEach(e1 => {
    mac.forEach(e2 => {
      // console.log(`e2[0] ${e2[0]} e1 ${e1}`)
      if (e2[0] === e1 || e2[1] === e1) {
        isFalse = 1
      }
    })
  })
  if (isFalse === 1) {
    return false
  } else {
    return true
  }
}

module.exports = {
  isMAC48Address
};
