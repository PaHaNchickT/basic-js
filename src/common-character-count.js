const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(str1, str2) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let i
  let arr1 = []
  let arr2 = []
  let out
  i = 0
  while (i < str1.length) {
    if (str1[i] === str1[i + 1]) {
      arr1.push(`${str1[i]}${str1[i + 1]}`)
    } else if (str1[i] === str1[i - 1]) {
      console.log('')
    } else {
      arr1.push(str1[i])
    }
    i++
  }
  i = 0
  while (i < str2.length) {
    if (str2[i] === str2[i + 1]) {
      arr2.push(`${str2[i]}${str2[i + 1]}`)
    } else if (str2[i] === str2[i - 1]) {
      console.log('')
    } else {
      arr2.push(str2[i])
    }
    i++
  }
  // arr1.forEach((e1, i1) => {
  //   arr2.forEach((e2, i2) => {
  //     out.push(e1)
  //     out.push(e2) 
  //     return
  //   })
  // })
  // out = out.sort((a, b) => {
  //   return a - b
  // })
  let temp = ''
  out = arr1.filter(i => arr2.includes(i))
  out.forEach(e => {
    temp = temp+e
  })
  return temp.length
}

module.exports = {
  getCommonCharacterCount
};
