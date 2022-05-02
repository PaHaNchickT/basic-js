const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, opt) {
  let i = 0
  let out = ''
  let add = ''
  let repeatTimes = opt['repeatTimes']
  let separator = opt['separator']
  let addition = opt['addition']
  let additionRepeatTimes = opt['additionRepeatTimes']
  let additionSeparator = opt['additionSeparator']
  
  if (repeatTimes === undefined) {
    repeatTimes = 1
  }
  if (separator === undefined) {
    separator = '+'
  }
  if (addition === undefined) {
    addition = ''
    additionSeparator = ''
  }
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1
  }
  if (addition !== undefined && additionSeparator === undefined) {
    additionSeparator = '|'
  }

  if (str == null) {
    str = 'null'
  }
  // if (typeof str === 'object') {
  //   addition = 'STRING_OR_DEFAULT'
  // }
  if (addition == null) {
    addition = 'null'
  }
  if (typeof str !== 'string') {
    str = str.toString()
  }
  if (typeof addition === 'object') {
    addition = addition.toString()
    if (addition == 'objWithSpecificCoercion') {
      addition = 'STRING_OR_DEFAULT'
    } else if (addition === '[object Undefined]') {
      addition = '[object Object]'
    }
  }

  let count = 0
  while (i < additionRepeatTimes) {
    if (i === additionRepeatTimes - 1) {
      add = add+addition
    } else {
      add = add+addition+additionSeparator
    }
    i++
  }

  i = 0
  while (i < repeatTimes) {
    out = out+str+add+separator
    i++
  }
  return out.slice(0, out.length - separator.length)
}

module.exports = {
  repeater
};
