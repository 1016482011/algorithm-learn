/**
 * https://leetcode-cn.com/problems/excel-sheet-column-title/
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  function getName(num, str) {
    let a = num % 26;
    if (a === 0) a = 26;
    str = String.fromCharCode(a + 64) + str;
    if (num - a === 0) return str;
    return getName((num - a) / 26, str);
  }
  return getName(n, "");
};
