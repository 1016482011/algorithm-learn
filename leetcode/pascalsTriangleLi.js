/**
 * @param {number} rowIndex
 * @return {number[]}
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 */
var getRow = function(rowIndex) {
  let arr = [],
    temp = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    temp = [1];
    temp[i] = 1;
    for (let j = 1; j < i; j++) {
      temp[j] = arr[j - 1] + arr[j];
    }
    arr = temp;
  }
  return arr;
};
