/**
 * https://leetcode-cn.com/problems/palindrome-number/submissions/
 * @param {number} x
 * @return {boolean}
 * 初版
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let n = x;
  let r = 0;
  while (n !== 0) {
    const p = n % 10;
    n = parseInt(n / 10);
    r = r * 10 + p;
  }
  return r === x;
};
