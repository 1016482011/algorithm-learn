/**
 * https://leetcode-cn.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  function plus(i, arr) {
    arr[i] = arr[i] === 9 ? 0 : arr[i] + 1;
    if (arr[i] !== 0) return arr;
    if (i === 0) {
      arr.unshift(1);
      return arr;
    }
    return plus(i - 1, arr);
  }
  return plus(digits.length - 1, digits);
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne1 = function(digits) {
  for (let i = digits.length - 1; i > -1; i--) {
    digits[i] = digits[i] + 1;
    if (digits[i] !== 10) return digits;
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
  }
};
