const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let count = 0
const chainMaker = {
  chain: '',
  getLength() {
    return chainMaker.chain.split('').filter(e => {
      if (e !== '~' && e !== '(' && e !== ')') {
        return e
      }
    }).length
  },
  addLink(value) {
    if (count === 0 && chainMaker.chain.length > 0) {
      chainMaker.chain = ''
    }
    if (typeof value === 'function') {
      chainMaker.chain = `${chainMaker.chain}~( function () { } )~`
    } else {
      chainMaker.chain = `${chainMaker.chain}~( ${value} )~`
    }
    count++
    return chainMaker
  },
  removeLink(pos) {
    console.log(this.chain.length)
    if (typeof pos !== 'number' || pos <= 0 || 7 * pos > chainMaker.chain.length) {
      chainMaker.chain = ''
      throw new Error('You can\'t remove incorrect link!')
    }
    let temp = chainMaker.chain.slice(1, chainMaker.chain.length).split('~')
    temp.forEach((e, i) => {
      temp[pos + (pos - 2)] = ''
    })
    chainMaker.chain = ``
    temp.forEach(e => {
      if (e !== '') {
        chainMaker.chain = `${chainMaker.chain}~${e}~`
      }
    })
    return chainMaker
  },
  reverseChain() {
    let temp = chainMaker.chain.slice(1, chainMaker.chain.length).split('~').reverse()
    chainMaker.chain = ``
    temp.forEach(e => {
      if (e !== '') {
        chainMaker.chain = `${chainMaker.chain}~${e}~`
      }
    })
    return chainMaker
  },
  finishChain() {
    let out = chainMaker.chain
    chainMaker.chain = ''
    return out.slice(1, out.length - 1)
  }
};

module.exports = {
  chainMaker
};
