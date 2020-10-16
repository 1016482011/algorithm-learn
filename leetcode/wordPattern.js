/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * https://leetcode-cn.com/problems/word-pattern/
 */
var wordPattern = function(pattern, s) {
  let patternHash = {}
  let i = 1
  let pstr = ''
  let sstr = ''
  for (let o of pattern) {
      if (typeof patternHash[o] === 'undefined') {
          patternHash[o] = i
          pstr += i
          i++
      } else {
          pstr += patternHash[o]
      }
  }
  i = 1
  patternHash = {}
  for (let o of s.split(' ')) {
      if (typeof patternHash[o] === 'undefined') {
          patternHash[o] = i
          sstr += i
          i++
      } else {
          sstr += patternHash[o]
      }
  }
  return pstr === sstr
};