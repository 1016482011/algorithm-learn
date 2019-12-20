/**
 * https://leetcode-cn.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  while (n > 1) {
    if (n % 2 === 1 && n !== 1) return false;
    n /= 2;
  }
  return n === 1;
};
