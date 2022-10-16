const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  let out = [],
    count1 = 0,
    count2 = 0
  out.push(arr[0])
  for (let ind = 0; ind < arr.length; ind++) {
    arr.forEach((e, i) => {
      console.log()
      if ((arr[ind] === e && ind !== i) && arr[ind].slice(arr[ind].length - 3, arr[ind].length) !== '(1)') {
        count1++
        arr[i] = `${e}(${count1})`
      } else if ((arr[ind] === e && i > ind) && arr[ind].slice(arr[ind].length - 3, arr[ind].length) === '(1)') {
        count2++
        arr[i] = `${e}(${count2})`
      }
    })
  }
  return arr
}


module.exports = {
  renameFiles
};
