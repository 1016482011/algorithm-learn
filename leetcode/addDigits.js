/**
 * https://leetcode-cn.com/problems/add-digits/
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return 1 + ((num - 1) % 9);
};
