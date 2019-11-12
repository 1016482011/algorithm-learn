/**
 * https://leetcode-cn.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 * 自己实现版本
 */
var reverse = function(x) {
  if (x === 0) return 0
  let n = x > 0 ? '' : '-'
  x = Math.abs(x)
  while (x >= 1) {
    n += x % 10
    x = Math.floor(x / 10)
  }
  return n * 1 > 2147483647 || n * 1 < -2147483648 ? 0 : n * 1
}

/**
 * @param {number} x
 * @return {number}
 * 看解答后版本
 */
var reverse = function(x) {
  let r = 0
  while (x !== 0) {
    const p = x % 10
    x = parseInt(x / 10)
    if (r > 214748364 || (r === 214748364 && p > 7)) return 0
    if (r < -214748364 || (r === -214748364 && p < -8)) return 0
    r = r * 10 + p
  }
  return r
}
