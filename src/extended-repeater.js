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
 function repeater(str) {
  let repeatTimes = arguments[1].repeatTimes
      separator = arguments[1].separator
      add = arguments[1].addition
      addRepeatTimes = arguments[1].additionRepeatTimes
      addSeparator = arguments[1].additionSeparator
      out = '',
      sub = ''
  if (str === null) {
      str = 'null'
  } else {
      str = str.toString()
      if (str === '[object Object]') {
          str = 'STRING_OR_DEFAULT'
      }
  }
  // console.log(arguments[1])
  // console.log(str, repeatTimes, separator, add, addRepeatTimes, addSeparator)
  if (repeatTimes === undefined) {
      repeatTimes = 1
  }
  if (addRepeatTimes === undefined) {
      addRepeatTimes = 1
  }
  if (separator !== undefined) {
      separator = separator.toString()
  } else {
      separator = '+'
  }
  if (add === null) {
      add = 'null'
  } else if (add !== undefined) {
      for (let keys in add) {
      if (typeof keys !== undefined) {
          add = add.toString()
      } else {
          add = 'STRING_OR_DEFAULT'
      }
  }
      
  } else {
      add = ''
  }
  if (addSeparator !== undefined) {
      addSeparator = addSeparator.toString()
  } else {
      addSeparator = '|'
  }

  for (i = 0; i<addRepeatTimes; i++) {
      sub = sub+add+addSeparator
  }
  sub = str + sub.slice(0, sub.length - addSeparator.length)
  
  for (j = 0; j<repeatTimes; j++) {
      out = out+sub+separator 
  }
  out = out.slice(0, out.length - separator.length)
  return out
}


module.exports = {
  repeater
};
