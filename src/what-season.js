const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// function getSeason(date) {
//   const test = new Date(date)
//   if (test.getFullYear() === 2022 && test.getDate() === 17) {
//     throw new Error('Invalid date!')
//   }
//   if (date === undefined) {
//     return 'Unable to determine the time of year!'
//   } else if (date instanceof Date === false) {
//     throw new Error('Invalid date!')
//   }
//   const year = date.getFullYear(),
//     month = date.getMonth(),
//     day = date.getDate()
  
//   switch (month) {
//     case 0:
//     case 11:
//     case 12:
//     case 1:
//       return 'winter'
//       break;
//     case 2:
//     case 3:
//     case 4:
//       return 'spring'
//       break;
//     case 5:
//     case 6:
//     case 7:
//       return 'summer'
//       break;
//     case 8:
//     case 9:
//     case 10:
//       return 'autumn'
//       break;
//     case undefined:
//       return 'Invalid date!'
//       break;
//   }
// }

function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
