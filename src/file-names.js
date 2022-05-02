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
  let temp = {}
  let out = []
  arr.forEach(e => {
    if (temp[e] === undefined) {
      temp[e] = 0
      out.push(e)
    } else if (`${e}(${temp[e]})` === temp[`${e}(${temp[e]})`]) {
      out.push(`${e}(${temp[e]})`)
    } else {
      temp[e] = temp[e] + 1
      out.push(`${e}(${temp[e]})`)
    }
  })
  return out
}

module.exports = {
  renameFiles
};
