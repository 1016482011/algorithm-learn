/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0],
    res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = sum < 0 ? nums[i] : sum + nums[i];
    res = Math.max(sum, res);
  }
  return res;
};
