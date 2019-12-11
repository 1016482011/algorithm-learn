/**
 * @param {number} numRows
 * @return {number[][]}
 * https://leetcode-cn.com/problems/pascals-triangle/
 */
var generate = function(numRows) {
  let arr = [],
    temp = [];
  for (let i = 0; i < numRows; i++) {
    temp = [1];
    temp[i] = 1;
    for (let j = 1; j < i; j++) {
      temp[j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
    arr.push(temp);
  }
  return arr;
};
