const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(input) {
  let out = []
  let temp = ''
  let space = []
  let str = []
  
  // if (typeof input !== 'object' || input === null || input === undefined ) {
  //   return false
  // }
  try {
    input.push(1)
  }
  catch {
    return false
  }
  input.forEach(e => {
    if (typeof e == 'string') {
      console.log(e)
      str.push(e.toUpperCase())
    } else {
      return false
    }
  })
  str.forEach(e => {
    space.push(e.trim())
  })
  space = space.sort()
  space.forEach(e => {
    if (typeof e !== 'string') {
      return false
    } else {
      out.push(e[0])
    }
  })
  temp = ''
  out.forEach(e => {
    temp = temp+e
  })
  return temp
}


module.exports = {
  createDreamTeam
};
