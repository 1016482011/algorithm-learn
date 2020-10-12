/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/missing-number/submissions/
 */
var missingNumber = function(nums) {
  let sum = 0
  let len = nums.length
  for(let i = 0;i < len;i++){
      sum += nums[i]
  }
  return len * (len + 1) / 2 - sum
};