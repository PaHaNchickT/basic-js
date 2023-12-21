const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode
  }

  encrypt(word, key) {
    if (word === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let tempKey = key.toUpperCase(),
      tempWord = word.toUpperCase(),
      out = '',
      alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^% :'.split(''),
      keyAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      j = 0

    for (i = 0; i <= word.length; i++) {
      let a, b
      if (j > key.length - 1) {
        j = 0
      }

      alp.forEach((e, ind) => {
        if (ind < 26 && (tempWord[i] === e)) {
          a = ind
          keyAlp.forEach((el, indKey) => {
            if (el === tempKey[j]) {
              b = indKey
              out = out + keyAlp[(a + b) % 26]
            }
          })

        } else if (ind >= 26 && (tempWord[i] === e)) {
          out = out + e
          j--
        }
      })
      j++
    }

    if (this.mode === false) {
      return out.split('').reverse().join('')
    } else {
      return out
    }
  }
  decrypt(word, key) {
    if (word === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let tempKey = key.toUpperCase(),
      tempWord = word.toUpperCase(),
      out = '',
      alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^% :'.split(''),
      keyAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      j = 0

    for (i = 0; i <= word.length; i++) {
      let a, b
      if (j > key.length - 1) {
        j = 0
      }

      alp.forEach((e, ind) => {
        if (ind < 26 && (tempWord[i] === e)) {
          a = ind
          keyAlp.forEach((el, indKey) => {
            if (el === tempKey[j]) {
              b = indKey
              if ((26 + a - b) >= 26) {
                out = out + keyAlp[a - b]
              } else {
                out = out + keyAlp[26 + a - b]
              }
            }
          })
        } else if (ind >= 26 && (tempWord[i] === e)) {
          out = out + e
          j--
        }
      })
      j++
    }

    if (this.mode === false) {
      return out.split('').reverse().join('')
    } else {
      return out
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
