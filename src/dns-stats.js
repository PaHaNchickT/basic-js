const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(input) {
  let all = {}
  input.forEach((e, i) => {
    let element = e.split('.')
    element.reverse()
    let part = []
    let piece = ''
    element.forEach(el => {
      piece = piece+'.'+el
      console.log(piece)
      if (all[piece] === undefined) {
        all[piece] = 1
      } else {
        all[piece] = all[piece] + 1
      }
    })
  })
  return all
}

module.exports = {
  getDNSStats
};
