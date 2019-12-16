/**
 * https://leetcode-cn.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 * 思路对了，有点偏差没写出来
 */
var rob = function(nums) {
  let prevMax = 0;
  let currMax = 0;
  for (let x of nums) {
    let temp = currMax;
    currMax = Math.max(prevMax + x, currMax);
    prevMax = temp;
  }
  return currMax;
};
