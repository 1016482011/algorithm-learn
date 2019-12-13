/**
 * https://leetcode-cn.com/problems/excel-sheet-column-number/
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let pow = s.length - 1,
    sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += (s[i].charCodeAt() - 64) * Math.pow(26, pow);
    pow--;
  }
  return sum;
};
